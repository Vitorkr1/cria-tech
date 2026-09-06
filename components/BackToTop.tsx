'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Voltar ao topo"
      data-cursor-hover
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-4 sm:right-6 bottom-[74px] sm:bottom-[92px] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-navdark/90 border border-brand-cyan/30 text-brand-cyan backdrop-blur-md flex items-center justify-center z-[500] transition-all duration-300 hover:bg-brand-blue/20 hover:border-brand-cyan/60 hover:-translate-y-1 ${
        visible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
