'use client';

import Reveal from './Reveal';
import Counter from './Counter';
import { CLIENT_LOCATIONS } from '@/lib/data';

export default function ClientsMap() {
  const cityCount = new Set(CLIENT_LOCATIONS.map((l) => `${l.city}-${l.state}`)).size;
  const stateCount = new Set(CLIENT_LOCATIONS.map((l) => l.state)).size;

  return (
    <section className="relative overflow-hidden bg-brand-navdark px-4 py-24 sm:px-8">
      {/* glow de fundo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(61,123,255,0.14)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Presença real
            </div>
            <h2 className="mb-4 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Já rodando <span className="text-brand-cyan">de verdade</span>, em vários lugares do Brasil.
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-white/60">
              Cada ponto no mapa é um projeto em produção, atendendo clientes reais — não é mockup, não é ideia. É
              código rodando.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-sans text-3xl font-extrabold text-brand-cyan">
                  <Counter to={cityCount} />
                </div>
                <div className="text-sm text-white/55">Cidades atendidas</div>
              </div>
              <div>
                <div className="font-sans text-3xl font-extrabold text-brand-cyan">
                  <Counter to={stateCount} />
                </div>
                <div className="text-sm text-white/55">Estados alcançados</div>
              </div>
              <div>
                <div className="font-sans text-3xl font-extrabold text-brand-cyan">
                  <Counter to={CLIENT_LOCATIONS.length} />
                </div>
                <div className="text-sm text-white/55">Projetos em produção</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-[500/560] w-full max-w-[440px]">
              <svg viewBox="0 0 500 560" className="h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="brMapGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3d7bff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#3d7bff" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <path
                  d="M140 60 C 190 40, 260 30, 300 55 C 340 75, 370 70, 405 90 C 430 105, 448 115, 455 135 C 460 155, 440 165, 430 190 C 420 220, 415 245, 410 265 C 405 300, 395 320, 380 345 C 368 372, 365 390, 360 405 C 345 435, 330 445, 320 465 C 300 490, 285 495, 270 505 C 250 515, 235 518, 220 515 C 205 508, 195 490, 175 475 C 158 462, 148 450, 140 430 C 128 408, 122 400, 110 380 C 96 355, 92 335, 90 305 C 87 278, 80 255, 70 225 C 62 200, 65 175, 75 150 C 85 128, 88 118, 100 100 C 112 82, 122 72, 140 60 Z"
                  fill="url(#brMapGradient)"
                  stroke="#3d7bff"
                  strokeOpacity="0.45"
                  strokeWidth="2"
                />
              </svg>

              {CLIENT_LOCATIONS.map((loc) => (
                <div
                  key={`${loc.city}-${loc.state}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 animate-pulse-ring rounded-full bg-brand-cyan" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_2px_rgba(61,123,255,0.8)] transition-transform duration-200 group-hover:scale-150" />
                  </span>

                  <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-brand-navdark2 px-2 py-1 text-[0.65rem] font-semibold text-white opacity-0 shadow-soft transition-all duration-150 group-hover:opacity-100">
                    {loc.city}/{loc.state}
                    {loc.isHQ && <span className="ml-1 font-normal text-brand-cyan">· sede</span>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
