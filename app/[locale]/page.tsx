import getPostMetadata from 'components/getPostMetadata';
import PostPreview from 'components/PostPreview';
import { getTranslations } from 'next-intl/server';
import { Link } from '../../i18n/navigation';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('home');

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <div className="border rounded-lg p-2 mb-4">
        <p className="text-2xl m-1">{t('welcome')}</p>
        <p className="text-justify text-lg">{t('intro')}<br />{t('intro2')}</p>
        <p className="mt-3 text-lg">
          {t('cta')} <Link className="underline text-sky-700 hover:text-sky-500" href="/contact">{t('ctaLink')}</Link>{t('ctaEnd')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </div>
  );
}
