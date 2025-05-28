import { useTranslations } from 'next-intl';

export default function MilitaryPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('MilitaryPage');
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-[#5B5B32]/90 rounded-2xl shadow-xl p-8 border-2 border-yellow-400 animate-slide-in">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-yellow-400 mb-6 font-mono nav-badge-text animate-slide-in">
          {t('title')}
        </h1>
        <p className="text-lg text-yellow-100 font-semibold animate-slide-in">
          {t('desc')}
        </p>
      </div>
    </div>
  );
} 