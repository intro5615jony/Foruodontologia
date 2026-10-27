import {
  HeroSlide,
  SpecialtyBarItem,
  Specialist,
  TreatmentItem,
  TestimonialPlaceholderItem,
  WhyForUItem,
  ExperienceStep,
  ClinicSpacePhoto,
} from './types';

export const CLINIC_INFO = {
  name: 'For U Odontologia Especializada',
  shortName: 'For U',
  tagline: 'Odontologia feita com precisão. Cuidado feito para você.',
  address: {
    street: 'Rua Barão do Triunfo',
    number: '88',
    complement: 'Sala/Conjunto 406',
    neighborhood: 'Brooklin',
    city: 'São Paulo',
    state: 'SP',
    cep: '04602-000',
    fullFormatted: 'Rua Barão do Triunfo, 88 — Sala/Conjunto 406, Brooklin — São Paulo/SP',
    mapsUrl: 'https://maps.google.com/?q=Rua+Bar%C3%A3o+do+Triunfo,+88,+sala+406+-+Brooklin,+S%C3%A3o+Paulo+-+SP,+04602-000',
    wazeUrl: 'https://waze.com/ul?q=Rua%20Bar%C3%A3o%20do%20Triunfo,%2088,%20Brooklin,%20S%C3%A3o%20Paulo%20-%20SP&navigate=yes',
  },
  // Telefones Fixos confirmados
  landlinePhone: '(11) 5034-5782',
  landlineTel: 'tel:1150345782',
  landlinePhoneSecondary: '(11) 3384-5787',
  landlineTelSecondary: 'tel:1133845787',

  // WhatsApp para agendamentos
  whatsapp: '(11) 99349-8545',
  whatsappRaw: '5511993498545',
  whatsappDefaultMessage: 'Olá! Gostaria de agendar uma consulta na For U Odontologia Especializada. Poderiam me informar os horários disponíveis?',

  // E-mail informado
  email: 'consultorioodontorefi@gmail.com',

  // Horários informados (segunda a quinta: 8h às 18h | sexta: 8h às 17h)
  hours: {
    weekdays: 'Segunda a quinta-feira: 8h às 18h',
    friday: 'Sexta-feira: 8h às 17h',
  },

  // Formas de pagamento
  paymentMethods: 'Cartão e Pix',

  // Convênios
  insurance: 'Não atende convênios (Atendimento particular).',

  // Instagram oficial
  instagram: 'https://instagram.com/foruodontologia',
  instagramHandle: '@foruodontologia',

  // Dados regulatórios
  technicalDirector: 'Dra. Fabiana Monte Callado',
  croTechnicalDirector: 'CROSP 77.944',
  croClinic: 'CROSP',
  epao: '',
  cnes: '',
  cnpj: '',
  googleReviewsUrl: 'https://maps.google.com/?q=Rua+Bar%C3%A3o+do+Triunfo,+88,+sala+406+-+Brooklin,+S%C3%A3o+Paulo+-+SP,+04602-000',
};

// 01.1 & 01.2 — Centralização das Mensagens e URLs de WhatsApp da For U Odontologia Especializada
export const WHATSAPP_MESSAGES = {
  // 1.1 Agendamento geral
  general: 'Olá! Gostaria de agendar uma consulta na For U Odontologia Especializada. Poderiam me informar os horários disponíveis?',
  // 1.4 Botão flutuante
  floating: 'Olá! Conheci a For U Odontologia Especializada pelo site e gostaria de receber mais informações.',
  // 1.2 Agendamento por doutora com nomes profissionais completos
  doctors: {
    'dra-fabiana': 'Olá! Gostaria de agendar uma consulta com a Dra. Fabiana Monte Callado. Poderiam me informar os horários disponíveis?',
    'dra-roberta': 'Olá! Gostaria de agendar uma consulta com a Dra. Roberta dos S. Rodrigues Asselta. Poderiam me informar os horários disponíveis?',
    'dra-tatiana': 'Olá! Gostaria de agendar uma consulta com a Dra. Tatiana Sugano. Poderiam me informar os horários disponíveis?',
  },
};

