// ═══════════════════════════════════════════════════════════
// OAB48 — ACERVO JURÍDICO COMPLETO
// Conteúdo interno do aplicativo
// ═══════════════════════════════════════════════════════════

const ACERVO = {

  // ────────────────────────────────────────────────────────
  // ÉTICA PROFISSIONAL
  // ────────────────────────────────────────────────────────
  etica: {
    incidencia: 'ALTÍSSIMA — ~10 questões por exame. A matéria mais previsível.',
    topicos: [
      { titulo: 'Estatuto da OAB (Lei 8.906/94)', peso: 'Essencial', descricao: 'Base de tudo. Leia o Estatuto completo ao menos 2x.' },
      { titulo: 'Código de Ética e Disciplina (CED)', peso: 'Essencial', descricao: 'Sigilo profissional, honorários, publicidade, incompatibilidades.' },
      { titulo: 'Sigilo Profissional', peso: 'Muito Alto', descricao: 'Direito do cliente, não do advogado. Exceções: autodefesa do advogado.' },
      { titulo: 'Honorários Advocatícios', peso: 'Alto', descricao: 'Contrato de honorários, quantum, sucumbência, partilha.' },
      { titulo: 'Impedimentos e Incompatibilidades', peso: 'Alto', descricao: 'Art. 28 e 30 do EOAB — decorar a lista.' },
      { titulo: 'Inviolabilidade do Advogado', peso: 'Alto', descricao: 'Art. 7º do EOAB — direitos do advogado.' },
      { titulo: 'Mandato e Substabelecimento', peso: 'Médio', descricao: 'Formas, prazo, efeitos do substabelecimento com e sem reservas.' },
      { titulo: 'Processo Disciplinar', peso: 'Médio', descricao: 'Infrações, sanções disciplinares, prescrição.' },
      { titulo: 'Publicidade Advocatícia', peso: 'Médio', descricao: 'O que é permitido e proibido na publicidade do advogado.' },
    ],
    resumo: `
# ÉTICA PROFISSIONAL — Resumo Estratégico OAB

## O QUE A FGV MAIS COBRA

### 1. SIGILO PROFISSIONAL
- Obrigação ABSOLUTA do advogado (art. 34, VII, EOAB)
- É direito do CLIENTE, não do advogado
- Persiste mesmo após encerramento do mandato
- **Exceção:** autodefesa do advogado (quando for acusado pelo próprio cliente)
- O sigilo abrange até crimes do cliente

### 2. HONORÁRIOS
**Contrato escrito:** recomendado, mas não obrigatório (cuidado na questão)
**Honorários de sucumbência:** pertencem ao advogado, não ao cliente
- O cliente NÃO pode transacionar os honorários de sucumbência sem anuência do advogado
**Fixação judicial:** entre 10% e 20% sobre o valor da condenação (regra geral CPC)
**Partilha:** vedada com não-advogados (exceto herdeiros de advogado falecido)

### 3. INVIOLABILIDADE (art. 7º EOAB)
O advogado tem direito:
- Comunicar-se pessoal e reservadamente com seu cliente (mesmo preso)
- Inviolabilidade do escritório, instrumentos de trabalho, correspondências
- Não ser preso em flagrante na sala de audiência
- Usar de razões e meios legais para defender seus clientes

### 4. INCOMPATIBILIDADES (art. 28 EOAB)
São incompatíveis com advocacia:
- Membros do Poder Judiciário (juízes, desembargadores)
- Membros do Ministério Público
- Delegados de polícia em exercício
- Militares em serviço ativo
- Ocupantes de cargos incompatíveis com a advocacia

**Atenção:** Servidores públicos PODEM advogar, desde que não atuem contra a Fazenda Pública da entidade à qual pertencem.

### 5. MANDATO
- Procuração: instrumento do mandato
- Substabelecimento COM reservas: substabelecente mantém poderes
- Substabelecimento SEM reservas: substabelecente transfere todos os poderes
- Revogação: pelo cliente a qualquer tempo; pelo advogado com 10 dias de antecedência

### 6. INFRAÇÃO E SANÇÕES DISCIPLINARES
**Sanções (ordem crescente de gravidade):**
1. Censura
2. Suspensão (30 dias a 12 meses)
3. Exclusão
4. Multa (pode cumular)

**Prescrição:** 5 anos (contados da data do fato ou do conhecimento pelo prejudicado)

## QUESTÕES MAIS COBRADAS FGV

**Padrão 1:** Advogado descobre crime do cliente. Pode revelar? **NÃO** (sigilo absoluto)
**Padrão 2:** Cliente não paga honorários. Advogado pode abandonar causa? **Pode renunciar**, mas deve aguardar 10 dias para não prejudicar o cliente
**Padrão 3:** Advogado quer fazer publicidade. Pode? **Pode**, desde que não seja captação de clientela, não use casos específicos, não atribua qualidades pessoais subjetivas
**Padrão 4:** Cargo público + advocacia. Compatível? Depende do cargo — decorar os incompatíveis
    `,
    flashcards: [
      { f: 'O sigilo profissional do advogado pode ser quebrado quando?', b: 'Apenas em autodefesa do próprio advogado quando acusado pelo cliente. Em todos os outros casos é ABSOLUTO, incluindo quando o cliente pratica crimes.' },
      { f: 'Os honorários de sucumbência pertencem a quem?', b: 'Ao ADVOGADO. O cliente não pode transacionar esses honorários sem anuência expressa do advogado (art. 24, §4º EOAB).' },
      { f: 'Qual o prazo mínimo que o advogado deve notificar o cliente antes de renunciar ao mandato?', b: '10 (dez) dias, para que o cliente possa constituir novo advogado e não seja prejudicado (art. 5º, §3º CED).' },
      { f: 'Delegado de polícia pode advogar?', b: 'NÃO. Delegado em exercício é incompatível com a advocacia (art. 28, VI EOAB). A incompatibilidade é absoluta enquanto no exercício do cargo.' },
      { f: 'Servidor público federal pode advogar?', b: 'Sim, PODE. Porém não pode atuar em causas contra a União, suas autarquias, fundações e entidades de direito público federal (art. 30, I EOAB).' },
    ],
    legislacao: [
      'Art. 5º, §3º CED — Renúncia ao mandato (10 dias)',
      'Art. 7º EOAB — Direitos e inviolabilidade do advogado',
      'Art. 24 EOAB — Honorários de sucumbência',
      'Art. 28 EOAB — Incompatibilidades',
      'Art. 30 EOAB — Impedimentos',
      'Art. 34 EOAB — Infrações disciplinares',
      'Art. 37 EOAB — Sanções disciplinares',
    ],
  },

  // ────────────────────────────────────────────────────────
  // DIREITO CONSTITUCIONAL
  // ────────────────────────────────────────────────────────
  constitucional: {
    incidencia: 'ALTÍSSIMA — 9-11 questões por exame. Maior matéria da 1ª fase.',
    topicos: [
      { titulo: 'Direitos e Garantias Fundamentais (art. 5º)', peso: 'Crítico', descricao: 'O artigo mais cobrado da CF/88 no OAB.' },
      { titulo: 'Controle de Constitucionalidade', peso: 'Crítico', descricao: 'ADI, ADC, ADPF, ADO, Mandado de Injunção.' },
      { titulo: 'Organização do Estado', peso: 'Muito Alto', descricao: 'União, Estados, DF, Municípios, repartição de competências.' },
      { titulo: 'Poderes da República', peso: 'Alto', descricao: 'Executivo, Legislativo, Judiciário — competências e funções.' },
      { titulo: 'Remédios Constitucionais', peso: 'Alto', descricao: 'HC, HD, MS, MI, AP — pressupostos e legitimidade.' },
      { titulo: 'Processo Legislativo', peso: 'Alto', descricao: 'Iniciativa, emenda, veto, promulgação.' },
      { titulo: 'Ordem Econômica e Social', peso: 'Médio', descricao: 'Princípios da ordem econômica, ADCT relevante.' },
      { titulo: 'Direitos Sociais', peso: 'Médio', descricao: 'Art. 6º e 7º CF — rol dos direitos sociais.' },
      { titulo: 'Princípios Fundamentais', peso: 'Médio', descricao: 'Fundamentos e objetivos da República (art. 1º e 3º).' },
    ],
    resumo: `
# DIREITO CONSTITUCIONAL — Resumo Estratégico OAB

## DIREITOS FUNDAMENTAIS (ART. 5º) — O MAIS COBRADO

### Características dos Direitos Fundamentais
- **Universalidade:** aplicam-se a todos (nacionais e estrangeiros residentes)
- **Historicidade:** conquistados historicamente
- **Irrenunciabilidade:** não podem ser renunciados
- **Inalienabilidade:** não podem ser transferidos
- **Imprescritibilidade:** não se perdem pelo não uso
- **Aplicação imediata:** §1º — normas de aplicação imediata

### Eficácia Horizontal dos Direitos Fundamentais
Os direitos fundamentais vinculam não só o Estado, mas também PARTICULARES (STF).

### REMÉDIOS CONSTITUCIONAIS — Tabela

| Remédio | Protege | Legitimidade Ativa |
|---------|---------|-------------------|
| **Habeas Corpus** | Liberdade de locomoção | Qualquer pessoa, inclusive o próprio paciente |
| **Habeas Data** | Informações pessoais em bancos de dados públicos | Titular dos dados |
| **Mandado de Segurança** | Direito líquido e certo, não amparado por HC ou HD | Titular do direito |
| **Mandado de Injunção** | Omissão legislativa que inviabilize direito fundamental | Titular do direito |
| **Ação Popular** | Anulação de ato lesivo ao patrimônio público | Cidadão (eleitor) |

### CONTROLE DE CONSTITUCIONALIDADE

**Difuso (concreto):**
- Qualquer juiz pode declarar inconstitucionalidade
- Efeitos inter partes (entre as partes)
- Controle incidental

**Concentrado (abstrato — STF):**

| Ação | Objeto | Legitimados |
|------|--------|-------------|
| **ADI** | Lei/ato normativo federal ou estadual inconstitucional | Art. 103 CF (9 legitimados) |
| **ADC** | Declarar constitucionalidade de lei federal | Art. 103 CF |
| **ADPF** | Ato anterior à CF/88, lei municipal, direito pré-constitucional | Art. 103 CF |
| **ADO** | Omissão legislativa inconstitucional | Art. 103 CF |

**Os 9 legitimados do art. 103:**
1. Presidente da República
2. Mesa do Senado Federal
3. Mesa da Câmara dos Deputados
4. Mesa de Assembleia Legislativa ou Câmara Legislativa DF
5. Governador de Estado ou DF
6. Procurador-Geral da República
7. Conselho Federal da OAB
8. Partido Político com representação no Congresso
9. Confederação Sindical ou Entidade de Classe de âmbito nacional

**Legitimados Universais:** podem propor sobre qualquer matéria
**Legitimados Especiais:** precisam demonstrar pertinência temática

## PROCESSO LEGISLATIVO

**Iniciativa das leis:**
- Regra: qualquer membro do CN, Presidente da República, STF, Tribunais Superiores, PGR, cidadãos
- Iniciativa privativa do Presidente: administração pública federal, militares, questões tributárias

**Espécies normativas (art. 59):**
EC > LC > LO > MPv > LEI DELEGADA > Decreto Legislativo > Resolução

**Emenda Constitucional:**
- Proposta: 1/3 dos membros de cada Casa, Presidente, mais da metade das AL
- Aprovação: 3/5 de cada Casa, em 2 turnos de votação
- Cláusulas Pétreas (art. 60, §4º): forma federativa, voto direto/secreto/universal/periódico, separação de poderes, direitos e garantias individuais

## ORGANIZAÇÃO DO ESTADO

**Competências:**
- **Exclusiva da União (art. 21):** emitir moeda, declarar guerra, relações exteriores...
- **Privativa da União (art. 22):** legislar sobre direito civil, penal, trabalho... (LC pode delegar)
- **Concorrente (art. 24):** direito tributário, financeiro, econômico, penitenciário...
- **Comum (art. 23):** saúde, educação, cultura, meio ambiente...

**Regra das competências concorrentes:**
União estabelece NORMAS GERAIS → Estados suplementam → Ausência de lei federal: Estado exerce competência plena → Lei federal superveniente suspende (não revoga) a lei estadual no que for contrária
    `,
    flashcards: [
      { f: 'Quais são as cláusulas pétreas da CF/88?', b: 'Art. 60, §4º: (I) forma federativa de Estado; (II) voto direto, secreto, universal e periódico; (III) separação dos Poderes; (IV) direitos e garantias individuais.' },
      { f: 'Qual a diferença entre HC, HD e MS?', b: 'HC protege liberdade de locomoção; HD protege informações pessoais em bancos de dados públicos; MS protege direito líquido e certo não amparado por HC ou HD.' },
      { f: 'O que é "pertinência temática" no controle concentrado?', b: 'Exigência para legitimados especiais (Governadores, Mesas de AL, Confederações sindicais e entidades de classe) de demonstrar relação entre seu interesse e o objeto da ADI/ADC.' },
      { f: 'Qual o quórum para aprovação de Emenda Constitucional?', b: '3/5 dos membros de cada Casa do Congresso Nacional, em dois turnos de votação em cada uma (art. 60, §2º CF).' },
      { f: 'O que é eficácia horizontal dos direitos fundamentais?', b: 'Vinculação dos direitos fundamentais nas relações entre PARTICULARES (não apenas Estado x particular). Reconhecida pelo STF — ex.: nulidade de exclusão de sócio sem devido processo.' },
    ],
  },

  // ────────────────────────────────────────────────────────
  // DIREITO CIVIL
  // ────────────────────────────────────────────────────────
  civil: {
    incidencia: 'ALTÍSSIMA — 10-12 questões por exame. Maior matéria em volume.',
    topicos: [
      { titulo: 'Parte Geral — Pessoas, Bens e Fatos Jurídicos', peso: 'Crítico', descricao: 'Capacidade, personalidade, desconsideração da PJ.' },
      { titulo: 'Teoria Geral dos Contratos', peso: 'Crítico', descricao: 'Formação, vícios, extinção, espécies contratuais.' },
      { titulo: 'Responsabilidade Civil', peso: 'Muito Alto', descricao: 'Subjetiva, objetiva, excludentes, danos.' },
      { titulo: 'Direitos Reais — Propriedade', peso: 'Alto', descricao: 'Usucapião, servidões, hipoteca, penhor, anticrese.' },
      { titulo: 'Família — Casamento e União Estável', peso: 'Alto', descricao: 'Regimes de bens, divórcio, alimentos, filiação.' },
      { titulo: 'Sucessões', peso: 'Alto', descricao: 'Herança legítima, testamento, legítima dos herdeiros.' },
      { titulo: 'Obrigações', peso: 'Alto', descricao: 'Modalidades, transmissão, extinção, inadimplemento.' },
      { titulo: 'Contratos em Espécie', peso: 'Médio', descricao: 'Compra e venda, locação, doação, mútuo, fiança.' },
      { titulo: 'Posse', peso: 'Médio', descricao: 'Teoria, classificação, efeitos, interditos possessórios.' },
    ],
    resumo: `
# DIREITO CIVIL — Resumo Estratégico OAB

## PARTE GERAL

### Personalidade e Capacidade
- **Pessoa natural:** personalidade começa com o nascimento com vida (art. 2º CC)
- **Nascituro:** tem seus direitos resguardados desde a concepção
- **Capacidade de direito (gozo):** toda pessoa tem (absoluta)
- **Capacidade de fato (exercício):** pode ser restringida — tutela e curatela

**Absolutamente incapazes:** menores de 16 anos (apenas)
**Relativamente incapazes (art. 4º CC):** maiores de 16 e menores de 18; ébrios habituais; pródigos; pessoas que não podem exprimir vontade

### Pessoa Jurídica — Desconsideração
**Teoria Maior (CC e CDC):** exige abuso da personalidade + desvio de finalidade OU confusão patrimonial
**Teoria Menor (relações de consumo e ambiental):** basta o prejuízo (insolvência)
**Desconsideração inversa:** atinge o sócio pelo patrimônio da PJ

### Prescrição e Decadência
| | Prescrição | Decadência |
|---|---|---|
| O que extingue | Pretensão (ação) | Direito potestativo |
| Pode ser suspensa/interrompida | SIM | NÃO |
| Pode ser renunciada | Sim (após consumada) | Não (legal) |
| Prazos principais | 3 anos (regra geral CC), 10 anos (subsidiário) | Variados |

## CONTRATOS

### Formação do Contrato
1. **Proposta (policitação):** vincula o proponente
2. **Aceitação:** deve ser integral e tempestiva
3. **Contrato perfeito:** quando aceitação chega ao proponente (teoria da recepção)

### Vícios do Consentimento
- **Erro:** falsa percepção da realidade (substancial = anulável)
- **Dolo:** induzimento malicioso em erro (anulável)
- **Coação:** violência moral que retira a liberdade (anulável)
- **Estado de Perigo:** necessidade urgente de salvar pessoa (anulável)
- **Lesão:** prestação desproporcional por premente necessidade (anulável)
- **Fraude contra credores:** prejudica credores quirografários (anulável — ação pauliana)

### Extinção dos Contratos
- **Resilição:** distrato (bilateral) ou denúncia (unilateral)
- **Resolução:** por inadimplemento
- **Rescisão:** lesão ou estado de perigo
- **Exceção do contrato não cumprido (exceptio):** recusa a cumprir se a outra parte não cumpriu

## RESPONSABILIDADE CIVIL

### Elementos (Responsabilidade Subjetiva)
1. Conduta (ação/omissão)
2. Culpa (dolo, negligência, imprudência, imperícia)
3. Dano
4. Nexo causal

### Responsabilidade Objetiva (sem culpa)
- Risco da atividade (art. 927, §único CC)
- Acidentes de consumo (CDC)
- Estado (CF, art. 37, §6º)
- Empregador por ato do empregado

### Excludentes de Responsabilidade
- Caso fortuito/força maior
- Culpa exclusiva da vítima
- Fato de terceiro
- Exercício regular de direito

## FAMÍLIA

### Regimes de Bens
| Regime | Comunicação |
|--------|-------------|
| Comunhão parcial | Bens adquiridos onerosamente na constância |
| Comunhão universal | Todos os bens (presentes e futuros) |
| Separação total | Nenhum bem se comunica |
| Participação final nos aquestos | Bens adquiridos pelo esforço comum |

**Regime legal (supletivo):** Comunhão Parcial de Bens
**Separação obrigatória:** maiores de 70 anos; dependentes de autorização judicial; pessoas com causa suspensiva

### Alimentos
- Binômio: necessidade do alimentando + possibilidade do alimentante
- Irrenunciáveis (mas podem ser dispensados por declaração)
- Impenhoráveis
- Imprescritíveis (direito) — mas prestações vencem em 2 anos

## SUCESSÕES

### Ordem de Vocação Hereditária (art. 1829 CC)
1. Descendentes (+ cônjuge, conforme regime)
2. Ascendentes (+ cônjuge)
3. Cônjuge
4. Colaterais até 4º grau

**Herdeiros necessários:** descendentes, ascendentes e cônjuge
**Legítima:** 50% do patrimônio líquido — indisponível para herdeiros necessários
    `,
    flashcards: [
      { f: 'Quais são os absolutamente incapazes segundo o CC/2002?', b: 'Apenas os menores de 16 anos (art. 3º CC). O Estatuto da Pessoa com Deficiência (2015) revogou as demais hipóteses.' },
      { f: 'Qual a teoria adotada pelo CC para formação do contrato?', b: 'Teoria da RECEPÇÃO (ou agnição): o contrato se forma quando a aceitação é RECEBIDA pelo proponente (não quando é expedida).' },
      { f: 'Qual a diferença entre resilição e resolução do contrato?', b: 'RESILIÇÃO: extinção por vontade das partes (distrato = bilateral; denúncia = unilateral), sem inadimplemento. RESOLUÇÃO: extinção por inadimplemento de uma das partes.' },
      { f: 'Qual é o regime de bens legal (supletivo) no casamento?', b: 'Comunhão Parcial de Bens — aplica-se quando os nubentes não escolhem regime (art. 1640 CC).' },
      { f: 'Quais são os herdeiros necessários?', b: 'Descendentes, ascendentes e cônjuge (art. 1845 CC). Eles têm direito à legítima (50% da herança), que não pode ser afastada por testamento.' },
    ],
  },

  // ────────────────────────────────────────────────────────
  // DIREITO PENAL
  // ────────────────────────────────────────────────────────
  penal: {
    incidencia: 'ALTA — 8-10 questões por exame.',
    topicos: [
      { titulo: 'Teoria do Crime', peso: 'Crítico', descricao: 'Fato típico, ilicitude, culpabilidade, punibilidade.' },
      { titulo: 'Crimes contra a pessoa', peso: 'Muito Alto', descricao: 'Homicídio, lesão corporal, feminicídio.' },
      { titulo: 'Crimes contra o patrimônio', peso: 'Muito Alto', descricao: 'Roubo, furto, extorsão, estelionato.' },
      { titulo: 'Pena — espécies e aplicação', peso: 'Alto', descricao: 'Dosimetria, circunstâncias, concurso de crimes.' },
      { titulo: 'Crimes hediondos', peso: 'Alto', descricao: 'Lei 8.072/90 — rol, vedações, progressão.' },
      { titulo: 'Lei de Drogas (11.343/06)', peso: 'Alto', descricao: 'Tráfico vs. porte, causa de diminuição, traficante ocasional.' },
      { titulo: 'Extinção da punibilidade', peso: 'Médio', descricao: 'Prescrição, morte, anistia, graça, indulto, perempção.' },
      { titulo: 'Concurso de crimes', peso: 'Médio', descricao: 'Material, formal, crime continuado.' },
      { titulo: 'Iter criminis', peso: 'Médio', descricao: 'Cogitação, preparação, execução, consumação.' },
    ],
    resumo: `
# DIREITO PENAL — Resumo Estratégico OAB

## TEORIA DO CRIME

### Conceito Analítico de Crime
**Crime = FATO TÍPICO + ILÍCITO (antijurídico) + CULPÁVEL**

**Fato Típico:**
- Conduta (ação ou omissão)
- Resultado (nos crimes materiais)
- Nexo causal
- Tipicidade (formal + material — princípio da insignificância)

**Ilicitude:** ausência das excludentes:
- Estado de necessidade
- Legítima defesa
- Estrito cumprimento do dever legal
- Exercício regular de direito

**Culpabilidade:** elementos:
- Imputabilidade (maior de 18 anos, mentalmente saudável)
- Potencial consciência da ilicitude
- Exigibilidade de conduta diversa

### Legítima Defesa (art. 25 CP)
Requisitos:
1. Agressão **injusta**
2. Agressão **atual ou iminente**
3. Defesa de **direito próprio ou alheio**
4. Uso dos meios **necessários**
5. Uso **moderado** dos meios

**Excesso:** pune-se apenas o excesso doloso ou culposo

### Dolo e Culpa
**Dolo direto:** quer o resultado
**Dolo eventual:** assume o risco do resultado (não quer, mas aceita)
**Culpa consciente:** prevê mas acredita que não vai acontecer
**Culpa inconsciente:** não prevê, mas deveria prever

## PENAS

### Dosimetria (Método Trifásico — Nelson Hungria)
**1ª fase:** pena-base (8 circunstâncias judiciais do art. 59)
**2ª fase:** circunstâncias atenuantes e agravantes
**3ª fase:** causas de diminuição e aumento

### Concurso de Crimes
| Tipo | Descrição | Sistema |
|------|-----------|---------|
| **Material** | Várias condutas, vários crimes | Cúmulo material (soma as penas) |
| **Formal** | Uma conduta, vários crimes | Exasperação (mais grave + 1/6 a 1/2) |
| **Continuado** | Crimes da mesma espécie, mesmas condições | Exasperação (+ 1/6 a 2/3) |

### Regime de Cumprimento (regra geral)
- **Fechado:** pena > 8 anos
- **Semiaberto:** pena > 4 e ≤ 8 anos
- **Aberto:** pena ≤ 4 anos

## CRIMES MAIS COBRADOS

### Homicídio
- **Simples (art. 121):** reclusão 6-20 anos
- **Privilegiado:** redução 1/6 a 1/3 (relevante valor moral/social, domínio de violenta emoção logo após injusta provocação)
- **Qualificado:** 12-30 anos (motivo torpe/fútil, meio cruel, traição, emboscada, feminicídio)
- **Culposo:** detenção 1-3 anos

**Feminicídio (art. 121, §2º, VI):**
- Qualificadora OBJETIVA (comunica-se a coautores)
- Crime hediondo
- Aumento: gestante, menor de 14, maior de 60, deficiente, presença de filhos

### Roubo vs. Furto
| | Furto | Roubo |
|--|-------|-------|
| **Violência/ameaça** | Não | Sim |
| **Pena** | 1-4 anos | 4-10 anos |
| **Tentativa** | Admite | Admite |
| **Consumação** | Posse tranquila (Súm. 582 STJ) | Com violência/grave ameaça |

### Lei de Drogas (11.343/06)
**Tráfico (art. 33):** reclusão 5-15 anos
**Causa de diminuição:** primário + bons antecedentes + não integra organização = redução 1/6 a 2/3
**Porte para uso (art. 28):** não é crime (sem pena privativa), mas infração penal
**Associação (art. 35):** 3-10 anos
    `,
    flashcards: [
      { f: 'Qual a diferença entre dolo eventual e culpa consciente?', b: 'DOLO EVENTUAL: agente prevê e ASSUME o risco ("não me importo se acontecer"). CULPA CONSCIENTE: prevê mas ACREDITA que não vai acontecer ("tenho certeza que não vai acontecer"). Distinção fundamental para julgamentos como racha.' },
      { f: 'Quais são as excludentes de ilicitude?', b: 'Estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito (art. 23 CP).' },
      { f: 'O feminicídio é qualificadora objetiva ou subjetiva?', b: 'OBJETIVA (razão de condição de sexo feminino). Por isso se comunica aos coautores e partícipes do crime.' },
      { f: 'Quais os requisitos da legítima defesa?', b: 'Agressão injusta, atual ou iminente, a direito próprio ou alheio, usando moderadamente os meios necessários (art. 25 CP).' },
      { f: 'O que é o método trifásico de dosimetria da pena?', b: '1ª fase: pena-base (8 circunstâncias do art. 59); 2ª fase: atenuantes e agravantes; 3ª fase: causas de diminuição e aumento. Criado por Nelson Hungria.' },
    ],
  },

  // ────────────────────────────────────────────────────────
  // DIREITO DO TRABALHO
  // ────────────────────────────────────────────────────────
  trabalho: {
    incidencia: 'ALTA — 6-8 questões por exame.',
    topicos: [
      { titulo: 'Relação de Emprego — Pressupostos', peso: 'Crítico', descricao: 'Pessoa física, pessoalidade, onerosidade, não eventualidade, subordinação.' },
      { titulo: 'Contrato de Trabalho', peso: 'Muito Alto', descricao: 'Prazo determinado e indeterminado, modalidades.' },
      { titulo: 'Jornada de Trabalho', peso: 'Alto', descricao: 'Limites, horas extras, banco de horas, noturno.' },
      { titulo: 'Remuneração e Salário', peso: 'Alto', descricao: 'Composição, proteção, equiparação salarial.' },
      { titulo: 'Rescisão do Contrato de Trabalho', peso: 'Alto', descricao: 'Justa causa, sem justa causa, pedido de demissão, culpa recíproca.' },
      { titulo: 'FGTS e Seguro-Desemprego', peso: 'Médio', descricao: '8% de depósito, saque, multa rescisória.' },
      { titulo: 'Estabilidades', peso: 'Médio', descricao: 'Gestante, CIPA, dirigente sindical, acidentado.' },
      { titulo: 'Reforma Trabalhista (Lei 13.467/17)', peso: 'Alto', descricao: 'Alterações relevantes pós-reforma.' },
    ],
    resumo: `
# DIREITO DO TRABALHO — Resumo Estratégico OAB

## RELAÇÃO DE EMPREGO

### Pressupostos (PONSS)
- **P**essoa física
- **O**nerosidade (salário)
- **N**ão eventualidade (habitualidade)
- **S**ubordinação jurídica
- **S**ubjetividade (pessoalidade)

**Faltando qualquer um:** não há relação de emprego, mas pode haver relação de trabalho

### Empregado vs. Trabalhador Autônomo
| Empregado | Autônomo |
|-----------|----------|
| Subordinação jurídica | Autonomia |
| CTPS assinada | Contrato de prestação de serviços |
| CLT aplicável | CLT não aplicável |
| Exclusividade possível | Sem exclusividade |

## JORNADA DE TRABALHO

**Regra geral:** 8h/dia e 44h/semana (art. 7º, XIII CF)
**Horas extras:** máximo 2h/dia + 50% (ou conforme ACT/CCT)
**Jornada noturna:** 22h às 5h — hora noturna = 52min30seg
**Adicional noturno mínimo:** 20%

**Intervalos:**
- Jornada > 6h: intervalo mínimo de 1h (até 2h)
- Jornada 4-6h: intervalo de 15 min
- Interjornada: mínimo 11h entre jornadas

## RESCISÃO DO CONTRATO

### Tipos de Rescisão e Verbas

| Tipo | Aviso Prévio | 13º | Férias + 1/3 | FGTS + Multa |
|------|-------------|-----|--------------|--------------|
| **Sem justa causa** | ✓ | ✓ | ✓ | ✓ (40%) |
| **Pedido de demissão** | ✓ | ✓ proporcional | ✓ | ✗ |
| **Justa causa** | ✗ | ✗ | Saldo apenas | ✗ |
| **Culpa recíproca** | ✗ | 50% | ✓ | 20% |

### Justa Causa (art. 482 CLT) — Decorar as principais
- Improbidade (desonestidade)
- Incontinência de conduta ou mau procedimento
- Negociação habitual por conta própria
- Condenação criminal
- Desídia
- Embriaguez habitual
- Ato de indisciplina ou insubordinação
- Abandono de emprego (30 dias sem justificativa)
- Ato lesivo à honra do empregador
- Prática constante de jogos

## ESTABILIDADES

| Estabilidade | Prazo |
|-------------|-------|
| **Gestante** | Da confirmação até 5 meses após o parto |
| **Dirigente sindical** | Do registro da candidatura até 1 ano após o mandato |
| **CIPA** | Do registro até 1 ano após o mandato |
| **Acidentado do trabalho** | 12 meses após a cessação do auxílio-acidente |
| **Membros de comissão de representantes** | Da eleição até 1 ano após o mandato |

## EQUIPARAÇÃO SALARIAL (art. 461 CLT)

Requisitos CUMULATIVOS:
1. Mesma função
2. Mesmo empregador
3. Mesma localidade
4. Trabalho de igual valor (diferença de produtividade e perfeição técnica não superior a 20%)
5. Simultaneidade do exercício (não precisa ser ao mesmo tempo, mas um deve ter trabalhado enquanto o outro ainda exercia a função)
6. Diferença de tempo na função não superior a 4 anos

**Paradigma:** o trabalhador que ganha mais, servindo de referência
    `,
    flashcards: [
      { f: 'Quais são os pressupostos da relação de emprego?', b: 'Pessoa física, onerosidade, não eventualidade (habitualidade), subordinação jurídica e pessoalidade (PONSS). Faltando qualquer um, não há vínculo empregatício.' },
      { f: 'Qual a multa do FGTS na demissão sem justa causa?', b: '40% sobre o saldo do FGTS. Na culpa recíproca é 20%. Na pedido de demissão não há multa.' },
      { f: 'A gestante estável pode ser demitida por justa causa?', b: 'SIM. A estabilidade não é absoluta. A gestante pode ser demitida por justa causa (art. 482 CLT). A estabilidade protege apenas da dispensa arbitrária/sem justa causa.' },
      { f: 'Quantas horas extras são permitidas por dia?', b: 'Máximo 2 horas extras por dia (art. 59 CLT), salvo força maior ou necessidade imperiosa. O adicional mínimo é 50% sobre a hora normal.' },
    ],
  },

  // ────────────────────────────────────────────────────────
  // ENGENHARIA REVERSA FGV
  // ────────────────────────────────────────────────────────
  fgv_analise: {
    incidencia_historica: {
      etica: { media: 10, pesos: [10,9,11,10,10,9,11,10,10,10] },
      constitucional: { media: 10, pesos: [11,10,9,11,10,10,9,10,11,10] },
      civil: { media: 11, pesos: [12,11,10,11,12,10,11,11,10,12] },
      processo_civil: { media: 8, pesos: [7,8,9,8,7,9,8,7,9,8] },
      penal: { media: 9, pesos: [9,8,10,9,8,10,9,10,8,9] },
      processo_penal: { media: 7, pesos: [7,7,6,8,7,6,7,8,6,7] },
      trabalho: { media: 7, pesos: [7,8,6,7,8,6,7,6,8,7] },
      empresarial: { media: 7, pesos: [7,6,8,7,6,8,7,8,6,7] },
      tributario: { media: 6, pesos: [6,7,5,6,7,5,6,5,7,6] },
      administrativo: { media: 5, pesos: [5,4,6,5,4,6,5,6,4,5] },
      consumidor: { media: 4, pesos: [4,5,3,4,5,3,4,3,5,4] },
      humanos: { media: 4, pesos: [4,3,5,4,3,5,4,5,3,4] },
      ambiental: { media: 2, pesos: [2,3,1,2,3,1,2,1,3,2] },
      eca: { media: 2, pesos: [2,1,3,2,1,3,2,3,1,2] },
      filosofia: { media: 2, pesos: [2,3,1,2,3,1,2,1,3,2] },
    },
    temas_quentes_2024_2025: [
      'Controle de Constitucionalidade — ADI e ADPF',
      'Feminicídio e violência doméstica',
      'Responsabilidade Civil objetiva',
      'Usucapião extrajudicial',
      'Reforma trabalhista — teletrabalho',
      'Desconsideração da personalidade jurídica',
      'LGPD (Lei Geral de Proteção de Dados)',
      'Compliance e lavagem de dinheiro',
      'Crimes cibernéticos',
      'Estatuto da Pessoa com Deficiência',
    ],
    estrategia_aprovacao: `
## ESTRATÉGIA PARA APROVAÇÃO NA 1ª FASE OAB 48

### Meta: 50 de 80 questões (62,5%) — aprovação segura

### Distribuição Estratégica de Estudos

**FASE 1 (Meses 1-3): BASE**
Focar em: Ética + Constitucional + Civil
Meta: dominar 60% das questões dessas matérias

**FASE 2 (Meses 4-6): CONSTRUÇÃO**
Adicionar: Penal + Processo Civil + Trabalho
Meta: estar em 65% de acertos gerais

**FASE 3 (Meses 7-8): CONSOLIDAÇÃO**
Fechar: Empresarial + Tributário + Administrativo
Meta: 70% de acertos gerais

**FASE 4 (Meses 9-10): RETA FINAL**
Revisão geral + Simulados + Caderno de erros
Meta: 75%+ de acertos

### Prioridade de Estudo por Peso
1. Civil (13,75% das questões)
2. Constitucional (12,5%)
3. Ética (12,5%)
4. Processo Civil (10%)
5. Penal (11,25%)
6. Processo Penal (8,75%)
7. Trabalho + Proc. Trabalho (8,75%)
8. Empresarial (8,75%)
9. Tributário (7,5%)
10. Demais (6,25%)
    `,
  },

};

