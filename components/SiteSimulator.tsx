'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Globe, Upload, X } from 'lucide-react';
import Reveal from './Reveal';
import { waLink } from '@/lib/data';

function slugify(name: string) {
  const clean = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '');
  return clean || 'suaempresa';
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.03 } },
};

const block = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

const COLOR_OPTIONS = [
  { name: 'Azul', value: '#0044ff' },
  { name: 'Ciano', value: '#0ea5e9' },
  { name: 'Verde', value: '#16a34a' },
  { name: 'Roxo', value: '#7c3aed' },
  { name: 'Laranja', value: '#f97316' },
  { name: 'Rosa', value: '#ec4899' },
  { name: 'Grafite', value: '#334155' },
];

export default function SiteSimulator() {
  const [raw, setRaw] = useState('');
  const [debounced, setDebounced] = useState('');
  const [accent, setAccent] = useState(COLOR_OPTIONS[0].value);
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(raw.trim()), 450);
    return () => clearTimeout(t);
  }, [raw]);

  const displayName = debounced || 'Sua Empresa';
  const slug = slugify(debounced);
  const initials = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('') || 'SE';

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[380px] w-[380px] animate-blob-3 rounded-full bg-[conic-gradient(from_140deg,rgba(0,68,255,0.10),transparent,rgba(61,123,255,0.10))] blur-3xl"
      />

      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">Teste na hora</div>
          <h2 className="mb-4 font-sans text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Veja o seu site em <span className="gradient-text reveal-underline">10 segundos</span>
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-brand-muted">
            Digite o nome do seu negócio e veja, ao vivo, como fica o topo do seu novo site.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mb-6 max-w-md">
            <input
              type="text"
              value={raw}
              onChange={(e) => setRaw(e.target.value)}
              placeholder="Nome da sua empresa"
              maxLength={40}
              data-cursor-hover
              className="w-full rounded-xl border-2 border-brand-border bg-white px-5 py-3.5 text-center text-base font-semibold text-brand-ink outline-none transition-colors focus:border-brand-blue"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Cor do site:</span>
              <div className="flex items-center gap-2">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    aria-label={c.name}
                    data-cursor-hover
                    onClick={() => setAccent(c.value)}
                    style={{ backgroundColor: c.value }}
                    className={`h-7 w-7 rounded-full transition-all ${
                      accent === c.value
                        ? 'scale-110 ring-2 ring-offset-2 ring-brand-ink'
                        : 'hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Sua logo:</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
              {logo ? (
                <div className="relative">
                  <img
                    src={logo}
                    alt="Logo enviada"
                    className="h-9 w-9 rounded-full border border-brand-border object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Remover logo"
                    data-cursor-hover
                    onClick={() => setLogo(null)}
                    className="absolute -right-1.5 -top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-ink text-white"
                  >
                    <X size={10} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  data-cursor-hover
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 rounded-full border border-dashed border-brand-border px-3 py-1.5 text-xs font-semibold text-brand-muted transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  <Upload size={12} /> Adicionar
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-brand-border bg-white shadow-softLg">
            {/* barra do navegador */}
            <div className="flex items-center gap-2 border-b border-brand-border bg-brand-surfaceAlt px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[0.7rem] text-brand-muted">
                <Globe size={11} />
                {slug}.com.br
              </span>
            </div>

            {/* mini hero "montando" */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${debounced}-${accent}-${logo ?? 'nologo'}`}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                className="bg-brand-navdark px-6 py-10 sm:px-10 sm:py-14"
              >
                <motion.div
                  variants={block}
                  className="mx-auto mb-8 flex max-w-sm items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <div className="flex items-center gap-2">
                    {logo ? (
                      <img src={logo} alt="Logo" className="h-6 w-6 rounded-full object-cover" />
                    ) : (
                      <span
                        style={{ backgroundColor: accent }}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-[0.6rem] font-extrabold text-white"
                      >
                        {initials}
                      </span>
                    )}
                    <span className="text-xs font-bold text-white">{displayName}</span>
                  </div>
                  <div className="hidden items-center gap-3 text-[0.65rem] text-white/50 sm:flex">
                    <span>Início</span>
                    <span>Serviços</span>
                    <span>Contato</span>
                  </div>
                </motion.div>

                <motion.div
                  variants={block}
                  style={{ borderColor: `${accent}33`, backgroundColor: `${accent}1a`, color: accent }}
                  className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] font-semibold"
                >
                  <span
                    style={{ backgroundColor: accent }}
                    className="h-1.5 w-1.5 animate-pulse-dot rounded-full"
                  />
                  ATENDIMENTO ONLINE
                </motion.div>
                <motion.h3
                  variants={block}
                  className="mb-2 text-center font-sans text-xl font-extrabold leading-tight text-white sm:text-2xl"
                >
                  {displayName} <span style={{ color: accent }}>— Site que gera clientes de verdade.</span>
                </motion.h3>
                <motion.p variants={block} className="mx-auto mb-6 max-w-sm text-center text-xs text-white/50 sm:text-sm">
                  Atendimento rápido, presença profissional e uma vitrine que trabalha por você 24 horas por dia.
                </motion.p>
                <motion.div variants={block} className="flex justify-center">
                  <span
                    style={{ backgroundColor: accent }}
                    className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold text-white sm:text-sm"
                  >
                    Fale conosco <ArrowRight size={13} />
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={waLink(
              `Olá! Testei o simulador e curti a ideia de um site pra "${displayName}". Quero saber como fica de verdade.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-glowBlue transition-all hover:bg-brand-blueDark hover:-translate-y-0.5"
          >
            Quero um site assim {debounced && `pra ${displayName}`} <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
