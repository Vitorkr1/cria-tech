export const WHATSAPP_NUMBER = '5581996744143';

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#sistemas', label: 'Sistemas' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#clientes', label: 'Clientes' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#fundadores', label: 'Fundadores' },
  { href: '/#contato', label: 'Contato' },
  { href: '/documentacao/', label: 'Documentação' },
];

export const STATS = [
  { value: 100, prefix: '+ de ', suffix: '', label: 'Projetos entregues' },
  { value: 100, prefix: '+ de ', suffix: '', label: 'Clientes Satisfeitos' },
  { value: 2, prefix: '+ de ', suffix: 'M', label: 'De alcance' },
  { value: 100, prefix: '', suffix: '%', label: 'de Eficiência e agilidade' },
];

export type ProjectCategory = 'site' | 'sistema' | 'midia';

export interface Project {
  id: string;
  title: string;
  isNew?: boolean;
  category: ProjectCategory;
  categoryLabel: string;
  tag: string;
  image: string | null;
  description: string;
  tags: string[];
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'barberpro',
    title: 'BarberPro',
    isNew: true,
    category: 'sistema',
    categoryLabel: 'Sistema de Agendamento',
    tag: '🚀 Lançamento',
    image: '/images/barberpro.jpg',
    description:
      'Sistema completo de agendamento para barbearias e salões modernos: agenda online 24h, confirmação automática via WhatsApp, cadastro de clientes, registro de cortes e relatórios de faturamento em tempo real.',
    tags: ['Agendamento Online', 'WhatsApp', 'Multiusuário', 'Relatórios'],
    live: 'https://barberpro-6yix.onrender.com/',
  },
  {
    id: 'vitalis',
    title: 'Clínica Vitalis',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: '/images/clinica-vitalis.webp',
    description:
      'Site institucional para clínica, com design responsivo, apresentação de especialidades, equipe médica e canais de contato direto para agendamento de consultas.',
    tags: ['Site Responsivo', 'SEO', 'Institucional'],
  },
  {
    id: 'fitpro',
    title: 'FitPro Academia',
    category: 'site',
    categoryLabel: 'Landing Page',
    tag: 'Landing Page',
    image: '/images/fitpro-academia.jpg',
    description:
      'Landing page de alta conversão para academia, com foco em captação de novos alunos, planos em destaque e chamadas diretas para matrícula.',
    tags: ['Landing Page', 'Alta Conversão', 'Mobile-first'],
  },
  {
    id: 'flow',
    title: 'Flow Solutions',
    category: 'sistema',
    categoryLabel: 'Sistema Web',
    tag: 'Sistema Web',
    image: '/images/flow-solutions.jpg',
    description:
      'Sistema web sob medida com dashboard de gestão, controle de processos internos e painéis de indicadores para tomada de decisão.',
    tags: ['Dashboard', 'Gestão', 'Sistema sob medida'],
  },
  {
    id: 'registro',
    title: 'Registro de produtos',
    category: 'sistema',
    categoryLabel: 'Sistema de Registro',
    tag: 'Registro de Cortes',
    image: '/images/registro-produtos.png',
    description:
      'Sistema de registro e controle de produtos/cortes, com histórico completo por cliente e organização do fluxo de atendimento.',
    tags: ['Registro', 'Controle', 'Histórico'],
  },
  {
    id: 'finpilot',
    title: 'FinPilot AI',
    isNew: true,
    category: 'sistema',
    categoryLabel: 'Sistema com Inteligência Artificial',
    tag: '🤖 Novo · IA',
    image: null,
    description:
      'Sistema inteligente de gestão financeira com dashboards automatizados, análise de fluxo de caixa e insights gerados por Inteligência Artificial para ajudar na tomada de decisão do negócio.',
    tags: ['Inteligência Artificial', 'Financeiro', 'Dashboards'],
    live: 'https://finpilot-ai-dvei.onrender.com/',
  },
];

export const PROJECT_FILTERS: { label: string; value: 'todos' | ProjectCategory }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Sites', value: 'site' },
  { label: 'Sistemas', value: 'sistema' },
  { label: 'Mídia', value: 'midia' },
];

export const TEAM = [
  {
    id: 'vitor',
    name: 'Vitor Guilherme',
    role: 'Full-stack Developer & UI Designer',
    bio: 'Especialista em criar experiências digitais de alto impacto. Apaixonado por código limpo e design que converte.',
    photo: '/images/vitor-guilherme.png',
    initials: 'VG',
    tags: ['Python', 'Node.js', 'JavaScript'],
  },
  {
    id: 'lucas',
    name: 'Lucas Moreira',
    role: 'Full-stack & Designer Pro',
    bio: 'Criativo e técnico ao mesmo tempo. Transforma ideias complexas em produtos digitais elegantes e funcionais.',
    photo: '/images/lucas-moreira.jpeg',
    initials: 'LM',
    tags: ['Python', 'Design', 'HTML/CSS/JS'],
  },
];

export const CLIENTS = [
  {
    name: 'CM Reguladora',
    icon: '📋',
    desc: 'Regulação de sinistros e vistorias',
    url: 'https://www.cmreguladora.com.br',
  },
  {
    name: 'Seg Brasil Mangabeira',
    icon: '🚗',
    desc: 'Proteção veicular — João Pessoa/PB',
    url: 'https://www.segbrasilmangabeira.com.br',
  },
  {
    name: 'Vision Fleet',
    icon: '🛰️',
    desc: 'Rastreamento e videotelemetria de frotas',
    url: 'https://www.visionfleet.solutions',
  },
  {
    name: 'JDS Segurança Eletrônica',
    icon: '🎥',
    desc: 'CFTV, alarmes e monitoramento — Recife/PE',
    url: 'https://www.jdseguranca.online',
  },
  {
    name: 'Marcílio Segurança Eletrônica',
    icon: '🔐',
    desc: 'Cercas elétricas, câmeras e automação',
    url: 'https://www.marciliosegurancaeletronica.online',
  },
  {
    name: 'Michel Representações',
    icon: '💳',
    desc: 'Proteção veicular, crédito e limpeza de nome',
    url: 'https://www.michelschwartzrepresentacoes.shop',
  },
];

export const SERVICES = [
  {
    title: 'Sites Profissionais',
    desc: 'Design responsivo, SEO técnico, velocidade máxima. Seu site vendendo 24h por dia.',
    items: ['Landing pages de alta conversão', 'Portfólios e sites institucionais', 'E-commerces completos'],
    featured: false,
  },
  {
    title: 'Sistemas & Dashboards',
    desc: 'Aplicações sob medida: gestão, agendamento, CRMs e integrações com APIs modernas.',
    items: [
      'BarberPro — Agendamento p/ barbearias',
      'CriaOficina — Gestão p/ oficinas, clínicas e lojas',
      'Registro de cortes / produtos',
      'Sistemas sob medida e integrações',
    ],
    featured: true,
  },
  {
    title: 'Design & Brand',
    desc: 'Identidade visual que posiciona sua marca. UX/UI que converte e encanta usuários.',
    items: ['Logo & identidade visual', 'Design de produto (UX/UI)', 'Prototipação rápida no Figma'],
    featured: false,
  },
];
