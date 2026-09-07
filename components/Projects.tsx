'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import ProjectModal from './ProjectModal';
import ProjectPreview from './ProjectPreview';
import { PROJECT_FILTERS, PROJECTS, type Project, type ProjectCategory } from '@/lib/data';

function ProjectCard({
  project,
  index,
  onOpen,
  className = '',
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
  className?: string;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.35, delay: Math.min(index * 0.04, 0.24), ease: [0.16, 1, 0.3, 1] },
      }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } }}
      className={className}
    >
      <TiltCard
        strength={7}
        className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-soft transition-shadow hover:shadow-softLg"
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
            <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
              <ProjectPreview id={project.id} />
            </div>
          )}
          <div className="absolute inset-0 flex flex-col items-start justify-end gap-3 bg-gradient-to-t from-black/85 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-brand-blue px-2.5 py-1 text-xs font-semibold text-white">
              {!project.isNew ? project.tag : project.categoryLabel}
            </span>
            <button
              type="button"
              data-cursor-hover
              onClick={() => onOpen(project)}
              className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-ink opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand-blue hover:text-white"
            >
              Ver projeto <ArrowRight size={14} />
            </button>
          </div>
        </div>
        <div className="flex items-start justify-between gap-2 p-5">
          <div>
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
          {project.price && (
            <span className="shrink-0 whitespace-nowrap font-sans text-sm font-extrabold text-brand-blue">
              {project.price}
            </span>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'todos' | ProjectCategory>('todos');
  const [active, setActive] = useState<Project | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  function scrollCarousel(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('[data-card]')?.clientWidth ?? 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' });
  }

  return (
    <section id="projetos" className="relative overflow-hidden bg-brand-surfaceAlt2 px-4 py-24 sm:px-8">
      {/* fundo decorativo com profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] animate-blob-1 rounded-full bg-[conic-gradient(from_90deg,rgba(0,68,255,0.16),rgba(61,123,255,0.05),rgba(0,68,255,0.16))] blur-3xl [transform:perspective(600px)_rotateX(55deg)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] animate-blob-2 rounded-full bg-[conic-gradient(from_200deg,rgba(61,123,255,0.14),transparent,rgba(0,68,255,0.14))] blur-3xl [transform:perspective(600px)_rotateX(55deg)]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">Nosso trabalho</div>
          <h2 className="mb-4 font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">Projetos realizados</h2>
          <p className="mb-10 max-w-xl text-brand-muted leading-relaxed">
            Projetos reais, entregues e em produção. Clique em &quot;Ver projeto&quot; para conhecer os detalhes de
            cada um.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:gap-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                data-cursor-hover
                onClick={() => setFilter(f.value)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all sm:px-5 sm:py-2.5 ${
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

        {filter === 'todos' ? (
          <div className="relative">
            <button
              type="button"
              data-cursor-hover
              aria-label="Anterior"
              onClick={() => scrollCarousel(-1)}
              className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white text-brand-ink shadow-soft transition-all hover:border-brand-blue hover:text-brand-blue sm:-left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              data-cursor-hover
              aria-label="Próximo"
              onClick={() => scrollCarousel(1)}
              className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white text-brand-ink shadow-soft transition-all hover:border-brand-blue hover:text-brand-blue sm:-right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={20} />
            </button>

            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filtered.map((project, i) => (
                <div key={project.id} data-card className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
                  <ProjectCard project={project} index={i} onOpen={setActive} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onOpen={setActive} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filtered.length === 0 && (
          <p className="py-10 text-center text-brand-muted">Nenhum projeto encontrado nessa categoria.</p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
