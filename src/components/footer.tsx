import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-[#58513a] text-white pt-6 pb-2 text-sm">
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 w-full">
          {/* Сол жақ */}
          <div className="flex-1 min-w-[180px]">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">{t('title')}</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400 font-bold mb-1 text-base">
              <span className="text-xl">⚔️</span>
              <span>{t('army')}</span>
            </div>
            <div className="mb-2 text-base font-semibold">{t('desc')}</div>
            <div className="mb-2 text-sm">{t('help')}</div>
            <div className="border-t border-[#b2a98a] my-3"></div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-500 text-[#58513a] font-bold px-2 py-0.5 rounded text-xs">BETA</span>
              <span className="text-[#b2a98a] text-xs">{t('beta')}</span>
            </div>
          </div>
          {/* Ортасы */}
          <div className="flex-1 min-w-[180px] flex flex-col md:flex-row gap-4">
            <div>
              <div className="font-bold text-base mb-2">{t('sections')}</div>
              <ul className="space-y-0.5 text-sm">
                <li>{t('medical')}</li>
                <li>{t('info')}</li>
                <li>{t('psych')}</li>
                <li>{t('legal')}</li>
                <li>{t('discount')}</li>
                <li>{t('events')}</li>
                <li>{t('courses')}</li>
              </ul>
            </div>
            <div>
              <div className="invisible md:visible h-0 md:h-auto border-l border-[#b2a98a] mx-2"></div>
            </div>
            <div>
              <ul className="space-y-0.5 text-sm mt-4 md:mt-0">
                <li>{t('edu')}</li>
                <li>{t('jobs')}</li>
                <li>{t('career')}</li>
                <li>{t('locations')}</li>
                <li>{t('knowledge')}</li>
                <li>{t('news')}</li>
              </ul>
            </div>
          </div>
          {/* Оң жақ */}
          <div className="flex-1 min-w-[180px]">
            <div className="font-bold text-base mb-2">{t('questions')}</div>
            <div className="mb-1 text-xs">{t('platform_email')}</div>
            <div className="mb-1 text-xs">
              <div>nazviazku@nazviazku.zsu.gov.ua</div>
              <div>cimicj9@post.mil.gov.ua</div>
            </div>
            <div className="mb-1 flex items-center gap-2 text-xs">
              <span className="text-lg">🌐</span>
              <span>{t('social')}</span>
            </div>
            <div className="mb-1 underline cursor-pointer text-xs">{t('feedback')}</div>
            <div className="mb-1 underline cursor-pointer text-xs">{t('partners')}</div>
          </div>
        </div>
        <div className="border-t border-[#b2a98a] my-3"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[#b2a98a] text-xs gap-2 w-full">
          <div className="underline cursor-pointer">{t('cookie')}</div>
          <div>© 2025 {t('copyright')}</div>
        </div>
      </div>
    </footer>
  );
}
