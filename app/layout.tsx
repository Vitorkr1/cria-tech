import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ParticlesBackground from '@/components/ParticlesBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import BackToTop from '@/components/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://criatech.online';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'CriaTech — Sites, Sistemas de Gestão & Design Digital',
  description:
    'CriaTech desenvolve sites de alta conversão, sistemas de gestão (BarberPro e CriaOficina) e identidade visual para empresas em todo o Brasil. Orçamento gratuito.',
  keywords: [
    'criação de sites',
    'sistema de agendamento',
    'sistema de gestão',
    'barbearia',
    'oficina',
    'design de sites',
    'CriaTech',
  ],
  authors: [{ name: 'CriaTech' }],
  robots: { index: true, follow: true },
  icons: { icon: '/images/logo-icon.png', apple: '/images/logo-icon.png' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'CriaTech',
    title: 'CriaTech — Sites, Sistemas de Gestão & Design Digital',
    description:
      'Sistemas de gestão inteligentes, sites de alta conversão e automações que transformam seu negócio. Conheça o BarberPro e o CriaOficina.',
    images: ['/images/logo.png'],
    url: SITE_URL,
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CriaTech — Sites, Sistemas de Gestão & Design Digital',
    description: 'Sistemas de gestão inteligentes, sites de alta conversão e automações que transformam seu negócio.',
    images: ['/images/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'CriaTech',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description:
    'Desenvolvimento de sites, sistemas de gestão (BarberPro e CriaOficina) e design digital para empresas em todo o Brasil.',
  areaServed: 'BR',
  founder: [
    { '@type': 'Person', name: 'Vitor Guilherme' },
    { '@type': 'Person', name: 'Lucas Moreira' },
  ],
  sameAs: ['https://www.instagram.com/criatech.web/'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-81-99674-4143',
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-brand-ink overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        <ParticlesBackground />
        {children}
        <FloatingWhatsapp />
        <BackToTop />
      </body>
    </html>
  );
}