export const getWhatsAppUrl = (messageText: string = WHATSAPP_MESSAGES.general): string => {
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(messageText)}`;
};

export const getDoctorWhatsAppUrl = (doctorIdOrName: string): string => {
  const normalized = doctorIdOrName.toLowerCase();
  if (normalized.includes('fabiana')) {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.doctors['dra-fabiana']);
  }
  if (normalized.includes('roberta')) {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.doctors['dra-roberta']);
  }
  if (normalized.includes('tatiana')) {
    return getWhatsAppUrl(WHATSAPP_MESSAGES.doctors['dra-tatiana']);
  }
  return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
};

// Interface para os dados do formulário de agendamento (suporta nomes em pt-BR e en)
export interface AgendamentoDados {
  nome?: string;
  name?: string;
  telefone?: string;
  phone?: string;
  email?: string;
  profissional?: string;
  preferredDoctor?: string;
  tratamento?: string;
  treatment?: string;
  data?: string;
  preferredDate?: string;
  horario?: string;
  preferredTime?: string;
  observacoes?: string;
  notes?: string;
}

// Normaliza o nome da profissional para o padrão solicitado no projeto
export const normalizeDoctorName = (doctorIdOrName: string): string => {
  const normalized = (doctorIdOrName || '').toLowerCase();
  if (normalized.includes('fabiana')) {
    return 'Dra. Fabiana Monte Callado';
  }
  if (normalized.includes('roberta')) {
    return 'Dra. Roberta dos S. Rodrigues Asselta';
  }
  if (normalized.includes('tatiana')) {
    return 'Dra. Tatiana Sugano';
  }
  return doctorIdOrName || '';
};

// Mensagem automática de observação por profissional
export const getDoctorBookingNote = (doctorIdOrName: string): string => {
  const doctorName = normalizeDoctorName(doctorIdOrName);
  return `Gostaria de agendar uma consulta com a ${doctorName}.`;
};

// Atualiza a observação sem duplicar frases e sem apagar o texto escrito pelo paciente
export const atualizarObservacaoProfissional = (
  textoAtual: string = '',
  novaMensagem: string
): string => {
  if (!textoAtual || !textoAtual.trim()) {
    return novaMensagem;
  }

  // Regex para identificar sentenças anteriores de agendamento de doutora
  const doctorSentenceRegex = /Gostaria de agendar uma consulta com (?:a )?Dra\.[^.\n]+(?:\.)?/i;

  if (doctorSentenceRegex.test(textoAtual)) {
    return textoAtual.replace(doctorSentenceRegex, novaMensagem).trim();
  }

  if (textoAtual.includes(novaMensagem)) {
    return textoAtual;
  }

  return `${novaMensagem}\n${textoAtual.trim()}`;
};

// Monta a mensagem completa e profissional do agendamento para o WhatsApp oficial
export function montarMensagemAgendamento(dados: AgendamentoDados): string {
  const nome = (dados.nome || dados.name || '').trim() || 'Não informado';
  const telefone = (dados.telefone || dados.phone || '').trim() || 'Não informado';
  const profissional = (dados.profissional || dados.preferredDoctor || '').trim() || 'A combinar';
  const tratamento = (dados.tratamento || dados.treatment || '').trim() || 'Avaliação inicial';

  let data = (dados.data || dados.preferredDate || '').trim() || 'A combinar';
  if (data && data !== 'A combinar' && data.includes('-')) {
    const parts = data.split('-');
    if (parts.length === 3) {
      data = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  }

  const horario = (dados.horario || dados.preferredTime || '').trim() || 'A combinar';
  const observacoes = (dados.observacoes || dados.notes || '').trim() || 'Nenhuma observação informada.';

  const linhas = [
    '*SOLICITAÇÃO DE AGENDAMENTO*',
    '*FOR U ODONTOLOGIA ESPECIALIZADA*',
    '',
    'Olá! Gostaria de solicitar um agendamento.',
    '',
    '━━━━━━━━━━━━━━━━━━',
    '*DADOS DO PACIENTE*',
    '━━━━━━━━━━━━━━━━━━',
    '',
    `*Nome:* ${nome}`,
    `*Telefone:* ${telefone}`,
    '',
    '━━━━━━━━━━━━━━━━━━',
    '*INFORMAÇÕES DO AGENDAMENTO*',
    '━━━━━━━━━━━━━━━━━━',
    '',
    `*Profissional:* ${profissional}`,
    `*Tratamento:* ${tratamento}`,
    `*Data de preferência:* ${data}`,
    `*Horário de preferência:* ${horario}`,
    '',
    '━━━━━━━━━━━━━━━━━━',
    '*OBSERVAÇÕES*',
    '━━━━━━━━━━━━━━━━━━',
    '',
    observacoes,
    '',
    'Aguardo o retorno para confirmar a disponibilidade.',
    '',
    '*Obrigada(o)!*'
  ];

  return linhas.join('\n');
}

// Envia a solicitação de agendamento ao WhatsApp oficial utilizando URL e URLSearchParams
export function enviarAgendamentoWhatsApp(
  dados: AgendamentoDados,
  numeroClinica: string = CLINIC_INFO.whatsappRaw
): void {
  const mensagem = montarMensagemAgendamento(dados);

  // Verificação técnica obrigatória
  console.log('Mensagem original:', JSON.stringify(mensagem));
  console.log('Contém quebra de linha:', mensagem.includes('\n'));
  console.log('Quantidade de linhas:', mensagem.split('\n').length);

  const numero = String(numeroClinica).replace(/\D/g, '');

  const url = new URL(`https://wa.me/${numero}`);
  url.searchParams.set('text', mensagem);

  console.log('URL gerada:', url.toString());

  // Teste de integridade de ida e volta da URL
  const mensagemRecuperada = url.searchParams.get('text');
  console.assert(
    mensagemRecuperada === mensagem,
    'A mensagem foi alterada durante a codificação da URL.'
  );

  const urlString = url.toString();
  const win = window.open(urlString, '_blank', 'noopener,noreferrer');
  if (!win) {
    window.location.href = urlString;
  }
}


