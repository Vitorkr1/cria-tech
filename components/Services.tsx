'use client';

import { ArrowRight, Code2, PenTool, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { SERVICES } from '@/lib/data';

const ICONS = [Code2, Sparkles, PenTool];

export default function Services() {
  return (
    <section id="servicos" className="bg-brand-surfaceAlt px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">O que fazemos</div>
            <h2 className="mb-4 font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Soluções completas para <span className="gradient-text">seu negócio digital</span>
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Da estratégia ao código — entregamos soluções que convertem visitantes em clientes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <TiltCard
                  strength={6}
                  className={`shadow-under relative flex h-full flex-col overflow-hidden rounded-[20px] border p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 ${
                    s.featured
                      ? 'border-brand-blue/40 bg-brand-blue/[0.05]'
                      : 'border-brand-border bg-white'
                  }`}
                >
                  {s.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-white">
                      Mais popular
                    </span>
                  )}
                  <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-blue/10">
                    <Icon size={24} className="text-brand-blue" />
                  </div>
                  <h3 className="mb-3 font-sans text-xl font-bold text-brand-ink">{s.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-brand-muted">{s.desc}</p>
                  <ul className="mb-6 flex-1">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 border-b border-black/5 py-2 text-sm text-brand-muted last:border-none"
                      >
                        <span className="text-brand-blue">→</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contato"
                    data-cursor-hover
                    className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-all hover:gap-2"
                  >
                    Solicitar <ArrowRight size={14} />
                  </a>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
