'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { STATS, waLink } from '@/lib/data';
import Counter from './Counter';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-8 overflow-hidden">
      {/* glow de fundo */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(circle,rgba(0,68,255,0.10)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[880px] mx-auto text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-sans font-bold text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[1.04] text-brand-ink mb-3"
        >
          O futuro da sua empresa <span className="gradient-text reveal-underline">começa aqui.</span>
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-brand-muted text-base sm:text-lg font-semibold leading-snug max-w-xl mx-auto mb-6"
        >
          Sistemas de gestão inteligentes, sites de alta conversão e automações que transformam seu negócio em uma
          máquina de lucro.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href={waLink('Olá, quero um orçamento com a CriaTech')}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="btn-shine shadow-under inline-flex items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-glowBlue transition-all hover:bg-brand-blueDark hover:-translate-y-0.5"
          >
            Solicitar orçamento <ArrowRight size={16} />
          </a>
          <a
            href="/#projetos"
            data-cursor-hover
            className="shadow-under inline-flex items-center gap-2 rounded-xl border-2 border-brand-blue px-7 py-3 font-semibold text-brand-blue transition-all hover:bg-brand-blue/5"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-2xl bg-brand-surfaceAlt2 px-6 py-6 sm:px-10 shadow-soft"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="text-center">
                <div className="font-sans text-2xl sm:text-[2rem] font-extrabold text-brand-blue">
                  {s.prefix}
                  <Counter to={s.value} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-brand-ink">{s.label}</div>
              </div>
              {i < STATS.length - 1 && <div className="hidden sm:block h-10 w-px bg-black/10" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
