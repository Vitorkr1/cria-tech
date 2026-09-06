'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { X, Bot } from 'lucide-react';
import type { Project } from '@/lib/data';
import { waLink } from '@/lib/data';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-0 sm:p-8"
        >
          <div
            className="absolute inset-0 bg-[rgba(10,14,25,0.55)] backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-10 h-full w-full max-w-[900px] overflow-y-auto rounded-none border border-brand-border bg-white shadow-softLg sm:h-auto sm:max-h-[88vh] sm:rounded-[20px]"
          >
            <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-brand-border bg-brand-surfaceAlt/95 px-5 py-4 backdrop-blur-md">
              <div className="flex shrink-0 gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="flex-1 truncate text-center font-sans text-base font-extrabold tracking-wide text-brand-ink"
              >
                {project.title}
              </motion.div>
              <button
                type="button"
                aria-label="Fechar janela do projeto"
                data-cursor-hover
                onClick={onClose}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-surfaceAlt text-brand-ink transition-all hover:rotate-90 hover:border-red-300 hover:bg-red-50 hover:text-red-500"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative min-h-[220px] overflow-hidden bg-brand-surfaceAlt2 sm:min-h-[280px]"
              >
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill sizes="450px" className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-brand-surfaceAlt to-brand-surfaceAlt2 p-8 text-center text-brand-muted">
                    <Bot size={44} className="text-brand-cyan drop-shadow-[0_0_16px_rgba(0,145,201,0.4)]" />
                    <span className="text-sm">Acesse o sistema completo ao vivo pelo botão abaixo</span>
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-brand-blue px-3 py-1 text-xs font-bold text-white shadow-glowBlue">
                  {project.categoryLabel}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex flex-col gap-4 p-6 sm:p-8"
              >
                <h3 className="font-sans text-2xl font-extrabold text-brand-ink">{project.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-cyan/25 bg-brand-cyan/[0.08] px-3 py-1 text-xs font-semibold text-brand-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="inline-flex items-center gap-2 rounded-xl border border-brand-border px-6 py-3 font-medium text-brand-ink transition-all hover:border-brand-ink/30 hover:bg-brand-surfaceAlt"
                    >
                      Ver sistema ao vivo ↗
                    </a>
                  )}
                  <a
                    href={waLink(
                      `Olá! Vi o projeto ${project.title} no portfólio da CriaTech e quero um orçamento de um projeto parecido.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="btn-shine inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 font-semibold text-white shadow-glowBlue transition-transform hover:-translate-y-0.5"
                  >
                    Solicitar Orçamento →
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-border px-6 py-3 font-medium text-brand-ink transition-all hover:bg-brand-surfaceAlt"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
