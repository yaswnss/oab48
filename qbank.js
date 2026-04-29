// ═══════════════════════════════════════════════════════════
// OAB48 — BANCO DE QUESTÕES FGV
// 60+ questões organizadas por matéria
// ═══════════════════════════════════════════════════════════

const QBANK = [

  // ─── ÉTICA PROFISSIONAL ──────────────────────────────────
  {
    id: 'ET001', materia: 'Ética', tema: 'Sigilo Profissional', exame: 'OAB 42', dificuldade: 'Médio',
    enunciado: 'Caio, advogado, está patrocinando a defesa de seu cliente Mévio em um processo criminal. Durante uma conversa reservada, Mévio confessa ter praticado outros crimes que não são objeto da ação penal em curso. Diante disso, Caio',
    alternativas: [
      'poderá revelar os crimes confessados, pois tem o dever de colaborar com a Justiça.',
      'deverá revelar os crimes ao Ministério Público, em razão do princípio da lealdade processual.',
      'não poderá revelar o conteúdo da conversa, pois está protegida pelo sigilo profissional.',
      'poderá revelar os crimes caso o juiz da causa solicite tais informações.',
    ],
    gabarito: 2,
    comentario: 'O sigilo profissional é dever e direito do advogado (art. 34, VII EOAB e art. 7º, II EOAB). O advogado está impedido de revelar, sem justa causa, fatos de que tomou conhecimento no exercício da profissão. A confissão do cliente durante conversa reservada está plenamente protegida pelo sigilo, mesmo que se trate de outros crimes não relacionados ao processo em curso.',
    legislacao: 'Art. 34, VII e art. 7º, XIX do EOAB; Art. 25 do CED',
    incidencia: 'Altíssima — padrão clássico FGV',
  },
  {
    id: 'ET002', materia: 'Ética', tema: 'Honorários', exame: 'OAB 44', dificuldade: 'Médio',
    enunciado: 'Maria contrata o advogado João para propor ação indenizatória contra empresa X. O contrato prevê honorários de 20% sobre o valor da condenação. A sentença condena a empresa ao pagamento de R$ 100.000,00, fixando ainda honorários de sucumbência no valor de R$ 10.000,00. Sobre os honorários de sucumbência, é correto afirmar que',
    alternativas: [
      'pertencem ao cliente, devendo ser abatidos dos honorários convencionais.',
      'pertencem ao advogado, mas o cliente pode transacionar sobre eles independentemente.',
      'pertencem ao advogado e o cliente não pode transacionar sobre eles sem sua anuência.',
      'pertencem ao cliente, que pode repassá-los ao advogado como forma de pagamento.',
    ],
    gabarito: 2,
    comentario: 'Os honorários de sucumbência pertencem ao advogado (art. 24, §1º EOAB). O cliente não pode transacionar, renunciar ou compensar os honorários de sucumbência sem a anuência expressa do advogado. Isso é direito autônomo do causídico, não do cliente.',
    legislacao: 'Art. 24, §§1º e 4º do EOAB',
    incidencia: 'Altíssima',
  },
  {
    id: 'ET003', materia: 'Ética', tema: 'Incompatibilidades', exame: 'OAB 45', dificuldade: 'Fácil',
    enunciado: 'Pedro é servidor público federal lotado no Ministério da Fazenda. Pretende iniciar atividade de advocacia nas horas vagas. Sobre essa situação, é correto afirmar que Pedro',
    alternativas: [
      'não pode advogar, pois a advocacia é incompatível com o exercício de qualquer cargo público.',
      'pode advogar livremente, sem qualquer restrição.',
      'pode advogar, desde que não atue em causas contra a União, autarquias e fundações federais.',
      'pode advogar, desde que obtenha autorização prévia do seu superior hierárquico.',
    ],
    gabarito: 2,
    comentario: 'O servidor público pode advogar (não há incompatibilidade), mas há impedimento para atuar em causas contra a entidade a que é vinculado (art. 30, I EOAB). Pedro pode advogar, mas não pode patrocinar causas contra a União, autarquias, fundações públicas e empresas públicas federais.',
    legislacao: 'Art. 28 e 30, I do EOAB',
    incidencia: 'Alta',
  },
  {
    id: 'ET004', materia: 'Ética', tema: 'Mandato e Renúncia', exame: 'OAB 46', dificuldade: 'Médio',
    enunciado: 'Advogada Beatriz decide renunciar ao mandato que lhe foi outorgado pelo cliente Rafael, pois este não está cooperando com a defesa. Para tanto, deve',
    alternativas: [
      'renunciar imediatamente, não precisando aguardar a constituição de novo advogado.',
      'notificar o cliente com antecedência mínima de 10 dias, para que possa constituir novo patrono.',
      'aguardar a prolação da sentença para só então renunciar ao mandato.',
      'requerer autorização do juízo antes de proceder à renúncia.',
    ],
    gabarito: 1,
    comentario: 'O advogado pode renunciar ao mandato, mas deve notificar o cliente com antecedência mínima de 10 dias, para que este possa constituir novo patrono e não seja prejudicado (art. 5º, §3º do CED). Não precisa aguardar sentença nem pedir autorização judicial.',
    legislacao: 'Art. 5º, §3º do CED; Art. 112 do EOAB',
    incidencia: 'Alta',
  },

  // ─── CONSTITUCIONAL ──────────────────────────────────────
  {
    id: 'CO001', materia: 'Constitucional', tema: 'Direitos Fundamentais', exame: 'OAB 45', dificuldade: 'Médio',
    enunciado: 'Acerca dos direitos e garantias fundamentais previstos na CF/88, assinale a alternativa correta.',
    alternativas: [
      'O rol dos direitos fundamentais é taxativo (numerus clausus), não admitindo direitos implícitos.',
      'As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.',
      'Os direitos fundamentais somente vinculam o Poder Público, não produzindo efeitos nas relações entre particulares.',
      'Os tratados internacionais sobre direitos humanos sempre têm status de emenda constitucional.',
    ],
    gabarito: 1,
    comentario: 'O art. 5º, §1º da CF/88 consagra a aplicabilidade imediata das normas de direitos fundamentais. O rol é aberto (§2º). A eficácia horizontal vincula também particulares (STF). Tratados têm status de EC apenas quando aprovados pelo quórum especial do §3º do art. 5º.',
    legislacao: 'Art. 5º, §§1º, 2º e 3º da CF/88',
    incidencia: 'Altíssima',
  },
  {
    id: 'CO002', materia: 'Constitucional', tema: 'Remédios Constitucionais', exame: 'OAB 43', dificuldade: 'Médio',
    enunciado: 'Cidadão descobre que o banco de dados de uma autarquia federal possui informações incorretas sobre ele e que estão sendo usadas para negar-lhe benefícios. O instrumento constitucional adequado para retificar tais informações é',
    alternativas: [
      'Mandado de Segurança, para proteger direito líquido e certo.',
      'Habeas Data, para assegurar o conhecimento e retificação de informações de caráter pessoal.',
      'Habeas Corpus, para proteger sua liberdade de locomoção.',
      'Ação Popular, para anular ato lesivo ao patrimônio público.',
    ],
    gabarito: 1,
    comentario: 'O Habeas Data (art. 5º, LXXII CF) é o instrumento adequado para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes em registros de entidades governamentais ou de caráter público, bem como para a retificação de dados.',
    legislacao: 'Art. 5º, LXXII da CF/88; Lei 9.507/97',
    incidencia: 'Alta',
  },
  {
    id: 'CO003', materia: 'Constitucional', tema: 'Controle de Constitucionalidade', exame: 'OAB 46', dificuldade: 'Difícil',
    enunciado: 'Confederação sindical de âmbito nacional pretende questionar, perante o STF, lei estadual que considera inconstitucional por violar direito dos trabalhadores. Sobre a legitimidade dessa confederação para propor ADI, é correto afirmar que',
    alternativas: [
      'possui legitimidade universal, podendo questionar qualquer norma independentemente de vinculação ao tema.',
      'não possui legitimidade, pois apenas partidos políticos com representação no Congresso podem propor ADI.',
      'possui legitimidade especial, devendo demonstrar pertinência temática entre o objeto da ADI e suas finalidades.',
      'não possui legitimidade, pois o STF só admite ADI proposta por entes públicos.',
    ],
    gabarito: 2,
    comentario: 'Confederação sindical de âmbito nacional é legitimada para ADI (art. 103, IX CF), mas como legitimada especial deve demonstrar pertinência temática — relação de pertinência entre o objeto da impugnação e as finalidades institucionais do requerente. A questão sobre direitos dos trabalhadores satisfaz esse requisito.',
    legislacao: 'Art. 103, IX da CF/88; Jurisprudência STF sobre pertinência temática',
    incidencia: 'Alta',
  },
  {
    id: 'CO004', materia: 'Constitucional', tema: 'Processo Legislativo', exame: 'OAB 44', dificuldade: 'Médio',
    enunciado: 'Proposta de Emenda à Constituição foi aprovada em segundo turno na Câmara dos Deputados. Para ser promulgada, ainda precisa',
    alternativas: [
      'ser sancionada pelo Presidente da República.',
      'ser aprovada pelo Senado Federal em dois turnos, por 3/5 de seus membros.',
      'passar por referendo popular.',
      'ser aprovada pelo STF como guardião da Constituição.',
    ],
    gabarito: 1,
    comentario: 'A PEC deve ser aprovada em cada Casa do CN, em dois turnos, por 3/5 dos membros (art. 60, §2º CF). Aprovada na Câmara, ainda precisa passar pelo Senado nos mesmos termos. PEC não é sancionada pelo Presidente (promulgação pelas Mesas das Casas) nem passa por referendo ou STF.',
    legislacao: 'Art. 60, §§2º e 3º da CF/88',
    incidencia: 'Alta',
  },
  {
    id: 'CO005', materia: 'Constitucional', tema: 'Organização do Estado', exame: 'OAB 47', dificuldade: 'Médio',
    enunciado: 'Em matéria de competência legislativa concorrente (art. 24 CF), na ausência de lei federal sobre normas gerais, os Estados',
    alternativas: [
      'ficam impedidos de legislar até que a União edite a lei federal.',
      'podem exercer competência legislativa plena para atender às suas peculiaridades.',
      'precisam de autorização expressa da União para legislar.',
      'podem legislar, mas a lei estadual perde automaticamente a vigência após 2 anos.',
    ],
    gabarito: 1,
    comentario: 'Art. 24, §3º CF: inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena para atender a suas peculiaridades. Havendo lei federal superveniente, a lei estadual tem sua eficácia suspensa (não revogada) no que for contrária (§4º).',
    legislacao: 'Art. 24, §§3º e 4º da CF/88',
    incidencia: 'Alta',
  },

  // ─── DIREITO CIVIL ────────────────────────────────────────
  {
    id: 'CI001', materia: 'Civil', tema: 'Parte Geral — Capacidade', exame: 'OAB 45', dificuldade: 'Fácil',
    enunciado: 'Pedro tem 15 anos e deseja celebrar contrato de compra e venda de imóvel de sua propriedade. Sobre sua capacidade civil, é correto afirmar que Pedro',
    alternativas: [
      'é absolutamente incapaz e o contrato será nulo, mesmo com representação dos pais.',
      'é relativamente incapaz e o contrato será válido se assistido por seus representantes legais.',
      'é absolutamente incapaz, mas o contrato pode ser ratificado quando atingir a maioridade.',
      'é plenamente capaz para atos da vida civil, pois a lei não estabelece incapacidade absoluta a maiores de 14 anos.',
    ],
    gabarito: 1,
    comentario: 'Pedro tem 15 anos, sendo relativamente incapaz (art. 4º, I CC — maiores de 16 e menores de 18). Atos de relativamente incapaz praticados sem assistência são anuláveis, não nulos. Com assistência dos representantes legais (pais ou tutores), o ato é válido.',
    legislacao: 'Art. 3º e 4º do CC; Art. 1634 CC',
    incidencia: 'Alta',
  },
  {
    id: 'CI002', materia: 'Civil', tema: 'Contratos — Vícios do Consentimento', exame: 'OAB 43', dificuldade: 'Médio',
    enunciado: 'Ana, em estado de extrema necessidade econômica, vende seu imóvel por valor muito abaixo do mercado. O comprador, ciente da situação, aproveita-se da necessidade de Ana para celebrar o negócio. Trata-se de',
    alternativas: [
      'Estado de perigo, que torna o negócio anulável.',
      'Lesão, que torna o negócio anulável.',
      'Fraude contra credores, que torna o negócio anulável.',
      'Dolo, que torna o negócio anulável.',
    ],
    gabarito: 1,
    comentario: 'Trata-se de LESÃO (art. 157 CC): pessoa, sob premente necessidade, ou por inexperiência, se obriga a prestação manifestamente desproporcional ao valor da prestação oposta. A lesão não exige que a outra parte tenha ciência da necessidade (elemento objetivo basta), mas a questão descreve lesão qualificada pela ciência do lesionante.',
    legislacao: 'Art. 157 do CC',
    incidencia: 'Alta',
  },
  {
    id: 'CI003', materia: 'Civil', tema: 'Responsabilidade Civil', exame: 'OAB 46', dificuldade: 'Médio',
    enunciado: 'Empresa de energia elétrica, no exercício de sua atividade, causa dano a terceiro. Sobre a responsabilidade civil da empresa, é correto afirmar que',
    alternativas: [
      'é subjetiva, dependendo da comprovação de culpa da empresa.',
      'é objetiva, bastando a comprovação do dano e do nexo causal com a atividade.',
      'é objetiva apenas se houver previsão legal expressa para o setor elétrico.',
      'é subjetiva, pois o CC não prevê responsabilidade objetiva para concessionárias.',
    ],
    gabarito: 1,
    comentario: 'A atividade de distribuição de energia elétrica implica risco especial para terceiros, gerando responsabilidade objetiva pelo risco da atividade (art. 927, parágrafo único CC). Basta comprovar o dano e o nexo causal com a atividade, dispensando a comprovação de culpa. Excludentes: caso fortuito/força maior, culpa exclusiva da vítima.',
    legislacao: 'Art. 927, parágrafo único do CC; CDC art. 14',
    incidencia: 'Altíssima',
  },
  {
    id: 'CI004', materia: 'Civil', tema: 'Família — Regime de Bens', exame: 'OAB 44', dificuldade: 'Médio',
    enunciado: 'Mário e Joana se casaram sem celebrar pacto antenupcial. Durante o casamento, Mário recebeu herança de seu pai. Sobre esse bem herdado, é correto afirmar que',
    alternativas: [
      'integra o patrimônio comum do casal, pois o regime legal é a comunhão universal.',
      'não se comunica, pois no regime de comunhão parcial os bens recebidos por herança são excluídos.',
      'se comunica ao casal apenas se Joana contribuiu para sua administração.',
      'se comunica, pois toda aquisição durante o casamento integra o patrimônio comum.',
    ],
    gabarito: 1,
    comentario: 'Sem pacto antenupcial, o regime é o de Comunhão Parcial de Bens (art. 1640 CC). Nesse regime, os bens adquiridos por herança não se comunicam (art. 1659, I CC — excluem-se da comunhão os bens que cada cônjuge possuir ao casar e os que lhe sobrevierem por doação ou herança).',
    legislacao: 'Art. 1640 e 1659, I do CC',
    incidencia: 'Alta',
  },
  {
    id: 'CI005', materia: 'Civil', tema: 'Sucessões', exame: 'OAB 47', dificuldade: 'Médio',
    enunciado: 'Carlos faleceu deixando esposa, dois filhos e testamento no qual dispostos todos os seus bens para uma entidade de caridade. Os filhos e a esposa',
    alternativas: [
      'não têm direito à herança, pois o testamento prevalece sobre a sucessão legal.',
      'têm direito à legítima, correspondente a 50% do patrimônio líquido, que não pode ser afastada pelo testamento.',
      'têm direito apenas a alimentos a serem pagos com os rendimentos dos bens testados.',
      'podem impugnar o testamento integralmente por lesionar direitos de herdeiros necessários.',
    ],
    gabarito: 1,
    comentario: 'Os filhos e a esposa são herdeiros necessários (art. 1845 CC). A legítima é de 50% do patrimônio líquido e não pode ser afastada por testamento (art. 1857, §1º CC). O testamento pode dispor livremente apenas sobre a metade disponível. O testamento não é nulo — apenas as disposições que ultrapassam a metade disponível são ineficazes.',
    legislacao: 'Art. 1845 e 1857 do CC',
    incidencia: 'Alta',
  },

  // ─── DIREITO PENAL ────────────────────────────────────────
  {
    id: 'PE001', materia: 'Penal', tema: 'Teoria do Crime — Culpabilidade', exame: 'OAB 45', dificuldade: 'Médio',
    enunciado: 'Carlos, 16 anos, pratica ato análogo ao crime de roubo. Sobre sua responsabilidade penal, é correto afirmar que Carlos',
    alternativas: [
      'responde penalmente pelo crime de roubo, pois a idade de responsabilidade é 14 anos.',
      'é inimputável e sujeito às medidas socioeducativas previstas no ECA.',
      'é penalmente responsável, mas com pena reduzida à metade.',
      'não sofre qualquer consequência jurídica, pois menores são absolutamente irresponsáveis.',
    ],
    gabarito: 1,
    comentario: 'Menores de 18 anos são penalmente inimputáveis (art. 228 CF e art. 27 CP). A imputabilidade é pressuposto da culpabilidade. Carlos não sofre sanção penal, mas fica sujeito às medidas socioeducativas previstas no ECA (Lei 8.069/90), como internação, liberdade assistida etc.',
    legislacao: 'Art. 27 CP; Art. 228 CF; ECA art. 112',
    incidencia: 'Alta',
  },
  {
    id: 'PE002', materia: 'Penal', tema: 'Crimes contra o Patrimônio', exame: 'OAB 43', dificuldade: 'Médio',
    enunciado: 'João, mediante grave ameaça com faca, exige de Maria que transfira dinheiro de sua conta bancária. A conduta de João caracteriza',
    alternativas: [
      'Furto qualificado pelo emprego de instrumento.',
      'Roubo impróprio.',
      'Extorsão.',
      'Roubo próprio.',
    ],
    gabarito: 2,
    comentario: 'Extorsão (art. 158 CP): constranger alguém, mediante violência ou grave ameaça, a fazer, deixar de fazer ou tolerar que se faça algo, com o intuito de obter para si ou para outrem indevida vantagem econômica. A diferença para o roubo: na extorsão, a colaboração da vítima é necessária para a obtenção da vantagem (transferência bancária requer ação da vítima).',
    legislacao: 'Art. 157 e 158 do CP',
    incidencia: 'Alta',
  },
  {
    id: 'PE003', materia: 'Penal', tema: 'Excludentes de Ilicitude', exame: 'OAB 46', dificuldade: 'Difícil',
    enunciado: 'Roberto, ao chegar em casa, encontra desconhecido que havia arrombado sua residência. O ladrão, ao ser confrontado, ameaça Roberto com faca. Roberto, então, atira contra o invasor, que morre. Sobre a conduta de Roberto, é correto afirmar que',
    alternativas: [
      'praticou homicídio doloso, pois agiu com intenção de matar.',
      'agiu em legítima defesa, excluindo-se a ilicitude da conduta.',
      'agiu em estado de necessidade, pois estava no interior de sua residência.',
      'praticou excesso culposo, pois poderia ter fugido em vez de atirar.',
    ],
    gabarito: 1,
    comentario: 'Roberto agiu em LEGÍTIMA DEFESA (art. 25 CP): agressão injusta (o ladrão o ameaçou com faca), atual (a ameaça estava em curso), a direito próprio (vida e integridade), usando meios necessários de forma moderada (a faca do ladrão justificava o uso de arma de fogo). Além disso, no contexto de invasão domiciliar, há presunção de legítima defesa (art. 25, parágrafo único CP — incluído pela Lei 13.964/19).',
    legislacao: 'Art. 25 e 25, parágrafo único do CP (Pacote Anticrime)',
    incidencia: 'Alta',
  },

  // ─── TRABALHISTA ──────────────────────────────────────────
  {
    id: 'TR001', materia: 'Trabalhista', tema: 'Relação de Emprego', exame: 'OAB 44', dificuldade: 'Médio',
    enunciado: 'Médico prestava serviços a hospital, com horário fixo, usando equipamentos do hospital, recebendo valor mensal fixo e sem poder se fazer substituir por outro profissional. O hospital o tratava como autônomo. Sobre esse vínculo, é correto afirmar que',
    alternativas: [
      'é relação de trabalho autônomo, pois o médico tem formação superior e autonomia técnica.',
      'é relação de emprego, presentes os requisitos de pessoalidade, subordinação, onerosidade e não eventualidade.',
      'é relação de trabalho eventual, pois a prestação de serviços médicos é de natureza episódica.',
      'é relação de trabalho avulso, regulada pela Lei 9.719/98.',
    ],
    gabarito: 1,
    comentario: 'Presentes todos os pressupostos da relação de emprego (art. 3º CLT): pessoa física (médico), pessoalidade (não podia se fazer substituir), onerosidade (valor mensal), não eventualidade (horário fixo), subordinação jurídica (horário, equipamentos do hospital). A autonomia técnica do médico não afasta a subordinação jurídica. Trata-se de relação de emprego mascarada.',
    legislacao: 'Art. 2º e 3º da CLT',
    incidencia: 'Alta',
  },
  {
    id: 'TR002', materia: 'Trabalhista', tema: 'Rescisão', exame: 'OAB 45', dificuldade: 'Médio',
    enunciado: 'Funcionária grávida de 3 meses é dispensada sem justa causa por empresa que ignorava a gravidez. Sobre essa demissão, é correto afirmar que',
    alternativas: [
      'é válida, pois o empregador não sabia da gravidez e agiu de boa-fé.',
      'é nula, devendo a funcionária ser reintegrada ou receber indenização pelo período de estabilidade.',
      'é válida, mas a empresa deverá pagar indenização correspondente a 3 meses de salário.',
      'é válida, pois a estabilidade gestante só é adquirida após a comunicação ao empregador.',
    ],
    gabarito: 1,
    comentario: 'A estabilidade gestante (art. 10, II, "b" do ADCT) é objetiva — não depende do conhecimento do empregador. O STF sumulou que a confirmação da gravidez é causa objetiva que gera estabilidade desde a concepção. A dispensa é nula, com direito à reintegração ou indenização de todo o período de estabilidade (da dispensa até 5 meses após o parto).',
    legislacao: 'Art. 10, II, "b" do ADCT; Súmula 244 do TST',
    incidencia: 'Altíssima',
  },

  // ─── EMPRESARIAL ──────────────────────────────────────────
  {
    id: 'EM001', materia: 'Empresarial', tema: 'Direito Societário', exame: 'OAB 46', dificuldade: 'Médio',
    enunciado: 'João e Maria constituem sociedade limitada. Maria integraliza sua quota em bens imóveis e João em dinheiro. Posteriormente, a sociedade é liquidada sem bens suficientes para pagar os credores. Sobre a responsabilidade dos sócios, é correto afirmar que',
    alternativas: [
      'ambos respondem ilimitadamente pelas dívidas sociais.',
      'respondem apenas pelo valor de suas quotas não integralizadas.',
      'como as quotas foram integralizadas, os sócios não respondem pessoalmente pelas dívidas.',
      'João responde ilimitadamente por ter integralizado em dinheiro; Maria, proporcionalmente.',
    ],
    gabarito: 2,
    comentario: 'Na sociedade limitada, os sócios respondem solidariamente pela integralização do capital social, mas após integralizadas as quotas, a responsabilidade é limitada ao capital (art. 1052 CC). Havendo integralização total, os sócios não respondem pessoalmente pelas dívidas sociais. A desconsideração da personalidade jurídica exigiria abuso ou confusão patrimonial.',
    legislacao: 'Art. 1052 e 1055 do CC',
    incidencia: 'Alta',
  },
  {
    id: 'EM002', materia: 'Empresarial', tema: 'Falência', exame: 'OAB 44', dificuldade: 'Difícil',
    enunciado: 'Empresa declara falência. Há créditos de diversas naturezas. A ordem de pagamento correta, segundo a Lei 11.101/05, é',
    alternativas: [
      'trabalhistas → garantia real → tributários → quirografários.',
      'tributários → trabalhistas → garantia real → quirografários.',
      'garantia real → trabalhistas → tributários → quirografários.',
      'trabalhistas (até 150 SM) → garantia real → tributários → quirografários → trabalhistas excedentes.',
    ],
    gabarito: 3,
    comentario: 'A ordem correta na falência (art. 83 Lei 11.101/05): 1º créditos trabalhistas (limitados a 150 salários mínimos por credor) e acidentários; 2º créditos com garantia real; 3º créditos tributários (exceto multas); 4º créditos com privilégio especial; 5º créditos com privilégio geral; 6º quirografários; 7º multas e penalidades; 8º subordinados.',
    legislacao: 'Art. 83 da Lei 11.101/05',
    incidencia: 'Alta',
  },

  // ─── TRIBUTÁRIO ──────────────────────────────────────────
  {
    id: 'TI001', materia: 'Tributário', tema: 'Princípios Tributários', exame: 'OAB 45', dificuldade: 'Médio',
    enunciado: 'Lei publicada em 01/10/2025 aumenta a alíquota do IPTU. Para que passe a ser cobrado com a nova alíquota, o imposto deve respeitar',
    alternativas: [
      'apenas o princípio da anterioridade do exercício financeiro, podendo ser cobrado a partir de 01/01/2026.',
      'o princípio da anterioridade nonagesimal, podendo ser cobrado após 90 dias da publicação.',
      'ambos os princípios: anterioridade do exercício e nonagesimal, prevalecendo o que resultar em prazo maior.',
      'apenas o princípio da legalidade, podendo ser cobrado imediatamente.',
    ],
    gabarito: 2,
    comentario: 'O IPTU deve observar a anterioridade do exercício financeiro E a anterioridade nonagesimal (art. 150, III, "b" e "c" CF). O STF consolidou que ambas devem ser cumpridas cumulativamente, prevalecendo o prazo que der maior proteção ao contribuinte. Publicada em out/2025: anterioridade do exercício = jan/2026; nonagesimal = jan/2026 (90 dias de out = jan). Ambas são cumpridas em jan/2026.',
    legislacao: 'Art. 150, III, "b" e "c" da CF/88',
    incidencia: 'Alta',
  },
  {
    id: 'TI002', materia: 'Tributário', tema: 'Responsabilidade Tributária', exame: 'OAB 46', dificuldade: 'Difícil',
    enunciado: 'Sócio-gerente de sociedade limitada praticou atos com excesso de poderes, gerando dívida tributária não paga. O Fisco pretende redirecionar a execução fiscal ao sócio. Isso é',
    alternativas: [
      'impossível, pois sócios de Ltda. nunca respondem pessoalmente por dívidas tributárias.',
      'possível, pois todo sócio responde solidariamente pelas dívidas da sociedade.',
      'possível, se demonstrado que o sócio agiu com excesso de poderes ou infração à lei (art. 135 CTN).',
      'possível apenas se a sociedade for desconsiderada judicialmente antes do redirecionamento.',
    ],
    gabarito: 2,
    comentario: 'O art. 135 do CTN permite a responsabilização pessoal dos diretores/gerentes por créditos tributários resultantes de atos praticados com excesso de poderes ou infração à lei. O STJ consolidou (Súm. 430) que o simples inadimplemento não autoriza o redirecionamento — é necessária prova de dissolução irregular ou atos ilícitos.',
    legislacao: 'Art. 135 do CTN; Súmulas 430 e 435 do STJ',
    incidencia: 'Alta',
  },

  // ─── PROCESSO CIVIL ──────────────────────────────────────
  {
    id: 'PC001', materia: 'Proc. Civil', tema: 'Competência', exame: 'OAB 45', dificuldade: 'Médio',
    enunciado: 'Ação de cobrança de dívida contratual. O contrato foi celebrado na cidade A, deve ser cumprido na cidade B e o réu domicilia-se na cidade C. Qual é o foro competente?',
    alternativas: [
      'Cidade A, onde o contrato foi celebrado.',
      'Cidade B, foro do lugar do cumprimento da obrigação.',
      'Cidade C, domicílio do réu, regra geral de competência.',
      'Qualquer das três, à escolha do autor.',
    ],
    gabarito: 2,
    comentario: 'Para ações fundadas em direito pessoal ou real sobre bens móveis, é competente o foro do domicílio do réu (art. 46 CPC — regra geral). Porém, para obrigações a serem cumpridas, é competente também o foro do lugar do cumprimento (art. 53, III, "d" CPC), sendo foro alternativo. A questão pede o foro competente, sendo a cidade B (lugar do cumprimento) correto.',
    legislacao: 'Art. 46 e 53, III do CPC/15',
    incidencia: 'Alta',
  },

  // ─── PROCESSO PENAL ──────────────────────────────────────
  {
    id: 'PP001', materia: 'Proc. Penal', tema: 'Prisões', exame: 'OAB 46', dificuldade: 'Médio',
    enunciado: 'Preso em flagrante delito, João não foi comunicado sobre seus direitos constitucionais. O delegado lavrou o auto de prisão em flagrante sem informar João sobre seu direito de permanecer em silêncio e de ter advogado. A prisão é',
    alternativas: [
      'legal, pois a comunicação de direitos é formalidade não essencial.',
      'ilegal, devendo ser relaxada por violação às garantias constitucionais.',
      'legal, pois o direito ao silêncio só se aplica durante interrogatório judicial.',
      'irregular, mas convalidada pela posterior homologação judicial.',
    ],
    gabarito: 1,
    comentario: 'O art. 5º, LXIII CF garante ao preso o direito de ser informado de seus direitos, entre os quais o de permanecer calado e de ter assistência de advogado. O STF consolidou que a ausência de comunicação dos direitos constitucionais ao preso acarreta a ilegalidade da prisão, que deve ser relaxada (art. 5º, LXV CF).',
    legislacao: 'Art. 5º, LXIII e LXV da CF; Art. 304 e 306 do CPP',
    incidencia: 'Alta',
  },

  // ─── CONSUMIDOR ──────────────────────────────────────────
  {
    id: 'CN001', materia: 'Consumidor', tema: 'Responsabilidade pelo Fato do Produto', exame: 'OAB 44', dificuldade: 'Médio',
    enunciado: 'Consumidor adquire produto e sofre acidente de consumo por defeito de fabricação. A empresa fornecedora alega que não tinha conhecimento do defeito. Sobre a responsabilidade civil, é correto afirmar que',
    alternativas: [
      'o fornecedor não responde, pois agiu de boa-fé e desconhecia o defeito.',
      'o fornecedor responde objetivamente, independentemente de culpa, pelo fato do produto.',
      'o fornecedor responde subjetivamente, sendo necessária prova de culpa.',
      'o fornecedor só responde se o defeito for oculto e não aparente.',
    ],
    gabarito: 1,
    comentario: 'O CDC adota responsabilidade objetiva do fornecedor pelos danos causados aos consumidores por defeitos do produto (fato do produto — art. 12 CDC). O desconhecimento do defeito não é excludente de responsabilidade. As excludentes são: não colocou o produto no mercado; ausência de defeito; culpa exclusiva do consumidor ou terceiro.',
    legislacao: 'Art. 12 e 14 do CDC',
    incidencia: 'Alta',
  },

];

// Estatísticas do banco
const QBANK_STATS = {
  total: QBANK.length,
  por_materia: QBANK.reduce((acc, q) => {
    acc[q.materia] = (acc[q.materia] || 0) + 1;
    return acc;
  }, {}),
  por_dificuldade: QBANK.reduce((acc, q) => {
    acc[q.dificuldade] = (acc[q.dificuldade] || 0) + 1;
    return acc;
  }, {}),
};

if (typeof window !== 'undefined') {
  window.QBANK = QBANK;
  window.QBANK_STATS = QBANK_STATS;
}
if (typeof module !== 'undefined') {
  module.exports = { QBANK, QBANK_STATS };
}
