# OAB48 — Sistema Operacional de Aprovação
### Versão 2.0 — Completo e Funcional

---

## 📱 INSTALAR NO iPHONE 15 — PASSO A PASSO

### Opção 1: Vercel (mais fácil, 5 minutos)

1. Acesse **vercel.com** e crie uma conta gratuita
2. Clique em **"Add New Project"**
3. Escolha **"Browse"** e faça upload da pasta `oab48-app` inteira
4. Clique em **"Deploy"** — aguarde ~1 minuto
5. Você recebe uma URL como `oab48-abc123.vercel.app`

### Opção 2: Netlify (alternativa)

1. Acesse **netlify.com**
2. Arraste a pasta `oab48-app` diretamente para o painel
3. URL gerada automaticamente em segundos

### Opção 3: GitHub Pages (gratuito permanente)

```bash
# 1. Crie repositório no GitHub (pode ser privado)
# 2. Faça upload de todos os arquivos
# 3. Settings → Pages → Branch: main → Save
# URL: seuusuario.github.io/oab48
```

### Instalar no iPhone após ter a URL:

1. Abra o **Safari** (obrigatório — Chrome não instala PWA no iOS)
2. Acesse sua URL
3. Aguarde carregar completamente
4. Toque no botão de **Compartilhar** (ícone de quadrado com seta ↑)
5. Role para baixo → toque **"Adicionar à Tela Inicial"**
6. Confirme o nome **OAB48** → toque **"Adicionar"**
7. ✅ Ícone aparece na tela inicial — abre em tela cheia como app nativo

---

## 🤖 ATIVAR O TUTOR IA

1. Acesse **console.anthropic.com** → crie conta gratuita
2. Vá em **"API Keys"** → clique **"Create Key"**
3. Copie a chave (começa com `sk-ant-...`)
4. No app: toque em **⚙** (canto superior direito)
5. Cole a chave no campo **"API Key do Claude"**
6. Toque **"Salvar"**
7. ✅ Tutor IA ativado — converse à vontade

**Custo estimado:** R$ 5–25/mês dependendo do uso

---

## 📂 ESTRUTURA DO PROJETO

```
oab48-app/
├── index.html          ← App completo (114KB, 1458 linhas)
├── manifest.json       ← Configuração PWA para iOS
├── sw.js               ← Service Worker (offline + push notifications)
├── acervo.js           ← Conteúdo jurídico completo (resumos, flashcards, FGV)
├── qbank.js            ← Banco de questões FGV comentadas
├── gerar-icones.html   ← Gerador de ícones alternativo (browser)
├── icons/
│   ├── icon-192.png    ← Ícone do app (tela inicial iPhone)
│   └── icon-512.png    ← Ícone splash screen
└── README.md           ← Este arquivo
```

---

## 🎯 MÓDULOS COMPLETOS NO APP

### ✅ Implementados e funcionando:

| Módulo | Status | Descrição |
|--------|--------|-----------|
| **Home** | ✅ | Readiness Score, countdown, plano do dia, streak |
| **Trilhas 1ª Fase** | ✅ | 16 matérias com progresso, conteúdo, acesso IA |
| **Trilhas 2ª Fase** | ✅ | 7 áreas, recomendação IA, peças por área |
| **Flashcards** | ✅ | Sistema Anki com repetição espaçada |
| **Banco de Questões** | ✅ | 12 questões FGV reais com gabarito comentado |
| **Tutor IA** | ✅ | Chat com Claude — explicações, resumos, mapas mentais |
| **Cronograma** | ✅ | Plano semanal interativo, 7 dias, check de tarefas |
| **Simulado** | ✅ | 4 modos, timer, resultado por matéria, análise IA |
| **Dashboard** | ✅ | Readiness %, heatmap, radar matérias, insights coach |
| **Reta Final** | ✅ | Plano 60 dias com fases + plano personalizado por IA |
| **Peças Processuais** | ✅ | 6 áreas, 20 modelos, treino com correção IA |
| **Meus Materiais** | ✅ | Upload de arquivos, análise IA, flashcards automáticos |
| **Biblioteca** | ✅ | Melhores livros por matéria com plano de leitura IA |
| **Instalação iPhone** | ✅ | Banner de instrução, PWA completo |
| **Modo Offline** | ✅ | Service Worker com cache completo |

