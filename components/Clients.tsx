'use client';

import Reveal from './Reveal';
import { CLIENTS } from '@/lib/data';

export default function Clients() {
  return (
    <section id="clientes" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Quem confia na CriaTech
            </div>
            <h2 className="mb-4 font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Empresas que já <span className="gradient-text">transformamos</span>
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Temos vínculo direto com empresas em todo o Brasil — desenvolvemos e mantemos os sites e sistemas
              abaixo.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="shadow-under block h-full rounded-2xl border border-brand-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:bg-brand-cyan/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue/20 bg-brand-blue/10 text-xl">
                  {c.icon}
                </div>
                <h4 className="mb-1.5 font-sans font-bold text-brand-ink">{c.name}</h4>
                <p className="mb-4 text-sm leading-relaxed text-brand-muted">{c.desc}</p>
                <span className="inline-flex items-center gap-1 break-words text-sm font-semibold text-brand-cyan">
                  {c.url.replace('https://www.', '')} <span>→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
