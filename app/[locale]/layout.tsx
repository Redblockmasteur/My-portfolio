import type { Metadata } from 'next';
import '../styles/globals.css';
import Image from 'next/image';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import { Link } from '../../i18n/navigation';
import { AnalyticsWrapper } from '../components/analytics';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
    keywords: ['Antoine Chatelain', 'Portfolio', 'JUNIA', 'ISEN', 'Lille'],
    authors: [{ name: 'Antoine Chatelain' }],
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
      ],
      apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest'
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const header = (
    <Link href="/">
      <header className="text-center bg-slate-800 p-8 my-6 rounded-xl">
        <div>
          <Image src="/logo.png" width={64} height={64} className="mx-auto object-cover rounded-lg h-16 w-16" alt="logo" />
          <h1 className="text-3xl text-white">Antoine Chatelain</h1>
          <p className="text-slate-300 mt-1">{t('header.subtitle')}</p>
        </div>
      </header>
    </Link>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400 flex justify-around items-center">
        <p className="mr-2">{t('footer.seeCode')} <a className="hover:underline text-gray-500" href="https://github.com/Redblockmasteur/My-portfolio">GitHub</a></p>
        <a href="https://bff.ecoindex.fr/redirect/?url=https://www.chatelain.dev/">
          <img src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://www.chatelain.dev/" alt="EcoIndex Badge" />
        </a>
      </div>
    </footer>
  );

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <div className="mx-auto max-w-3xl px-6">
            {header}
            {children}
            {footer}
          </div>
        </NextIntlClientProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
