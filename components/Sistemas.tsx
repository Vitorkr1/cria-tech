'use client';

import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal';
import { waLink } from '@/lib/data';

const BARBERPRO_FEATURES = [
  'Agenda online 24h',
  'Confirmação automática',
  'Cadastro de clientes',
  'Registro de cortes',
  'Controle de barbeiros',
  'Histórico de atendimentos',
  'Lembretes via WhatsApp',
  'Relatórios de faturamento',
];

const CRIAOFICINA_FEATURES = [
  'Gestão de Clientes',
  'Controle de Veículos',
  'Ordens de Serviço',
  'Gestão de Vendas',
  'Controle de Estoque',
  'Caixa & Financeiro',
  'Fechamento de Caixas',
  'Relatórios Detalhados',
];

function DashboardMockup() {
  return (
    <div
      className="aspect-[16/10] rounded-2xl border border-white/10 bg-[#0d1428] p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 [transform:perspective(1000px)_rotateY(-15deg)_rotateX(5deg)] hover:[transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)] max-lg:[transform:none]"
    >
      <div className="flex h-full overflow-hidden rounded-lg bg-[#050810]">
        <div className="w-1/5 border-r border-white/5 bg-[#0d1428]" />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="h-5 w-2/5 rounded bg-white/5" />
          <div className="grid grid-cols-4 gap-2.5">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="h-10 rounded-md bg-brand-blue/10" />
            ))}
          </div>
          <div className="flex-1 rounded-lg border border-brand-cyan/10 bg-gradient-to-t from-brand-cyan/10 to-transparent" />
        </div>
      </div>
    </div>
  );
}

function HighlightCard({
  label,
  title,
  highlight,
  desc,
  features,
  ctaLabel,
  ctaMessage,
  liveUrl,
  reverse,
}: {
  label: string;
  title: string;
  highlight: string;
  desc: React.ReactNode;
  features: string[];
  ctaLabel: string;
  ctaMessage: string;
  liveUrl: string;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[32px] border border-brand-cyan/25 bg-gradient-to-br from-[#0d1428] to-[#080d1a] p-8 shadow-[0_40px_100px_-30px_rgba(0,73,255,0.4)] sm:p-12 lg:grid-cols-[1fr_1.15fr] lg:p-16 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-blue/15 blur-[60px]" />
        <div className="relative z-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">{label}</div>
          <h2 className="mb-4 font-sans text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title} <span className="gradient-text">{highlight}</span>
          </h2>
          <div className="mb-8 text-white/70 leading-relaxed">{desc}</div>

          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5 text-sm text-white/90 transition-all hover:translate-x-1 hover:border-brand-cyan/30 hover:bg-brand-cyan/5"
              >
                <Check size={16} className="shrink-0 text-brand-cyan" />
                {f}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waLink(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="btn-shine shadow-under inline-flex items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-glowBlue transition-all hover:-translate-y-0.5"
            >
              {ctaLabel} <ArrowRight size={16} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-medium text-white/85 transition-all hover:border-white/35 hover:bg-white/5"
            >
              Ver sistema ao vivo ↗
            </a>
          </div>
        </div>
        <div className="relative z-10">
          <DashboardMockup />
        </div>
      </div>
    </Reveal>
  );
}

export default function Sistemas() {
  return (
    <section id="sistemas" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Nossos sistemas
            </div>
            <h2 className="mb-4 font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Sistemas próprios que <span className="gradient-text">vendem sozinhos</span>
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Além de sites, desenvolvemos e mantemos dois sistemas de gestão prontos para o seu negócio — com
              suporte da CriaTech incluso.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          <HighlightCard
            label="Sistema nº 1 — disponível"
            title="BarberPro:"
            highlight="Sua barbearia no controle"
            desc="O sistema de agendamento pensado para barbearias e salões modernos. Menos faltas, mais cadeiras ocupadas, mais faturamento."
            features={BARBERPRO_FEATURES}
            ctaLabel="Quero o BarberPro"
            ctaMessage="Olá, quero conhecer o BarberPro"
            liveUrl="https://barberpro-6yix.onrender.com/"
          />
          <HighlightCard
            label="Sistema nº 2 — grande lançamento"
            title="CriaOficina:"
            highlight="Gestão total do seu negócio"
            desc={
              <>
                Criado para oficinas mecânicas, mas pronto para{' '}
                <strong className="text-white">clínicas, salões, lojas e outros comércios</strong> que precisam de
                controle completo em um único painel.
              </>
            }
            features={CRIAOFICINA_FEATURES}
            ctaLabel="Solicitar Demonstração"
            ctaMessage="Olá, quero saber mais sobre o CriaOficina"
            liveUrl="https://www.criaoficina.online"
            reverse
          />
        </div>
      </div>
    </section>
  );
}
