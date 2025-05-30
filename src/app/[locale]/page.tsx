import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden mt-8 bg-transparent" style={{minHeight: 380}}>
          {/* Left: Text + brown bg */}
          <div className="flex-1 flex flex-col justify-center bg-[#58513a] p-10 md:p-14 text-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{t('hero_title')}</h1>
            <p className="text-lg md:text-xl font-medium mb-2">{t('hero_desc')}</p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-h-[220px] md:min-h-[380px] overflow-hidden">
            <img src="/vn1.jpeg" alt="Hero" className="w-full h-full object-cover object-center md:rounded-r-2xl md:rounded-l-none rounded-b-2xl md:rounded-b-none" />
          </div>
        </div>
        {/* Cards */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 mt-[-40px] z-20 relative">
          <div className="flex-1 bg-[#f6f6f6] rounded-xl shadow-md p-6 flex flex-col items-start min-w-[220px] border border-[#ececec]">
            <span className="mb-3 text-2xl">▦</span>
            <div className="font-bold text-lg mb-1">{t('catalog')}</div>
          </div>
          <div className="flex-1 bg-[#f6f6f6] rounded-xl shadow-md p-6 flex flex-col items-start min-w-[220px] border border-[#ececec]">
            <span className="mb-3 text-2xl">💼</span>
            <div className="font-bold text-lg mb-1">{t('vacancies')}</div>
          </div>
          <div className="flex-1 bg-[#f6f6f6] rounded-xl shadow-md p-6 flex flex-col items-start min-w-[220px] border border-[#ececec]">
            <span className="mb-3 text-2xl">💬</span>
            <div className="font-bold text-lg mb-1">{t('request')}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats & About */}
      <section className="flex flex-col items-center mt-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Stats row */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 md:mb-0 border-b-4 border-yellow-500 w-fit pb-1">{t('about_title')}</h2>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-16 w-full md:w-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-600">100+</span>
              <span className="text-base text-gray-800 mt-1 text-center">{t('providers')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-600">1000+</span>
              <span className="text-base text-gray-800 mt-1 text-center">{t('locations')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-yellow-600">4</span>
              <span className="text-base text-gray-800 mt-1 text-center">{t('steps')}</span>
            </div>
          </div>
        </div>
        {/* Info block */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch rounded-2xl overflow-hidden bg-transparent min-h-[220px] md:min-h-[340px]">
          {/* Left: Text + brown bg */}
          <div className="flex flex-col justify-center h-full bg-[#58513a] p-6 md:p-14 text-white rounded-b-2xl md:rounded-l-2xl md:rounded-br-none z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">{t('info_title')}</h3>
            <p className="text-lg md:text-xl font-medium mb-2">{t('info_desc')}</p>
          </div>
          {/* Right: Image */}
          <div className="aspect-[16/9] w-full h-auto">
            <img src="/vn1.jpeg" alt="Info" className="w-full h-full object-cover object-center md:rounded-r-2xl md:rounded-l-none rounded-t-2xl md:rounded-t-none" />
            </div>
          </div>
        </div>
      </section>
      {/* New bottom section */}
      <section className="w-full mt-16">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-2">{t('materials_title')}</h2>
        <div className="h-1 w-40 bg-yellow-500 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-2xl overflow-hidden min-h-[140px] md:min-h-[180px] flex items-end group bg-[#58513a]">
            <div className="absolute inset-0 bg-[#58513a]/80 group-hover:bg-[#58513a]/90 transition-all"></div>
            <div className="relative z-10 p-8 w-full flex items-center justify-start">
              <span className="text-white font-bold text-xl md:text-2xl underline">{t('materials_military')}</span>
            </div>
          </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[140px] md:min-h-[180px] flex items-end group bg-[#58513a]">
            <div className="absolute inset-0 bg-[#58513a]/80 group-hover:bg-[#58513a]/90 transition-all"></div>
            <div className="relative z-10 p-8 w-full flex items-center justify-start">
              <span className="text-white font-bold text-xl md:text-2xl underline">{t('materials_family')}</span>
            </div>
          </div>
        </div>
        {/* Sections block */}
          <div className="md:rounded-2xl rounded-xl overflow-hidden bg-[#58513a] w-full p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{t('sections_title')}</h2>
              <div className="h-1 w-32 bg-yellow-500 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">❤️</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_medical')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_medical_desc')}</div>
                </div>
                {/* 2 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">💡</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_info')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_info_desc')}</div>
                </div>
                {/* 3 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">🌱</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_psych')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_psych_desc')}</div>
                </div>
                {/* 4 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">⚖️</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_legal')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_legal_desc')}</div>
                </div>
                {/* 5 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">🗺️</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_map')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_map_desc')}</div>
                </div>
                {/* 6 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">📅</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_events')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_events_desc')}</div>
                </div>
                {/* 7 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">🎓</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_edu')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_edu_desc')}</div>
                </div>
                {/* 8 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">💼</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_job')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_job_desc')}</div>
                </div>
                {/* 9 */}
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2 text-white">🏢</span>
                  <div className="font-bold text-lg text-white mb-1">{t('section_centers')}</div>
                  <div className="bg-[#ececec] text-xs text-[#23221c] rounded px-3 py-1">{t('section_centers_desc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Initiative section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <h4 className="font-bold mb-2">{t('initiative_title')}</h4>
          <div className="flex gap-6 items-center">
            <span className="text-xs">{t('initiative_1')}</span>
            <span className="text-xs">{t('initiative_2')}</span>
          </div>
        </div>
      </div>
        </div>
      </section>
      {/* For defenders section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4">
      <div className="bg-[#23221c] rounded-xl p-6 text-white mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h4 className="font-bold mb-2">{t('for_defenders_title')}</h4>
          <p className="mb-4">{t('for_defenders_desc')}</p>
          <button className="bg-white text-[#23221c] px-4 py-2 rounded font-semibold">{t('for_defenders_btn')}</button>
        </div>
        <div className="aspect-[16/9] w-64 md:w-96">
          <img src="/vn1.jpeg" alt="Defenders" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
        </div>
      </section>
      {/* Partners section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <h4 className="font-bold mb-2">{t('partners_title')}</h4>
          <button className="border px-4 py-2 rounded font-semibold">{t('partners_btn')}</button>
        </div>
      </div>
        </div>
      </section>
      {/* Partnership section */}
      <section className="w-full mt-16 mb-8">
        <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-xl overflow-hidden flex flex-col md:flex-row bg-white shadow-lg w-full">
          <div className="flex-1 flex flex-col justify-center bg-gradient-to-r from-black/70 to-transparent">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('partnership_title')}</h2>
            <p className="text-white text-base mb-6">{t('partnership_desc')}</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition-all w-fit">{t('partnership_btn')}</button>
          </div>
          <div className="flex-1 min-h-[300px] max-h-[400px]">
            <img src="/vn1.jpeg" alt="Partnership" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
