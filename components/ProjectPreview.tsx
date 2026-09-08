'use client';

/**
 * Mockups vetoriais (CSS/SVG) inspirados no visual real de cada site/sistema,
 * usados quando não há uma captura de tela do projeto disponível.
 */
export default function ProjectPreview({ id, className = '' }: { id: string; className?: string }) {
  const common = `relative h-full w-full overflow-hidden ${className}`;

  switch (id) {
    case 'cmreguladora':
      return (
        <div className={`${common} bg-[#141414]`}>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#141414_45%,#7a0d0d_100%)]" />
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded bg-[#c81e2c] px-2 py-1 text-[9px] font-black italic text-white">
            CM
          </div>
          <div className="absolute inset-x-4 top-12 flex flex-col gap-1.5">
            <div className="h-2.5 w-[85%] rounded-sm bg-white/90" />
            <div className="h-2.5 w-[70%] rounded-sm bg-white/90" />
            <div className="h-2.5 w-[60%] rounded-sm bg-[#e0313f]" />
          </div>
          <div className="absolute bottom-4 left-4 rounded bg-[#c81e2c] px-3 py-1.5 text-[9px] font-bold text-white">
            SOLICITAR ATENDIMENTO
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#c81e2c]/30 blur-xl" />
        </div>
      );

    case 'segbrasil':
      return (
        <div className={`${common} bg-[linear-gradient(160deg,#1414a8,#0a0a5c)]`}>
          <div className="absolute inset-x-4 top-6 flex flex-col gap-1.5">
            <div className="h-2 w-[55%] rounded-sm bg-white/85" />
            <div className="w-[80%] rounded bg-[#f5d80a] px-1.5 py-1">
              <div className="h-2 w-[90%] rounded-sm bg-[#1414a8]" />
            </div>
            <div className="h-2 w-[70%] rounded-sm bg-white/85" />
          </div>
          <div className="absolute bottom-4 left-4 rounded-full bg-[#f5d80a] px-3 py-1.5 text-[9px] font-black text-[#1414a8]">
            FAÇA SUA COTAÇÃO
          </div>
          <div className="absolute -right-4 bottom-0 flex h-20 w-20 items-end justify-center text-4xl">🚚</div>
        </div>
      );

    case 'visionfleet':
      return (
        <div className={`${common} bg-white`}>
          <div className="absolute inset-x-4 top-5 flex flex-col gap-1.5">
            <div className="h-2.5 w-[60%] rounded-sm bg-[#0a0a2e]" />
            <div className="h-2.5 w-[45%] rounded-sm bg-[#0044ff]" />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-[#25d366] px-3 py-1.5 text-[9px] font-bold text-white">
            Falar no WhatsApp
          </div>
          <div className="absolute bottom-3 right-3 top-14 w-[46%] overflow-hidden rounded-lg bg-[linear-gradient(200deg,#1a2a4a,#0a0f1e)]">
            <div className="absolute right-1.5 top-1.5 rounded bg-black/40 px-1 py-0.5 text-[6px] text-emerald-300">
              GPS
            </div>
            <div className="absolute bottom-1.5 left-1.5 h-1 w-[60%] rounded-full bg-white/20" />
          </div>
        </div>
      );

    case 'jdseguranca':
      return (
        <div className={`${common} bg-[#0d1a5c]`}>
          <div className="absolute inset-x-0 top-0 h-6 bg-[#13207a]" />
          <div className="absolute inset-0 top-6 bg-[linear-gradient(160deg,#3a1a5c,#0d0a2e)]" />
          <div className="absolute inset-x-6 top-12 flex flex-col items-center gap-1.5 text-center">
            <div className="h-2 w-[70%] rounded-sm bg-white/90" />
            <div className="h-2 w-[50%] rounded-sm bg-white/90" />
          </div>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            <div className="rounded bg-[#22c55e] px-2.5 py-1 text-[8px] font-bold text-white">Orçamento</div>
            <div className="rounded border border-white/70 px-2.5 py-1 text-[8px] font-bold text-white">Serviços</div>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-4 text-[8px] font-bold text-amber-400">
            <span>500+</span>
            <span>62</span>
          </div>
        </div>
      );

    case 'marciliosegur':
      return (
        <div className={`${common} bg-[#0a1230]`}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '14px 14px',
            }}
          />
          <div className="absolute left-4 top-4 rounded-full bg-white/10 px-2 py-0.5 text-[7px] font-bold text-amber-400">
            PROTEÇÃO 24H
          </div>
          <div className="absolute inset-x-4 top-11 flex flex-col gap-1.5">
            <div className="h-2.5 w-[55%] rounded-sm bg-white" />
            <div className="h-2.5 w-[65%] rounded-sm bg-amber-400" />
          </div>
          <div className="absolute bottom-4 left-4 rounded bg-amber-400 px-3 py-1.5 text-[9px] font-black text-[#0a1230]">
            Falar no WhatsApp
          </div>
          <div className="absolute -right-3 bottom-3 top-10 w-[34%] rounded-lg border border-white/10 bg-white/5" />
        </div>
      );

    case 'michelrep':
      return (
        <div className={`${common} bg-white`}>
          <div className="absolute inset-x-4 top-5 text-[7px] font-bold uppercase tracking-wide text-orange-500">
            Michel Representações
          </div>
          <div className="absolute inset-x-4 top-9 flex flex-col gap-1.5">
            <div className="h-2.5 w-[75%] rounded-sm bg-[#141414]" />
            <div className="h-2.5 w-[60%] rounded-sm bg-orange-500" />
          </div>
          <div className="absolute bottom-4 left-4 rounded bg-orange-500 px-3 py-1.5 text-[9px] font-bold text-white">
            Fale Conosco
          </div>
          <div className="absolute bottom-3 right-3 top-16 w-[38%] rounded-lg bg-[linear-gradient(160deg,#f7d9b8,#f0b088)]" />
        </div>
      );

    case 'criaoficina':
      return (
        <div className={`${common} bg-[linear-gradient(160deg,#0a0f2a,#131a3a)]`}>
          <div className="absolute inset-x-4 top-4 flex items-center justify-between">
            <div className="h-2 w-[35%] rounded-sm bg-white/20" />
            <span className="text-lg">🛠️</span>
          </div>
          <div className="absolute inset-x-4 top-11 grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="h-6 rounded bg-brand-blue/15" />
            ))}
          </div>
          <div className="absolute inset-x-4 bottom-4 h-8 rounded-lg border border-brand-cyan/20 bg-gradient-to-t from-brand-cyan/15 to-transparent" />
        </div>
      );

    case 'finpilot':
      return (
        <div className={`${common} bg-[linear-gradient(160deg,#0a0f2a,#131a3a)]`}>
          <div className="absolute inset-x-4 top-4 flex items-center gap-2">
            <span className="text-lg">🤖</span>
            <div className="h-2 w-[30%] rounded-sm bg-white/20" />
          </div>
          <div className="absolute inset-x-4 bottom-4 top-10 rounded-lg border border-brand-blue/15 bg-white/[0.03] p-2">
            <div className="mb-1.5 h-1.5 w-[45%] rounded-sm bg-brand-cyan/40" />
            <div className="flex h-[calc(100%-14px)] items-end gap-1">
              {[40, 70, 55, 90, 65, 80].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-blue to-brand-cyan" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      );

    case 'midia-basico':
    case 'midia-plus': {
      const plus = id === 'midia-plus';
      return (
        <div className={`${common} bg-[linear-gradient(160deg,#0a0f2a,#131a3a)]`}>
          <div className="absolute inset-x-4 top-4 flex items-center gap-2">
            <span className="text-lg">{plus ? '📸' : '📱'}</span>
            <div className="h-2 w-[35%] rounded-sm bg-white/20" />
          </div>
          <div className="absolute inset-x-4 bottom-4 top-10 grid grid-cols-3 gap-1.5">
            {Array.from({ length: plus ? 6 : 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded bg-gradient-to-br from-brand-blue/25 to-brand-cyan/15"
                style={{ aspectRatio: '1 / 1' }}
              />
            ))}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
