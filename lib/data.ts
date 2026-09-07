export const WHATSAPP_NUMBER = '5581996744143';

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#fundadores', label: 'Sobre' },
];

export const FOOTER_LINKS = [
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#fundadores', label: 'Sobre' },
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
  icon?: string;
  description: string;
  tags: string[];
  live?: string;
  price?: string;
  ctaLabel?: string;
  ctaMessage?: string;
}

export const PROJECTS: Project[] = [
  // ---------- SISTEMAS (os 3 sistemas próprios da CriaTech) ----------
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
    ctaMessage: 'Olá, quero conhecer o BarberPro',
  },
  {
    id: 'criaoficina',
    title: 'CriaOficina',
    isNew: true,
    category: 'sistema',
    categoryLabel: 'Sistema de Gestão',
    tag: '🏭 Grande lançamento',
    image: null,
    icon: '🛠️',
    description:
      'Sistema de gestão completo, criado para oficinas mecânicas e hoje usado também por clínicas, consultórios, salões e lojas: clientes, veículos, ordens de serviço, vendas, estoque e financeiro em um único painel.',
    tags: ['Gestão Completa', 'Ordens de Serviço', 'Estoque', 'Financeiro'],
    live: 'https://www.criaoficina.online',
    ctaMessage: 'Olá, quero saber mais sobre o CriaOficina',
  },
  {
    id: 'finpilot',
    title: 'FinPilot AI',
    isNew: true,
    category: 'sistema',
    categoryLabel: 'Sistema com Inteligência Artificial',
    tag: '🤖 Novo · IA',
    image: null,
    icon: '🤖',
    description:
      'Sistema inteligente de gestão financeira com dashboards automatizados, análise de fluxo de caixa e insights gerados por Inteligência Artificial para ajudar na tomada de decisão do negócio.',
    tags: ['Inteligência Artificial', 'Financeiro', 'Dashboards'],
    live: 'https://finpilot-ai-dvei.onrender.com/',
  },

  // ---------- SITES (clientes reais atendidos pela CriaTech) ----------
  {
    id: 'cmreguladora',
    title: 'CM Reguladora',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: null,
    icon: '📋',
    description: 'Site institucional para regulação de sinistros e vistorias veiculares.',
    tags: ['Site Institucional', 'Regulação de Sinistros'],
    live: 'https://www.cmreguladora.com.br',
  },
  {
    id: 'segbrasil',
    title: 'Seg Brasil Mangabeira',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: null,
    icon: '🚗',
    description: 'Site institucional para proteção veicular — João Pessoa/PB.',
    tags: ['Proteção Veicular', 'João Pessoa/PB'],
    live: 'https://www.segbrasilmangabeira.com.br',
  },
  {
    id: 'visionfleet',
    title: 'Vision Fleet',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: null,
    icon: '🛰️',
    description: 'Site institucional para rastreamento e videotelemetria de frotas.',
    tags: ['Rastreamento', 'Frotas'],
    live: 'https://www.visionfleet.solutions',
  },
  {
    id: 'jdseguranca',
    title: 'JDS Segurança Eletrônica',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: null,
    icon: '🎥',
    description: 'Site institucional para CFTV, alarmes e monitoramento — Recife/PE.',
    tags: ['CFTV', 'Monitoramento'],
    live: 'https://www.jdseguranca.online',
  },
  {
    id: 'marciliosegur',
    title: 'Marcílio Segurança Eletrônica',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: null,
    icon: '🔐',
    description: 'Site institucional para cercas elétricas, câmeras e automação residencial.',
    tags: ['Segurança Eletrônica', 'Automação'],
    live: 'https://www.marciliosegurancaeletronica.online',
  },
  {
    id: 'michelrep',
    title: 'Michel Representações',
    category: 'site',
    categoryLabel: 'Site Institucional',
    tag: 'Site Institucional',
    image: null,
    icon: '💳',
    description: 'Site institucional para proteção veicular, crédito e limpeza de nome.',
    tags: ['Proteção Veicular', 'Crédito'],
    live: 'https://www.michelschwartzrepresentacoes.shop',
  },

  // ---------- MÍDIA (pacotes de gestão de redes sociais) ----------
  {
    id: 'midia-basico',
    title: 'Plano Básico',
    category: 'midia',
    categoryLabel: 'Pacote de Mídia',
    tag: 'Gestão de Redes Sociais',
    image: null,
    icon: '📱',
    description:
      '15 posts durante 15 dias: 1–2 stories por dia e 2 reels (1 por semana), incluindo tráfego pago de R$ 100,00. Redes inclusas: Facebook OU Instagram.',
    tags: ['1–2 Stories/dia', '2 Reels', 'Tráfego pago R$100'],
    price: 'R$ 850,00',
    ctaLabel: 'Contratar Plano Básico',
    ctaMessage: 'Olá, quero contratar o Plano Básico de mídia da CriaTech',
  },
  {
    id: 'midia-plus',
    title: 'Plano Plus',
    isNew: true,
    category: 'midia',
    categoryLabel: 'Pacote de Mídia',
    tag: '⭐ Mais completo',
    image: null,
    icon: '📸',
    description:
      'Posts de segunda a sábado durante todo o mês: 1–2 stories por dia, posts diários, 1 carrossel por semana e 1 reels por semana, incluindo tráfego pago de R$ 250,00. Redes inclusas: Facebook e Instagram.',
    tags: ['Posts diários', '1 Carrossel/semana', '1 Reels/semana', 'Tráfego pago R$250'],
    price: 'R$ 1.150,00',
    ctaLabel: 'Contratar Plano Plus',
    ctaMessage: 'Olá, quero contratar o Plano Plus de mídia da CriaTech',
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