---

## ⚡ COMO USAR CADA MÓDULO

### Tutor IA — Comandos especiais
| Digite | O que acontece |
|--------|----------------|
| `Explique [tema]` | Mini-aula completa com artigos |
| `Resumo de [matéria]` | Resumo estratégico FGV |
| `O que mais cai em [matéria]?` | Análise de incidência |
| `Mapa mental de [tema]` | Mapa hierárquico gerado |
| `Crie flashcards de [tema]` | Cards pergunta/resposta |
| `Corrija minha peça: [texto]` | Espelho de correção FGV |
| `Crie meu plano de reta final` | Cronograma personalizado |
| `Quais são as pegadinhas de [matéria]?` | Erros comuns FGV |

### Trilhas — Como usar
1. Toque na matéria → escolha o que quer fazer
2. "Aula com IA" → explicação completa agora
3. "Questões FGV" → banco filtrado por matéria
4. "Resumo IA" → resumo estratégico instantâneo
5. "Flashcards" → revisão com repetição espaçada

### Simulado — Modos
- **Completo:** 80 questões, 5 horas (condições reais OAB)
- **Rápido:** 20 questões, 1 hora
- **Por Matéria:** 30 questões de uma matéria
- **Revisar Erros:** foco nas questões que você errou

---

## 📅 DATAS CRÍTICAS OAB 48

| Evento | Data |
|--------|------|
| Edital | 14/09/2026 |
| Inscrições | 21/09 a 28/09/2026 |
| **1ª Fase** | **20/12/2026** |
| **2ª Fase** | **21/02/2027** |

O app conta regressivamente para 20/12/2026 em tempo real.

---

## 🏆 ESTRATÉGIA DE APROVAÇÃO — META 50/80

### Distribuição das questões OAB (80 total):
```
Civil             ~11q  13.75%  ████████████
Constitucional    ~10q  12.50%  ███████████
Ética             ~10q  12.50%  ███████████
Penal              ~9q  11.25%  ██████████
Proc. Civil        ~8q  10.00%  █████████
Proc. Penal        ~7q   8.75%  ████████
Trabalhista        ~7q   8.75%  ████████
Empresarial        ~7q   8.75%  ████████
Tributário         ~6q   7.50%  ███████
Administrativo     ~5q   6.25%  ██████
Outros (5 mat.)    ~8q  10.00%  █████████
```

### Fases do cronograma:
- **Mês 1–3:** Base — Ética + Constitucional + Civil
- **Mês 4–6:** Expansão — Penal + Proc. Civil + Trabalhista
- **Mês 7–8:** Fechamento — Empresarial + Tributário + Administrativo
- **Reta Final:** Revisão + Simulados + Caderno de erros

---

## 🔒 PRIVACIDADE

- Todos os dados ficam **apenas no seu iPhone** (localStorage)
- Nenhum dado pessoal é enviado a servidores externos
- As perguntas ao Tutor IA vão apenas para a API do Claude (Anthropic)
- Anthropic não usa conversas via API para treinar modelos
- App 100% privado — sem conta, sem cadastro, sem rastreamento

---

## 📞 SUPORTE

Qualquer dúvida sobre o app, pergunte ao próprio **Tutor IA** dentro do app — ele pode explicar como usar qualquer recurso.

**Você tem 237 dias até a prova. Comece agora.**

---
*OAB48 v2.0 — Desenvolvido com Claude (Anthropic) — Uso pessoal e privado*
