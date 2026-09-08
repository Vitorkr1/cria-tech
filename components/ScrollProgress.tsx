'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[10000] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_10px_rgba(0,145,201,0.6)] transition-[width] duration-100 ease-linear"
      style={{ width: `${pct}%` }}
    />
  );
}
