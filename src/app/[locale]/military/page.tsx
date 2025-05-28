import { useTranslations } from 'next-intl';

export default function MilitaryPage() {
  const t = useTranslations('MilitaryPage');
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg text-gray-700">{t('desc')}</p>
    </div>
  );
} 