export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-01',
    image: '/assets/hero/recepcao-foru.png',
    alt: 'Recepção da For U Odontologia Especializada com balcão de atendimento e logotipo institucional na parede',
    caption: 'Recepção For U • Conforto e Elegância',
    objectPosition: 'object-[41%_18%]',
    imageClassName: 'hero-reception-frame',
  },
  {
    id: 'hero-02',
    image: '/assets/aistudio/For_U_Odontologia___1_ano__marcoshermes-67.jpg_6e158093.jpeg',
    alt: 'Dra. Fabiana, Dra. Roberta e Dra. Tatiana juntas - Corpo Clínico da For U Odontologia Especializada',
    caption: 'Corpo Clínico • Dra. Fabiana, Dra. Roberta e Dra. Tatiana',
    objectPosition: 'object-[center_18%]',
  },
];

// 02 — NOSSAS ESPECIALIDADES (Faixa horizontal minimalista logo abaixo do Hero)
export const SPECIALTY_BAR_ITEMS: SpecialtyBarItem[] = [
  {
    id: 'implantes',
    title: 'Implantes',
    category: 'Reabilitação',
    iconName: 'Anchor',
    treatmentId: 'implantes',
  },
  {
    id: 'protese-dentaria',
    title: 'Prótese Dentária',
    category: 'Reabilitação',
    iconName: 'Layers',
    treatmentId: 'protese-dentaria',
  },
  {
    id: 'estetica-odontologica',
    title: 'Estética Odontológica',
    category: 'Estética Dental',
    iconName: 'Sparkles',
    treatmentId: 'estetica-odontologica',
  },
  {
    id: 'ortodontia-invisalign',
    title: 'Ortodontia / Invisalign',
    category: 'Alinhamento & Oclusão',
    iconName: 'Smile',
    treatmentId: 'ortodontia-invisalign',
  },
  {
    id: 'harmonizacao-orofacial',
    title: 'Harmonização Orofacial',
    category: 'Estética & Equilíbrio',
    iconName: 'SmilePlus',
    treatmentId: 'harmonizacao-orofacial',
  },
  {
    id: 'endodontia',
    title: 'Endodontia com Microscopia',
    category: 'Tratamento de Canal',
    iconName: 'ShieldCheck',
    treatmentId: 'endodontia',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    category: 'Cuidado Infantil',
    iconName: 'Smile',
    treatmentId: 'odontopediatria',
  },
  {
    id: 'prevencao-odontologica',
    title: 'Prevenção Odontológica',
    category: 'Saúde Bucal',
    iconName: 'ShieldCheck',
    treatmentId: 'prevencao-odontologica',
  },
];

