'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV_LINKS, waLink } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [curtain, setCurtain] = useState(false);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0]?.href ?? '');
  const [shatter, setShatter] = useState(false);

  function handleMobileLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const isHomeAnchor = href.startsWith('/#');
    if (!isHomeAnchor || window.location.pathname !== '/') {
      setOpen(false);
      return;
    }
    e.preventDefault();
    setOpen(false);
    setActiveHref(href);

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
    if (window.location.pathname !== '/') return;
    const ids = NAV_LINKS.filter((l) => l.href.startsWith('/#')).map((l) => l.href.slice(2));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveHref(`/#${visible.target.id}`);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Easter egg: se o usuário fica parado, a logo se desmonta em partículas e remonta
  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;
    let shatterTimer: ReturnType<typeof setTimeout>;

    const scheduleIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setShatter(true);
        shatterTimer = setTimeout(() => {
          setShatter(false);
          scheduleIdle();
        }, 1600);
      }, 9000);
    };

    const onActivity = () => {
      if (shatter) return;
      scheduleIdle();
    };

    scheduleIdle();
    const events: (keyof WindowEventMap)[] = ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    events.forEach((ev) => window.addEventListener(ev, onActivity, { passive: true }));

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(shatterTimer);
      events.forEach((ev) => window.removeEventListener(ev, onActivity));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const particles = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2 + (i % 2 === 0 ? 0.2 : -0.15);
    const distance = 22 + (i % 3) * 10;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: 3 + (i % 3) * 1.5,
      delay: (i % 5) * 0.02,
    };
  });

  return (
    <header className={`fixed top-5 sm:top-7 left-0 right-0 px-3 sm:px-6 ${open ? 'z-[600]' : 'z-[100]'}`}>
      <div
        className={`max-w-[900px] mx-auto flex items-center justify-between h-[60px] px-4 sm:px-6 rounded-full border border-white/10 bg-[#131313] backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' : 'shadow-[0_4px_20px_-10px_rgba(0,0,0,0.4)]'
        }`}
      >
        <a href="/#inicio" className="flex items-center gap-3" data-cursor-hover>
          <span className="relative w-9 h-9 shrink-0">
            <motion.span
              animate={
                shatter
                  ? { opacity: 0, scale: 0.4, filter: 'blur(3px)' }
                  : { opacity: 1, scale: 1, filter: 'blur(0px)' }
              }
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-full overflow-hidden"
            >
              <Image src="/images/logo.png" alt="CriaTech" fill sizes="36px" className="object-cover" />
            </motion.span>

            <AnimatePresence>
              {shatter &&
                particles.map((p) => (
                  <motion.span
                    key={p.id}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 1 }}
                    animate={{
                      x: [0, p.x, 0],
                      y: [0, p.y, 0],
                      opacity: [0, 1, 0],
                      scale: [1, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.4,
                      delay: p.delay,
                      ease: [0.16, 1, 0.3, 1],
                      times: [0, 0.55, 1],
                    }}
                    style={{ width: p.size, height: p.size, left: '50%', top: '50%' }}
                    className="absolute -ml-[2px] -mt-[2px] rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue"
                  />
                ))}
            </AnimatePresence>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-tight text-white text-[1.05rem]">
              cria<span className="text-brand-cyan">tech</span>
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                onClick={() => setActiveHref(link.href)}
                className={`text-sm transition-colors relative group ${
                  isActive ? 'text-white' : 'text-white hover:text-brand-cyan'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-brand-blue origin-left transition-transform ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
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
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed left-0 right-0 top-[90px] sm:top-[96px] z-[99] px-3 sm:px-6"
          >
            <div className="max-w-[1200px] mx-auto rounded-3xl border border-white/10 bg-brand-navdark/95 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] p-3 flex flex-col gap-1.5">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeHref === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={
                      isActive
                        ? 'w-full text-center rounded-full px-6 py-3.5 font-semibold text-white border-b-2 border-brand-blue'
                        : 'w-full text-center rounded-full px-6 py-3.5 text-white hover:bg-white/5 transition-colors border-b-2 border-transparent'
                    }
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                href={waLink('Olá, quero um orçamento com a CriaTech')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + NAV_LINKS.length * 0.05, duration: 0.35 }}
                className="w-full text-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Fale conosco
              </motion.a>
            </div>
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
              <span className="h-12 w-12 animate-spin-ring rounded-full bg-[conic-gradient(#0044ff,#3d7bff,#0044ff)] p-[3px]">
                <span className="block h-full w-full rounded-full bg-brand-navdark" />
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
