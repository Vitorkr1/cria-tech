'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(circle,rgba(0,73,255,0.10)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(11,14,23,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(11,14,23,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[880px] mx-auto text-center">
        {/* NOVIDADE strip */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 mx-auto inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-brand-cyan/30 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/5 px-3 py-2 shadow-soft"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-bold tracking-wide text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse-dot" />
            NOVIDADE
          </span>
          <span className="text-sm text-brand-ink/80">
            <strong className="text-brand-blue">BarberPro</strong> para barbearias e{' '}
            <strong className="text-brand-blue">CriaOficina</strong> para oficinas, clínicas e lojas.
          </span>
          <a href="/#sistemas" data-cursor-hover className="inline-flex items-center gap-1 rounded-full bg-brand-blue px-4 py-1.5 text-sm font-bold text-white">
            Conhecer <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 text-sm text-brand-cyan mb-6"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse-dot" />
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-sans font-extrabold text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[1.08] text-brand-ink mb-5"
        >
          O futuro da sua empresa <span className="gradient-text reveal-underline">começa aqui.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8"
        >
          Sistemas de gestão inteligentes, sites de alta conversão e automações que transformam seu negócio em uma
          máquina de lucro.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
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
            className="shadow-under inline-flex items-center gap-2 rounded-xl border border-brand-border px-7 py-3.5 font-medium text-brand-ink transition-all hover:border-brand-ink/30 hover:bg-brand-surfaceAlt"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-2xl border border-brand-border bg-white px-6 py-6 sm:px-10 shadow-soft"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="text-center">
                <div className="font-sans text-2xl sm:text-[2rem] font-extrabold text-brand-ink">
                  {s.prefix}
                  <Counter to={s.value} />
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-brand-muted">{s.label}</div>
              </div>
              {i < STATS.length - 1 && <div className="hidden sm:block h-10 w-px bg-brand-border" />}
            </div>
          ))}
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 rounded-2xl border border-brand-cyan/20 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 p-5 sm:p-6 text-left shadow-soft"
        >
          <span className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-brand-cyan/30">
            <Image src="/images/barberpro.jpg" alt="BarberPro" fill sizes="80px" className="object-cover" />
          </span>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-sans text-lg font-extrabold text-brand-ink">BarberPro</h3>
            <p className="text-sm text-brand-muted">O sistema de agendamentos líder para barbearias modernas</p>
          </div>
          <a
            href={waLink('Olá, gostaria de gerenciar minha barbearia com o Barber Pro')}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="btn-shine w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 font-semibold text-white shadow-glowBlue transition-transform hover:-translate-y-0.5"
          >
            Gerenciar minha barbearia <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