// 04 — POR QUE FOR U? (Diferenciais institucionais humanizados e acolhedores)
export const WHY_FOR_U_ITEMS: WhyForUItem[] = [
  {
    id: 'atendimento-personalizado',
    title: 'Atendimento Personalizado',
    description: 'Cada sorriso tem uma história, e cada pessoa merece ser ouvida. Por isso, dedicamos tempo para compreender suas necessidades, expectativas e oferecer um cuidado verdadeiramente individualizado.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'especialidades-integradas',
    title: 'Especialidades Integradas',
    description: 'Reunimos profissionais de diferentes especialidades para oferecer um cuidado completo, com uma visão integrada da sua saúde bucal e tratamentos pensados para você.',
    iconName: 'Users2',
  },
  {
    id: 'planejamento-cuidadoso',
    title: 'Planejamento Cuidadoso',
    description: 'Cada etapa do seu tratamento é conduzida com atenção, responsabilidade e respeito às suas necessidades. Aqui, cada detalhe importa, porque o seu bem-estar é nossa prioridade.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'experiencia-acolhedora',
    title: 'Experiência Acolhedora',
    description: 'Queremos que você se sinta bem desde o primeiro contato. Criamos um ambiente onde o carinho, a escuta e a confiança fazem parte de cada atendimento.',
    iconName: 'Coffee',
  },
];

// 05 — CONHEÇA AS ESPECIALISTAS (Exclusivamente as três profissionais confirmadas)
export const SPECIALISTS: Specialist[] = [
  {
    id: 'dra-fabiana',
    name: 'Dra. Fabiana Monte Callado',
    role: 'Cirurgiã-Dentista',
    cro: 'CROSP 77.944',
    image: '/assets/aistudio/FABIANA_CALLADO_4544dad1.png',
    curriculum: 'Universidade de Santo Amaro (UNISA), 2002.',
    bio: 'Cirurgiã-dentista formada pela Universidade de Santo Amaro (UNISA) em 2002, especialista em Ortodontia e Ortopedia Funcional dos Maxilares, mestranda em Ortodontia pela USP e com atuação na docência em cursos de especialização e graduação em Ortodontia. Atendimento especializado em crianças, adolescentes e adultos.',
    highlights: ['Ortodontia', 'Ortopedia Funcional dos Maxilares', 'Odontopediatria'],
    objectPosition: '50% 12%',
    modalObjectPosition: '50% 12%',
  },
  {
    id: 'dra-roberta',
    name: 'Dra. Roberta dos S. Rodrigues Asselta',
    role: 'Cirurgiã-Dentista',
    cro: 'CROSP 78.014',
    image: '/assets/aistudio/ROBERTA_63037825.jpeg',
    curriculum: 'Universidade de Santo Amaro (UNISA), 2002',
    bio: 'Cirurgiã-dentista formada pela Universidade de Santo Amaro (UNISA) em 2002, com atuação em Clínica Geral, especialista em Prótese Dentária e Harmonização Orofacial.',
    highlights: ['Clínica Geral', 'Prótese Dentária', 'Harmonização Orofacial'],
    objectPosition: '50% 12%',
    modalObjectPosition: '50% 12%',
  },
  {
    id: 'dra-tatiana',
    name: 'Dra. Tatiana Sugano',
    role: 'Cirurgiã-Dentista',
    cro: 'CROSP 57.821',
    image: '/assets/aistudio/TATIANA_SUGANO_1bb97ce5.jpeg',
    curriculum: 'Universidade de Santo Amaro (UNISA), 1995.',
    bio: 'Cirurgiã-dentista formada pela Universidade de Santo Amaro (UNISA) em 1995, especialista em Endodontia e atuação em Clínica Geral.',
    highlights: ['Clínica Geral', 'Endodontia'],
    objectPosition: '50% 10%',
    modalObjectPosition: '50% 10%',
  },
];

