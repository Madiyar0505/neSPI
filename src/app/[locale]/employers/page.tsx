import Link from 'next/link';

export default function EmployersPage({ params: { locale } }: { params: { locale: string } }) {
  const isKazakh = locale === 'kz';

  const advantages = [
    {
      title: isKazakh ? 'Мақсатты іріктеу' : 'Целевой подбор',
      description: isKazakh
        ? 'Біз әскери қызметкерлермен жұмыс істеуге маманданған және олардың құзыреттерін бағалау және сіздің талаптарыңызға дәл сәйкес келетін кандидаттарды таңдау жолын білеміз.'
        : 'Мы специализируемся на работе с ветеранами и знаем, как оценить их компетенции и подобрать кандидатов, точно соответствующих вашим требованиям.',
      icon: '🎯'
    },
    {
      title: isKazakh ? 'Уақытты үнемдеу' : 'Экономия времени',
      description: isKazakh
        ? 'Біз іздеу және алғашқы іріктеу процесін өз мойнымызға аламыз, сізге тек ең қолайлы кандидаттарды ұсынамыз.'
        : 'Мы берем на себя процесс поиска и первичного отбора, предоставляя вам только наиболее подходящих кандидатов.',
      icon: '⏱️'
    },
    {
      title: isKazakh ? 'Деректер қорына қол жеткізу' : 'Доступ к базе данных',
      description: isKazakh
        ? 'Біз жұмысқа кірісуге дайын білікті мамандардың деректер қорын құрамыз.'
        : 'Мы формируем базу данных квалифицированных специалистов, готовых приступить к работе.',
      icon: '📊'
    },
    {
      title: isKazakh ? 'Серіктестік' : 'Партнерство',
      description: isKazakh
        ? 'Біз ұзақ мерзімді ынтымақтастыққа ұмтыламыз және жұмыс орындарын құру және кәсіби оқыту мәселелері бойынша өзара әрекеттесуге дайынбыз.'
        : 'Мы стремимся к долгосрочному сотрудничеству и готовы взаимодействовать по вопросам создания рабочих мест и профессионального обучения.',
      icon: '🤝'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#58513a] animate-slide-in">
        <h1 className="text-3xl font-bold uppercase text-[#58513a] mb-6 flex items-center gap-2">
          <span className="inline-block text-2xl">🪖</span>
          {isKazakh ? 'ТОО «neSPI» көмегімен сенімді қызметкерлерді табыңыз' : 'Найдите надежных сотрудников с ТОО «neSPI»'}
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-semibold animate-slide-in">
          {isKazakh
            ? 'Тәртіпті, жауапкершілікті және жоғары мотивацияланған қызметкерлер іздейсіз бе? Бұрынғы әскери қызметкерлер – бұл бірегей сапалар жинағына ие кадрлық резерв: орындау, стресс төзімділігі, командада жұмыс істеу және белгіленген мақсаттарға жету қабілеті.'
            : 'Ищете дисциплинированных, ответственных и высокомотивированных сотрудников? Бывшие военнослужащие – это кадровый резерв, обладающий уникальным набором качеств: исполнительность, стрессоустойчивость, умение работать в команде и достигать поставленных целей.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 border-l-4 border-[#58513a] animate-slide-in">
              <div className="text-3xl mb-2">{adv.icon}</div>
              <h3 className="text-xl font-bold uppercase text-[#58513a] mb-2">{adv.title}</h3>
              <p className="text-gray-700 mb-2">{adv.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href={`/${locale}/contacts`} className="inline-block bg-[#58513a] text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-yellow-500 hover:text-[#23221c] transition">{isKazakh ? 'Бос орын орналастыру' : 'Разместить вакансию'}</Link>
          <Link href={`/${locale}/contacts`} className="inline-block bg-yellow-500 text-[#23221c] px-8 py-3 rounded-lg font-bold shadow hover:bg-[#58513a] hover:text-white transition">{isKazakh ? 'Бізбен байланысу' : 'Связаться с нами'}</Link>
        </div>
      </div>
    </div>
  );
} 