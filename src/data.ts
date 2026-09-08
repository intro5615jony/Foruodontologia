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
    complement: 'sala/conjunto 406',
    neighborhood: 'Brooklin',
    city: 'São Paulo',
    state: 'SP',
    cep: '04602-000',
    fullFormatted: 'Rua Barão do Triunfo, 88 — sala/conjunto 406, Brooklin — São Paulo/SP',
    mapsUrl: 'https://maps.google.com/?q=Rua+Bar%C3%A3o+do+Triunfo,+88,+sala+406+-+Brooklin,+S%C3%A3o+Paulo+-+SP,+04602-000',
  },
  // Telefones Fixos confirmados
  landlinePhone: '(11) 5034-5782',
  landlineTel: 'tel:1150345782',
  landlinePhoneSecondary: '(11) 3384-5787',
  landlineTelSecondary: 'tel:1133845787',

  // WhatsApp para agendamentos
  whatsapp: '(11) 99349-8545',
  whatsappRaw: '5511993498545',
  whatsappDefaultMessage: 'Olá! Vim pelo site da For U Odontologia e gostaria de informações sobre agendamento.',

  // E-mail informado
  email: 'consultorioodontorefi@gmail.com',

  // Horários informados
  hours: {
    weekdays: 'Segunda a sexta-feira: 8h às 18h',
    saturday: 'Sábado: 8h às 17h',
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

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-01',
    image: '/assets/hero/DRA FABI-1.png',
    alt: 'Dra. Fabiana no consultório da For U Odontologia Especializada, em frente ao mural de fotografias',
    caption: 'Dra. Fabiana • Cuidado e Precisão',
    objectPosition: 'object-[center_28%]',
  },
  {
    id: 'hero-02',
    image: '/assets/hero/por-que-foru.jpg',
    alt: 'Recepção acolhedora da For U Odontologia Especializada com logotipo na parede',
    caption: 'Recepção For U • Conforto e Elegância',
    objectPosition: 'object-center',
  },
  {
    id: 'hero-03',
    image: '/assets/hero/DOUTORAS2-1.jpg',
    alt: 'Dra. Roberta, Dra. Fabiana e Dra. Tatiana juntas segurando modelos odontológicos',
    caption: 'Corpo Clínico • Dra. Fabiana, Dra. Roberta e Dra. Tatiana',
    objectPosition: 'object-[center_22%]',
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
    title: 'Endodontia',
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

// 04 — POR QUE FOR U? (Diferenciais institucionais confirmados)
export const WHY_FOR_U_ITEMS: WhyForUItem[] = [
  {
    id: 'atendimento-personalizado',
    title: 'Atendimento Personalizado',
    description: 'Cada paciente possui necessidades diferentes. Por isso, o cuidado começa pela escuta e por uma avaliação individualizada.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'especialidades-integradas',
    title: 'Especialidades Integradas',
    description: 'A atuação de profissionais em diferentes áreas permite uma abordagem mais completa e integrada.',
    iconName: 'Users2',
  },
  {
    id: 'planejamento-cuidadoso',
    title: 'Planejamento Cuidadoso',
    description: 'Cada tratamento é pensado de acordo com as necessidades e objetivos de cada paciente.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'experiencia-acolhedora',
    title: 'Experiência Acolhedora',
    description: 'Buscamos tornar cada etapa do atendimento mais tranquila, próxima e confortável.',
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
    image: '/assets/specialists/dra-fabiana.jpg',
    curriculum: 'Graduação em Odontologia',
    bio: 'Cirurgiã-dentista com atuação em Clínica Geral, Ortodontia, Ortopedia Funcional e Odontopediatria.',
    highlights: ['Clínica Geral', 'Ortodontia', 'Ortopedia Funcional', 'Odontopediatria'],
    objectPosition: '50% 15%',
    modalObjectPosition: '50% 18%',
  },
  {
    id: 'dra-roberta',
    name: 'Dra. Roberta dos S. Rodrigues Asselta',
    role: 'Cirurgiã-Dentista',
    cro: 'CROSP 78.014',
    image: '/assets/specialists/dra-roberta.jpeg',
    curriculum: 'Universidade Santo Amaro (UNISA), 2002',
    bio: 'Cirurgiã-dentista formada pela Universidade Santo Amaro (UNISA) em 2002, com atuação em Clínica Geral, Prótese Dentária e Harmonização Orofacial.',
    highlights: ['Clínica Geral', 'Prótese Dentária', 'Harmonização Orofacial'],
    objectPosition: '50% 18%',
    modalObjectPosition: '50% 20%',
  },
  {
    id: 'dra-tatiana',
    name: 'Dra. Tatiana F. Sugano de Araujo',
    role: 'Cirurgiã-Dentista',
    cro: 'CROSP 57.821',
    image: '/assets/specialists/dra-tatiana.jpg',
    curriculum: 'UNISA, 1995',
    bio: 'Cirurgiã-dentista formada pela UNISA em 1995, com atuação em Clínica Geral e Endodontia.',
    highlights: ['Clínica Geral', 'Endodontia'],
    objectPosition: '50% 15%',
    modalObjectPosition: '50% 18%',
  },
];

// 06 — TRATAMENTOS (Simplificado, sem termos de marketing exagerados ou não confirmados)
export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'implantes',
    title: 'Implantes',
    subtitle: 'Reabilitação de Dentes Ausentes',
    category: 'reabilitacao',
    highlightTag: 'Reabilitação',
    shortDescription: 'Procedimento para substituição de dentes ausentes, restabelecendo a função mastigatória e o equilíbrio bucal.',
    fullDescription: 'Avaliação e colocação de implantes dentários para repor elementos perdidos, restaurando mastigação e suporte com planejamento individualizado.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Recuperação da capacidade mastigatória',
      'Planejamento clínico cuidadoso',
      'Acompanhamento pós-procedimento',
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
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Reabilitação da mastigação e da fala',
      'Adaptação individualizada',
      'Manutenção e ajustes clínicos periódicos',
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
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85',
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
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Intervenção em fases de crescimento',
      'Auxílio no equilíbrio das arcadas',
      'Orientação preventiva contínua',
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
    image: 'https://images.unsplash.com/photo-1512290900672-1f02a0a02328?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Avaliação anatômica criteriosa',
      'Planejamento individualizado',
      'Respeito às características naturais da face',
    ],
  },
  {
    id: 'botox',
    title: 'Botox',
    subtitle: 'Aplicação Clínica e Terapêutica',
    category: 'estetica',
    highlightTag: 'Terapêutico & Estético',
    shortDescription: 'Aplicação da toxina botulínica para finalidades funcionais odontológicas e estéticas.',
    fullDescription: 'Procedimento realizado para auxiliar no controle de queixas como bruxismo, apertamento dental e suavização de linhas na região orofacial.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Auxílio no relaxamento da musculatura mastigatória',
      'Aplicação precisa em consultório',
      'Acompanhamento dos resultados',
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
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Planejamento estético personalizado',
      'Foco em naturalidade',
      'Preservação da saúde dental',
    ],
  },
  {
    id: 'endodontia',
    title: 'Endodontia',
    subtitle: 'Tratamento de Canal',
    category: 'prevencao',
    highlightTag: 'Canal Radicular',
    shortDescription: 'Diagnóstico e tratamento dos canais radiculares para alívio de dor e preservação do dente natural.',
    fullDescription: 'Procedimento seguro de limpeza, desinfecção e obturação do canal radicular, visando salvar dentes com alterações na polpa e eliminar infecções.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
    benefits: [
      'Alívio de dores dentárias',
      'Preservação do dente natural',
      'Acompanhamento radiográfico do reparo',
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
    title: 'Recepção e Sala de Espera',
    description: 'Ambiente acolhedor projetado com luz suave para receber você com calma.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85',
    aspect: 'large',
  },
  {
    id: 'clinic-02',
    title: 'Consultório de Atendimento',
    description: 'Espaço privativo preparado para consultas com tranquilidade e conforto.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
    aspect: 'secondary',
  },
  {
    id: 'clinic-03',
    title: 'Consultório Odontológico',
    description: 'Estrutura acolhedora pensada para o seu bem-estar e conforto.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85',
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