// 06 — TRATAMENTOS (Organizados rigorosamente em ordem alfabética crescente A–Z)
export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'botox',
    title: 'Botox',
    subtitle: 'Aplicação Clínica e Terapêutica',
    category: 'estetica',
    highlightTag: 'Terapêutico & Estético',
    shortDescription: 'Aplicação da toxina botulínica para finalidades funcionais odontológicas e estéticas.',
    fullDescription: 'Procedimento realizado para auxiliar no controle de queixas como bruxismo, apertamento dental e suavização de linhas na região orofacial.',
    image: '/assets/treatments/botox.jpg',
    objectPosition: '50% 30%',
    modalObjectPosition: 'center center',
    modalObjectFit: 'contain',
    benefits: [
      'Auxílio no relaxamento da musculatura mastigatória',
      'Aplicação precisa em consultório',
      'Acompanhamento dos resultados',
    ],
  },
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    subtitle: 'Diagnóstico e Cuidados Gerais',
    category: 'prevencao',
    highlightTag: 'Clínica Geral',
    shortDescription: 'Atendimento primário, restaurações, diagnóstico e direcionamento para tratamentos específicos.',
    fullDescription: 'Exames de rotina, restaurações estéticas e cuidados essenciais para manter a integridade bucal e a mastigação em dia.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85',
    benefits: [
      'Exame clínico completo',
      'Restaurações e cuidados funcionais',
      'Encaminhamento e planejamento integrado',
    ],
  },
  {
    id: 'endodontia',
    title: 'Endodontia com Microscopia',
    subtitle: 'Tratamento de Canal',
    category: 'prevencao',
    highlightTag: 'Canal Radicular',
    shortDescription: 'Diagnóstico e tratamento dos canais radiculares para alívio de dor e preservação do dente natural.',
    fullDescription: 'Procedimento seguro de limpeza, desinfecção e obturação do canal radicular, visando salvar dentes com alterações na polpa e eliminar infecções.',
    image: '/assets/treatments/endodontia-com-microscopia.png',
    objectPosition: 'center',
    modalObjectPosition: 'center',
    modalObjectFit: 'contain',
    benefits: [
      'Alívio de dores dentárias',
      'Preservação do dente natural',
      'Acompanhamento radiográfico do reparo',
    ],
  },
  {
    id: 'estetica-odontologica',
    title: 'Estética Odontológica',
    subtitle: 'Harmonia do Sorriso',
    category: 'estetica',
    highlightTag: 'Estética Dental',
    shortDescription: 'Cuidados e procedimentos dedicados à harmonia visual, formato e tonalidade dos dentes.',
    fullDescription: 'Planejamento estético individualizado para avaliar proporções, cor e forma dos dentes, preservando a saúde das estruturas dentárias.',
    image: '/assets/treatments/estetica-odontologica.webp',
    objectPosition: 'center',
    modalObjectPosition: 'center',
    modalObjectFit: 'contain',
    benefits: [
      'Planejamento estético personalizado',
      'Foco em naturalidade',
      'Preservação da saúde dental',
    ],
  },
  {
    id: 'harmonizacao-orofacial',
    title: 'Harmonização Orofacial',
    subtitle: 'Estética e Equilíbrio Facial',
    category: 'estetica',
    highlightTag: 'Harmonização',
    shortDescription: 'Procedimentos para equilíbrio e proporcionalidade entre o sorriso e os contornos faciais.',
    fullDescription: 'Avaliação das proporções faciais e procedimentos clínicos integrados ao sorriso para promoção de harmonia e bem-estar.',
    image: '/assets/treatments/harmonizacao-orofacial.jpg',
    objectPosition: '50% 45%',
    modalObjectPosition: 'center center',
    modalObjectFit: 'contain',
    benefits: [
      'Avaliação anatômica criteriosa',
      'Planejamento individualizado',
      'Respeito às características naturais da face',
    ],
  },
  {
    id: 'implantes',
    title: 'Implantes',
    subtitle: 'Reabilitação de Dentes Ausentes',
    category: 'reabilitacao',
    highlightTag: 'Reabilitação',
    shortDescription: 'Procedimento para substituição de dentes ausentes, restabelecendo a função mastigatória e o equilíbrio bucal.',
    fullDescription: 'Avaliação e colocação de implantes dentários para repor elementos perdidos, restaurando mastigação e suporte com planejamento individualizado.',
    image: '/assets/treatments/implantes.jpg',
    benefits: [
      'Recuperação da capacidade mastigatória',
      'Planejamento clínico cuidadoso',
      'Acompanhamento pós-procedimento',
    ],
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    subtitle: 'Cuidado Odontológico Infantil',
    category: 'prevencao',
    highlightTag: 'Infantil',
    shortDescription: 'Atendimento odontológico voltado a bebês, crianças e adolescentes com abordagem gentil e educativa.',
    fullDescription: 'Cuidado com a saúde bucal infantil desde os primeiros dentes, acompanhamento do desenvolvimento das arcadas e incentivo a hábitos saudáveis em ambiente tranquilo.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Abordagem gentil e acolhedora',
      'Acompanhamento da dentição decídua e mista',
      'Orientações aos pais e responsáveis',
    ],
  },
  {
    id: 'ortodontia-invisalign',
    title: 'Ortodontia / Invisalign',
    subtitle: 'Alinhamento Dental e Oclusão',
    category: 'ortodontia',
    highlightTag: 'Ortodontia',
    shortDescription: 'Acompanhamento ortodôntico e alinhamento dental, incluindo opções como Invisalign e aparelhos convencionais.',
    fullDescription: 'Diagnóstico e correção do posicionamento dentário e da oclusão, oferecendo acompanhamento planejado para crianças, jovens e adultos.',
    image: '/assets/treatments/ortodontia-invisalign.jpg',
    objectPosition: '50% 50%',
    modalObjectPosition: '50% 50%',
    benefits: [
      'Diagnóstico oclusal detalhado',
      'Opções com Invisalign e aparelhos ortodônticos',
      'Acompanhamento clínico periódico',
    ],
  },
  {
    id: 'ortopedia-funcional',
    title: 'Ortopedia Funcional',
    subtitle: 'Desenvolvimento das Arcadas',
    category: 'ortodontia',
    highlightTag: 'Ortopedia',
    shortDescription: 'Direcionamento do desenvolvimento ósseo e muscular das arcadas dentárias e da face.',
    fullDescription: 'Tratamento preventivo e interceptativo que atua nas bases ósseas e musculares durante as fases de crescimento, auxiliando no equilíbrio funcional e respiratório.',
    image: '/assets/treatments/ortopedia-funcional.png',
    objectPosition: '50% 52%',
    modalObjectPosition: '50% 52%',
    benefits: [
      'Intervenção em fases de crescimento',
      'Auxílio no equilíbrio das arcadas',
      'Orientação preventiva contínua',
    ],
  },
  {
    id: 'prevencao-odontologica',
    title: 'Prevenção Odontológica',
    subtitle: 'Profilaxia e Saúde Bucal',
    category: 'prevencao',
    highlightTag: 'Prevenção',
    shortDescription: 'Consultas periódicas de profilaxia, remoção de tártaro e orientação para manutenção da saúde bucal.',
    fullDescription: 'Acompanhamento preventivo com exame clínico criterioso, limpeza profissional e orientações de higiene bucal para evitar cáries e doenças gengivais.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Limpeza e profilaxia profissional',
      'Diagnóstico precoce de alterações bucais',
      'Orientações personalizadas de higiene',
    ],
  },
  {
    id: 'protese-dentaria',
    title: 'Prótese Dentária',
    subtitle: 'Restauração Protética',
    category: 'reabilitacao',
    highlightTag: 'Prótese',
    shortDescription: 'Restauração protética fixa ou removível para devolver equilíbrio, função e harmonia aos dentes.',
    fullDescription: 'Confecção e adaptação de próteses unitárias, parciais ou totais, indicadas para a reposição de perdas dentárias com foco em estabilidade e conforto.',
    image: '/assets/treatments/protese-dentaria.jpg',
    objectPosition: '50% 45%',
    modalObjectPosition: '50% 45%',
    benefits: [
      'Reabilitação da mastigação e da fala',
      'Adaptação individualizada',
      'Manutenção e ajustes clínicos periódicos',
    ],
  },
];

