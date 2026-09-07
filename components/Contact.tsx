'use client';

import { Instagram, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import Reveal from './Reveal';
import { waLink } from '@/lib/data';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    label: 'WhatsApp',
    value: '(81) 99674-4143',
    href: waLink('Olá, quero um orçamento com a CriaTech'),
    icon: <WhatsAppIcon />,
    iconBg: 'bg-[#25d366]/15 text-[#25d366]',
  },
  {
    label: 'Instagram',
    value: '@criatech.web',
    href: 'https://www.instagram.com/criatech.web/',
    icon: <Instagram size={20} />,
    iconBg: 'bg-[#e1306c]/15 text-[#e1306c]',
  },
];

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    if (!name || !email || !message) return;

    const text = `Olá! Sou ${name} (${email}).${service ? `\nServiço de interesse: ${service}` : ''}\n\n${message}`;
    window.open(waLink(text), '_blank');
    setStatus('✓ Redirecionando para o WhatsApp...');
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-brand-surfaceAlt px-4 py-24 sm:px-8">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,73,255,0.10)_0%,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">Fale conosco</div>
          <h2 className="mb-4 font-sans text-3xl font-extrabold leading-tight text-brand-ink sm:text-[2.4rem]">
            Pronto para <span className="gradient-text">transformar</span> seu negócio?
          </h2>
          <p className="mb-8 text-brand-muted leading-relaxed">
            Entre em contato com a gente e solicite seu orçamento sem compromisso.
          </p>

          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-cursor-hover
                className="flex items-center gap-4 rounded-[14px] border border-brand-border bg-white p-4 shadow-soft transition-all hover:translate-x-1.5 hover:border-brand-blue/40 hover:bg-brand-blue/[0.04]"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${link.iconBg}`}>
                  {link.icon}
                </span>
                <span>
                  <span className="block text-xs text-brand-muted">{link.label}</span>
                  <span className="block text-sm font-semibold text-brand-ink">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-brand-border bg-white p-8 shadow-soft sm:p-10"
          >
            <h3 className="mb-6 font-sans text-xl font-bold text-brand-ink">Envie uma mensagem</h3>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-brand-muted">Nome</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-lg border border-brand-border bg-brand-surfaceAlt px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/5"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-brand-muted">E-mail</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-brand-border bg-brand-surfaceAlt px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/5"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-1.5">
              <label className="text-sm text-brand-muted">Serviço de interesse</label>
              <select
                name="service"
                defaultValue=""
                className="w-full rounded-lg border border-brand-border bg-brand-surfaceAlt px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/5"
              >
                <option value="">Selecione...</option>
                <option>Site Profissional</option>
                <option>Sistema/Dashboard</option>
                <option>Design & Brand</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="mb-5 flex flex-col gap-1.5">
              <label className="text-sm text-brand-muted">Mensagem</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Conte sobre seu projeto..."
                className="w-full resize-y rounded-lg border border-brand-border bg-brand-surfaceAlt px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/5"
              />
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white shadow-glowBlue transition-all hover:-translate-y-0.5"
            >
              Enviar pelo WhatsApp <Send size={16} />
            </button>
            {status && <p className="mt-3 text-center text-sm text-emerald-500">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
