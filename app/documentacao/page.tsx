import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { waLink } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Documentação — CriaTech',
  description:
    'Documentação oficial da CriaTech: quem somos, serviços, sistemas próprios (BarberPro e CriaOficina), clientes atendidos e contato.',
  alternates: { canonical: '/documentacao/' },
  openGraph: {
    title: 'Documentação — CriaTech',
    description: 'Documentação oficial da CriaTech: quem somos, serviços, sistemas próprios e clientes atendidos.',
    url: 'https://criatech.online/documentacao/',
  },
};

const TOC = [
  { href: '#sobre', label: '1. Sobre a CriaTech' },
  { href: '#fundadores', label: '2. Fundadores' },
  { href: '#servicos', label: '3. Serviços' },
  { href: '#sistemas', label: '4. Sistemas próprios' },
  { href: '#processo', label: '5. Como trabalhamos' },
  { href: '#clientes', label: '6. Clientes e parceiros' },
  { href: '#contato', label: '7. Contato' },
];

const CLIENTS_LIST = [
  { name: 'CM Reguladora', desc: 'Regulação de sinistros', url: 'https://www.cmreguladora.com.br' },
  { name: 'Seg Brasil Mangabeira', desc: 'Proteção veicular', url: 'https://www.segbrasilmangabeira.com.br' },
  { name: 'Vision Fleet', desc: 'Rastreamento de frotas', url: 'https://www.visionfleet.solutions' },
  { name: 'JDS Segurança Eletrônica', desc: 'CFTV e monitoramento', url: 'https://www.jdseguranca.online' },
  {
    name: 'Marcílio Segurança Eletrônica',
    desc: 'Segurança eletrônica',
    url: 'https://www.marciliosegurancaeletronica.online',
  },
  {
    name: 'Michel Representações',
    desc: 'Proteção veicular e crédito',
    url: 'https://www.michelschwartzrepresentacoes.shop',
  },
];

