import { getTranslations } from 'next-intl/server';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('contact');

  return (
    <div>
      <p className="text-justify text-lg">
        {t('intro')} <a href="mailto:antoine.chatelain@student.junia.com" className="underline text-sky-700 hover:text-sky-500"> {t('email')}</a>. <br />
        {t('linkedinIntro')} <a href="https://www.linkedin.com/in/chatelain-antoine/" className="underline text-sky-700 hover:text-sky-500">LinkedIn</a>.
      </p>
      <p className="mt-3 text-justify text-lg">{t('outro')}</p>
      <div className="text-center mt-8">
        <a className="hover:bg-sky-900 border rounded-lg bg-sky-700 p-2 text-white font-semibold" href="/">{t('backToHome')}</a>
      </div>
    </div>
  );
}