// ─── PROMPTS DO TUTOR IA ─────────────────────────────────────────
const AI_PROMPTS = {
  system: `Você é o Professor OAB48, tutor jurídico de elite especializado no Exame da OAB 48.

Sua personalidade:
- Mentor de aprovação, não apenas professor
- Didático, preciso e estratégico
- Motiva o aluno mantendo o realismo
- Conhece profundamente a banca FGV

Ao responder:
1. Cite artigos de lei sempre que relevante
2. Destaque o que a FGV mais cobra com "⚡ FGV cobra muito:"
3. Use exemplos práticos e casos concretos
4. Formate bem: use **negrito** para conceitos-chave
5. Ao final de explicações longas, dê uma dica estratégica
6. Use tabelas quando comparar institutos
7. Seja objetivo — o aluno tem tempo limitado

Para questões discursivas da 2ª fase:
- Ensine a estrutura da peça processual
- Explique o raciocínio jurídico
- Aponte os pontos que a FGV valoriza no espelho`,

  mini_aula: (materia, topico) => `Dê uma mini-aula sobre "${topico}" de ${materia} focando no que a FGV cobra no OAB. Inclua: conceito, elementos essenciais, jurisprudência relevante, dica estratégica e uma questão de fixação.`,

  resumo: (materia) => `Crie um resumo estratégico de ${materia} para aprovação no OAB 48. Organize por: 1) O que mais cai na FGV, 2) Conceitos essenciais, 3) Pegadinhas frequentes, 4) Legislação mais cobrada.`,

  mapa_mental: (materia) => `Crie um mapa mental textual de ${materia} para o OAB, usando emojis e formatação clara. Mostre as conexões entre os principais institutos.`,

  corrigir_peca: `Analise esta peça processual como se fosse o espelho da FGV. Aponte: pontos positivos, pontos negativos, erros técnicos, estrutura, argumentação e nota estimada.`,
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.ACERVO = ACERVO;
  window.AI_PROMPTS = AI_PROMPTS;
}

if (typeof module !== 'undefined') {
  module.exports = { ACERVO, AI_PROMPTS };
}