function Block({ num, title, children, id }: { num: string; title: string; children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-[20px] border border-brand-border bg-white p-8 shadow-soft sm:p-10">
      <h2 className="mb-4 flex flex-wrap items-center gap-2.5 font-sans text-2xl font-extrabold text-brand-ink">
        <span className="rounded-lg border border-brand-blue/25 bg-brand-blue/10 px-2 py-0.5 text-sm text-brand-blue">
          {num}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-brand-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function DocumentacaoPage() {
  return (
    <>
      <Header />
      <main className="bg-brand-surfaceAlt pb-24 pt-32">
        <div className="mx-auto mb-14 max-w-2xl px-4 text-center sm:px-8">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Documentação oficial
          </div>
          <h1 className="mb-4 font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">
            CriaTech — Sites, Sistemas &amp; Design
          </h1>
          <p className="text-brand-muted leading-relaxed">
            Este documento reúne, de forma organizada, quem somos, o que entregamos, como funcionam nossos sistemas
            próprios e quem já confia no nosso trabalho.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-brand-muted">
            <span>
              Versão <strong className="text-brand-ink">1.0</strong>
            </span>
            <span>
              Atualizado em <strong className="text-brand-ink">Setembro de 2026</strong>
            </span>
            <span>
              Gestão: <strong className="text-brand-ink">Vitor Guilherme &amp; Lucas Moreira</strong>
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-2xl border border-brand-border bg-white p-6 shadow-soft lg:sticky lg:top-24">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-blue">Sumário</div>
            {TOC.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block border-l-2 border-transparent py-2 pl-3 text-sm text-brand-muted transition-colors hover:border-brand-cyan hover:text-brand-ink"
              >
                {item.label}
              </a>
            ))}
          </aside>

          <div className="flex flex-col gap-6">
            <Block id="sobre" num="01" title="Sobre a CriaTech">
              <p>
                A <strong className="text-brand-ink">CriaTech</strong> é uma empresa brasileira de criação de sites,
                sistemas e design digital. Desenvolvemos soluções tecnológicas sob medida para negócios de diversos
                segmentos, unindo desenvolvimento web, sistemas de gestão próprios e identidade visual em um único
                fornecedor.
              </p>
              <p>
                Nosso objetivo é simples: transformar ideias e processos manuais em produtos digitais que vendem,
                organizam e escalam o negócio do cliente — do primeiro contato até o suporte pós-entrega.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Sites', 'Sistemas de gestão', 'Design & Branding', 'Automação', 'Suporte técnico'].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-brand-cyan/25 bg-brand-cyan/5 px-3 py-1.5 text-sm text-brand-cyan"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Block>

            <Block id="fundadores" num="02" title="Fundadores & Gestão">
              <p>
                A CriaTech é gerenciada por seus dois fundadores, responsáveis por todo o ciclo de desenvolvimento,
                atendimento e suporte aos clientes.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-border bg-brand-surfaceAlt p-5">
                  <h4 className="font-sans font-bold text-brand-ink">Vitor Guilherme</h4>
                  <span className="text-sm font-semibold text-brand-blue">Full-stack Developer & UI Designer</span>
                  <p className="mt-2 text-sm">
                    Responsável pelo desenvolvimento de sistemas, back-end e arquitetura das aplicações da CriaTech.
                  </p>
                </div>
                <div className="rounded-xl border border-brand-border bg-brand-surfaceAlt p-5">
                  <h4 className="font-sans font-bold text-brand-ink">Lucas Moreira</h4>
                  <span className="text-sm font-semibold text-brand-blue">Full-stack & Designer Pro</span>
                  <p className="mt-2 text-sm">
                    Responsável pelo design de produto, front-end e experiência visual dos projetos entregues.
                  </p>
                </div>
              </div>
            </Block>

            <Block id="servicos" num="03" title="Serviços">
              <p>
                Atendemos empresas de diversos portes com um portfólio de serviços que cobre praticamente toda a
                presença digital do negócio:
              </p>
              <h3 className="pt-2 font-sans font-bold text-brand-cyan">Sites</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Sites institucionais e landing pages de alta conversão</li>
                <li>E-commerces completos</li>
                <li>Otimização de SEO técnico e performance</li>
              </ul>
              <h3 className="pt-2 font-sans font-bold text-brand-cyan">Sistemas</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Sistemas de gestão sob medida (dashboards, CRMs)</li>
                <li>Agendamento e automações via WhatsApp</li>
                <li>Integrações com APIs e ferramentas de terceiros</li>
              </ul>
              <h3 className="pt-2 font-sans font-bold text-brand-cyan">Design</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Identidade visual e logotipo</li>
                <li>Design de produto (UX/UI)</li>
                <li>Prototipação no Figma</li>
              </ul>
            </Block>

            <Block id="sistemas" num="04" title="Sistemas próprios">
              <p>
                Além de projetos sob medida, a CriaTech desenvolve e mantém dois sistemas próprios, prontos para uso
                comercial: <strong className="text-brand-ink">BarberPro</strong> e{' '}
                <strong className="text-brand-ink">CriaOficina</strong>.
              </p>
              <p>
                <strong className="text-brand-ink">BarberPro</strong> — sistema de agendamento para barbearias e
                salões, com agenda online, confirmação automática via WhatsApp, registro de cortes e relatórios de
                faturamento.
              </p>
              <p>
                <strong className="text-brand-ink">CriaOficina</strong> — sistema de gestão completo, criado para
                oficinas mecânicas e hoje usado também por clínicas, consultórios, salões e lojas que precisam de
                controle operacional e financeiro em um só painel.
              </p>
            </Block>

            <Block id="processo" num="05" title="Como trabalhamos">
              <ul className="list-disc space-y-1.5 pl-5 text-sm">
                <li>
                  <strong className="text-brand-ink">Briefing</strong> — entendimento dos objetivos, público-alvo e
                  diferenciais do negócio.
                </li>
                <li>
                  <strong className="text-brand-ink">Design</strong> — protótipos visuais alinhados à identidade da
                  marca.
                </li>
                <li>
                  <strong className="text-brand-ink">Desenvolvimento</strong> — codificação com tecnologias
                  modernas, rápidas e otimizadas para SEO.
                </li>
                <li>
                  <strong className="text-brand-ink">Lançamento</strong> — deploy, testes finais e entrega com
                  suporte, em média de 7 a 14 dias.
                </li>
              </ul>
            </Block>

            <Block id="clientes" num="06" title="Clientes e parceiros">
              <p>
                A CriaTech mantém vínculo direto com empresas em diferentes estados do Brasil, sendo responsável pelo
                desenvolvimento e manutenção dos sites abaixo:
              </p>
              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {CLIENTS_LIST.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-wrap items-center justify-between gap-1 rounded-xl border border-brand-border px-4 py-3.5 text-sm text-brand-ink transition-all hover:translate-x-1 hover:border-brand-blue/40"
                  >
                    {c.name} <span className="text-xs text-brand-muted">{c.desc}</span>
                  </a>
                ))}
              </div>
            </Block>

            <Block id="contato" num="07" title="Contato">
              <p>Fale diretamente com a equipe CriaTech para orçamentos, dúvidas técnicas ou suporte.</p>
              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-border p-4">
                  <div className="text-xs uppercase tracking-wide text-brand-muted">WhatsApp / Celular</div>
                  <a href="https://wa.me/5581996744143" target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold text-brand-ink">
                    (81) 99674-4143
                  </a>
                </div>
                <div className="rounded-xl border border-brand-border p-4">
                  <div className="text-xs uppercase tracking-wide text-brand-muted">Telefone fixo</div>
                  <a href="tel:+5581987364575" className="mt-1 block font-semibold text-brand-ink">
                    (81) 8736-4575
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href={waLink('Olá, li a documentação e quero um orçamento')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-glowBlue transition-all hover:-translate-y-0.5"
                >
                  Solicitar Orçamento →
                </a>
              </div>
            </Block>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