// 08 — EXPERIÊNCIA FOR U (5 passos humanos e objetivos)
export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: '01',
    title: 'Acolhimento',
    description: 'Recepção pontual em ambiente tranquilo, reservando tempo para ouvir você com calma e atenção.',
  },
  {
    step: '02',
    title: 'Avaliação',
    description: 'Exame clínico detalhado para compreender a saúde bucal, estética e as reais necessidades de cada pessoa.',
  },
  {
    step: '03',
    title: 'Planejamento',
    description: 'Discussão integrada entre as especialistas para desenhar o plano de tratamento mais seguro e transparente.',
  },
  {
    step: '04',
    title: 'Tratamento',
    description: 'Execução cuidadosa com foco no conforto, comunicação constante e respeito ao ritmo de cada paciente.',
  },
  {
    step: '05',
    title: 'Acompanhamento',
    description: 'Monitoramento pós-procedimento e suporte contínuo para a manutenção da saúde e do sorriso.',
  },
];

// 09 — A CLÍNICA (Fotos do espaço físico preparadas para o ensaio fotográfico real)
export const CLINIC_SPACE_PHOTOS: ClinicSpacePhoto[] = [
  {
    id: 'clinic-01',
    title: 'Sala de Espera',
    description: 'Um ambiente acolhedor e confortável, pensado para receber você e sua família com carinho e tranquilidade.',
    image: '/assets/clinic/sala-espera-1.png',
    aspect: 'large',
  },
  {
    id: 'clinic-02',
    title: 'Tecnologia Avançada',
    description: 'Equipamentos e tecnologias que proporcionam mais precisão, segurança e conforto em cada atendimento.',
    image: '/assets/clinic/tecnologia-1.jpg',
    aspect: 'secondary',
  },
  {
    id: 'clinic-03',
    title: 'Consultório Odontológico',
    description: 'Estrutura acolhedora pensada para o seu bem-estar e conforto.',
    image: '/assets/clinica/consultorio-01.webp',
    aspect: 'secondary',
  },
  {
    id: 'clinic-04',
    title: 'Detalhes de Acolhimento',
    description: 'Ambiente organizado para oferecer conforto e serenidade em cada consulta.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=85',
    aspect: 'secondary',
  },
];

// 11 — AVALIAÇÕES (Experiências de pacientes na For U Odontologia)
export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholderItem[] = [
  {
    id: 'review-01',
    authorLabel: 'Paciente For U',
    quotePlaceholder: 'Atendimento impecável desde a recepção até a consulta. As doutoras explicam cada detalhe com muita calma e clareza, transmitindo total segurança e acolhimento.',
    source: 'Google',
  },
  {
    id: 'review-02',
    authorLabel: 'Paciente For U',
    quotePlaceholder: 'Espaço acolhedor, pontualidade britânica e profissionais extremamente atenciosas e competentes. O cuidado humano e a delicadeza no atendimento fazem toda a diferença.',
    source: 'Google',
  },
  {
    id: 'review-03',
    authorLabel: 'Paciente For U',
    quotePlaceholder: 'Excelente clínica no Brooklin. Tratamento realizado com máxima precisão, conforto e pontualidade. Uma experiência odontológica acolhedora e diferenciada.',
    source: 'Google',
  },
];
