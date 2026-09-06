'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV_LINKS, waLink } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [curtain, setCurtain] = useState(false);

  function handleMobileLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const isHomeAnchor = href.startsWith('/#');
    if (!isHomeAnchor || window.location.pathname !== '/') {
      setOpen(false);
      return;
    }
    e.preventDefault();
    setOpen(false);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const id = href.slice(2);
    if (reduceMotion) {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' }), 300);
      return;
    }

    setCurtain(true);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
      setTimeout(() => setCurtain(false), 100);
    }, 320);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-brand-navdark ${open ? 'z-[600]' : 'z-[100]'}`}>
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between h-[68px] px-4 sm:px-8 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_30px_-14px_rgba(0,0,0,0.6)]' : ''
        }`}
      >
        <a href="/#inicio" className="flex items-center gap-3" data-cursor-hover>
          <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 relative">
            <Image src="/images/logo.png" alt="CriaTech" fill sizes="36px" className="object-cover" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-wide text-white text-[1.15rem]">
              CRIA<span className="text-brand-cyan">TECH</span>
            </span>
            <span className="text-[0.68rem] text-white/55">Sites • Sistemas • Design</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="text-sm text-white/65 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
          <a
            href={waLink('Olá, quero um orçamento com a CriaTech')}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="bg-brand-blue text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-blueDark hover:-translate-y-0.5 transition-all"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          data-cursor-hover
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-[101] flex flex-col gap-[5px] p-1"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-full"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: 'circle(4% at calc(100% - 40px) 40px)', opacity: 0 }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)', opacity: 1 }}
            exit={{ clipPath: 'circle(4% at calc(100% - 40px) 40px)', opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(0,73,255,0.25), transparent 60%), rgb(11,14,23)',
            }}
            className="lg:hidden fixed inset-0 h-[100dvh] z-[99] flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleMobileLinkClick(e, link.href)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={waLink('Olá, quero um orçamento com a CriaTech')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + NAV_LINKS.length * 0.05, duration: 0.5 }}
              className="mt-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg"
            >
              Fale conosco
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {curtain && (
          <>
            <motion.div
              key="curtain-top"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.24, ease: [0.76, 0, 0.24, 1] }}
              className="fixed left-0 right-0 top-0 z-[700] h-1/2 bg-brand-navdark"
            />
            <motion.div
              key="curtain-bottom"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.24, ease: [0.76, 0, 0.24, 1] }}
              className="fixed bottom-0 left-0 right-0 z-[700] h-1/2 bg-brand-navdark"
            />
            <motion.div
              key="curtain-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none fixed inset-0 z-[701] flex items-center justify-center"
            >
              <span className="h-12 w-12 animate-spin-ring rounded-full bg-[conic-gradient(#0049ff,#00b4d8,#0049ff)] p-[3px]">
                <span className="block h-full w-full rounded-full bg-brand-navdark" />
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
