import Image from 'next/image';
import { FOOTER_LINKS } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-navdark px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="relative h-7 w-7 overflow-hidden rounded-full">
            <Image src="/images/logo.png" alt="CriaTech" fill sizes="28px" className="object-cover" />
          </span>
          <span className="font-sans text-base font-extrabold tracking-wide text-white">
            CRIA<span className="text-brand-cyan">TECH</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/criatech.web/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/55 transition-colors hover:text-white"
          >
            Instagram
          </a>
        </nav>

        <p className="text-sm text-white/45">
          © {year} CriaTech — Vitor Guilherme & Lucas Moreira · (81) 99674-4143 · (81) 8736-4575
        </p>
      </div>
    </footer>
  );
}
