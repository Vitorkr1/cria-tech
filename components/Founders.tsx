'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { TEAM } from '@/lib/data';

export default function Founders() {
  return (
    <section id="fundadores" className="px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">Quem somos</div>
            <h2 className="font-sans text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Fundadores da <span className="gradient-text">Criatech</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TEAM.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.1} className="h-full">
              <TiltCard
                strength={5}
                className="shadow-under flex h-full flex-col items-center gap-6 rounded-[24px] border border-brand-border bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-start sm:text-left"
              >
                <div className="relative h-[90px] w-[90px] shrink-0">
                  <div className="absolute -inset-[3px] animate-spin-ring rounded-full bg-[conic-gradient(#0044ff,#3d7bff,#0044ff)]" />
                  <div className="absolute inset-[3px] z-[1] flex items-center justify-center rounded-full bg-brand-surfaceAlt font-sans text-xl font-extrabold text-brand-blue">
                    {member.initials}
                  </div>
                  <div className="absolute inset-[3px] z-[2] overflow-hidden rounded-full">
                    <Image src={member.photo} alt={member.name} fill sizes="90px" className="object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xl font-extrabold text-brand-ink">{member.name}</h3>
                  <div className="mb-3 text-sm font-semibold tracking-wide text-brand-blue">{member.role}</div>
                  <p className="mb-4 text-sm leading-relaxed text-brand-muted">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
