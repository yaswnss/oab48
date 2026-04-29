/* ═══════════════════════════════════════════════════════════
   OAB48 — Service Worker v2.0
   Cache offline completo para uso no iPhone sem internet
═══════════════════════════════════════════════════════════ */

const CACHE_NAME = 'oab48-v2';
const CACHE_STATIC = 'oab48-static-v2';
const CACHE_DYNAMIC = 'oab48-dynamic-v2';

// Arquivos essenciais que devem estar sempre disponíveis offline
const STATIC_ASSETS = [
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// URLs que NUNCA devem ser cacheadas (APIs externas)
const NO_CACHE_URLS = [
  'api.anthropic.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

// ─── INSTALL ─────────────────────────────────────────────
self.addEventListener('install', event => {
  console.log('[OAB48 SW] Installing v2...');
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        console.log('[OAB48 SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[OAB48 SW] Cache failed:', err))
  );
});

// ─── ACTIVATE ────────────────────────────────────────────
self.addEventListener('activate', event => {
  console.log('[OAB48 SW] Activating v2...');
  event.waitUntil(
    Promise.all([
      // Remove old caches
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(k => k !== CACHE_STATIC && k !== CACHE_DYNAMIC)
            .map(k => {
              console.log('[OAB48 SW] Deleting old cache:', k);
              return caches.delete(k);
            })
        )
      ),
      self.clients.claim(),
    ])
  );
});

// ─── FETCH ───────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Skip non-GET and external APIs
  if (event.request.method !== 'GET') return;
  if (NO_CACHE_URLS.some(u => url.includes(u))) return;
  if (!url.startsWith('http')) return;

  // Google Fonts — network first, fall back silently
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_DYNAMIC).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Static assets — cache first, then network
  if (STATIC_ASSETS.some(a => url.endsWith(a.replace('/', '')))) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE_STATIC).then(c => c.put(event.request, clone));
          return res;
        });
      })
    );
    return;
  }

  // All other requests — stale-while-revalidate
  event.respondWith(
    caches.open(CACHE_DYNAMIC).then(cache =>
      cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request)
          .then(res => {
            if (res.ok) cache.put(event.request, res.clone());
            return res;
          })
          .catch(() => cached || new Response('Offline', { status: 503 }));
        return cached || networkFetch;
      })
    )
  );
});

// ─── BACKGROUND SYNC (para quando voltar online) ─────────
self.addEventListener('sync', event => {
  if (event.tag === 'oab48-sync') {
    console.log('[OAB48 SW] Background sync triggered');
  }
});

// ─── PUSH NOTIFICATIONS ──────────────────────────────────
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const title = data.title || 'OAB48 — Hora de estudar! 📚';
  const body = data.body || 'Você tem questões e flashcards para revisar hoje.';
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      tag: 'oab48-reminder',
      requireInteraction: false,
      data: { url: '/index.html' },
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(wins => {
      if (wins.length > 0) return wins[0].focus();
      return clients.openWindow('/index.html');
    })
  );
});
