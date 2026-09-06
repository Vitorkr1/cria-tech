'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowRight, Bot } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import { PROJECT_FILTERS, PROJECTS, type Project, type ProjectCategory } from '@/lib/data';

export default function Projects() {
  const [filter, setFilter] = useState<'todos' | ProjectCategory>('todos');
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projetos" className="bg-brand-surfaceAlt2 px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">Nosso trabalho</div>
          <h2 className="mb-4 font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">Projetos realizados</h2>
          <p className="mb-10 max-w-xl text-brand-muted leading-relaxed">
            Projetos reais, entregues e em produção. Clique em &quot;Ver projeto&quot; para conhecer os detalhes de
            cada um.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-3">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                data-cursor-hover
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  filter === f.value
                    ? '-translate-y-0.5 border-brand-blue bg-brand-blue text-white shadow-glowBlue'
                    : 'border-brand-border bg-white text-brand-muted hover:-translate-y-0.5 hover:border-brand-blue/40 hover:text-brand-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-softLg"
              >
                {project.isNew && (
                  <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-3 py-1.5 text-xs font-semibold text-white shadow-glowBlue">
                    {project.tag}
                  </span>
                )}
                <div className="relative h-[200px] overflow-hidden bg-brand-surfaceAlt2">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a0f2a] via-[#131a3a] to-[#0a0f20]">
                      <Bot size={40} className="text-brand-cyan/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col items-start justify-end gap-3 bg-gradient-to-t from-black/85 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-brand-blue px-2.5 py-1 text-xs font-semibold text-white">
                      {!project.isNew ? project.tag : project.categoryLabel}
                    </span>
                    <button
                      type="button"
                      data-cursor-hover
                      onClick={() => setActive(project)}
                      className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-ink opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand-blue hover:text-white"
                    >
                      Ver projeto <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="mb-1 flex items-center gap-2 font-semibold text-brand-ink">
                    {project.title}
                    {project.isNew && (
                      <span className="rounded-full border border-brand-cyan/50 px-2 py-0.5 text-[0.6rem] font-bold tracking-wide text-brand-cyan">
                        NOVO
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-brand-muted">{project.categoryLabel}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-10 text-center text-brand-muted">Nenhum projeto encontrado nessa categoria.</p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
