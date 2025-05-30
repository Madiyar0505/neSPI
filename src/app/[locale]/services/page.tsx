import Link from 'next/link';

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isKazakh = locale === 'kz';

  const services = [
    {
      title: isKazakh ? 'Әлеуметтік бейімделу' : 'Социальная адаптация',
      description: isKazakh
        ? 'Біз әскери қызметтен босатылатын адамдарға жаңа өмір мен жұмыс жағдайларына бейімделуге, азаматтық еңбек нарығының ерекшеліктерін түсінуге және мансаптық траекторияны құруға көмектесетін бағдарламаларды ұйымдастырамыз.'
        : 'Мы организуем программы, помогающие лицам, увольняемым из Вооруженных Сил, адаптироваться к новым условиям жизни и работы, понять специфику гражданского рынка труда и выстроить карьерную траекторию.',
      icon: '🔄'
    },
    {
      title: isKazakh ? 'Жұмыспен қамту мәселелері бойынша кеңес' : 'Консультирование по вопросам занятости',
      description: isKazakh
        ? 'Біз жұмыс нарығы мен кәсіп таңдаудан бастап, құқықтық мәселелер мен мансаптық өсу мүмкіндіктеріне дейін барлық аспектілер бойынша толық кеңестер ұсынамыз.'
        : 'Предоставляем исчерпывающие консультации по всем аспектам трудоустройства: от анализа рынка труда и выбора профессии до правовых вопросов и возможностей карьерного роста.',
      icon: '💡'
    },
    {
      title: isKazakh ? 'Еңбек делдалдығы' : 'Трудовое посредничество',
      description: isKazakh
        ? 'Біз ізденушілер мен жұмыс берушілер арасындағы байланыс. Бос орындар мен резюме базасын құру, жұмыс мүмкіндіктері туралы ақпарат беру және қолайлы нұсқаларды табуға көмектесу.'
        : 'Мы выступаем связующим звеном между соискателями и работодателями. Формируем базу данных вакансий и резюме, предоставляем информацию о возможностях трудоустройства и помогаем найти подходящие варианты.',
      icon: '🤝'
    },
    {
      title: isKazakh ? 'Қызметкерлерді іріктеу' : 'Подбор персонала',
      description: isKazakh
        ? 'Біз олардың біліктілігі мен сіздің компанияңыздың талаптарына сәйкестігін ескере отырып, қызметкерлерді кәсіби түрде іріктейміз. Біз мотивацияланған және тәртіпті қызметкерлерді табуға көмектесеміз.'
        : 'Осуществляем профессиональный подбор работников, учитывая их квалификацию и соответствие требованиям вашей компании. Мы помогаем найти мотивированных и дисциплинированных сотрудников.',
      icon: '👥'
    },
    {
      title: isKazakh ? 'Кәсіби дайындық және қайта дайындау' : 'Профессиональная подготовка и переподготовка',
      description: isKazakh
        ? 'Біз ізденушілерге жаңа дағдыларды игеру немесе кейінгі сәтті жұмысқа орналасу үшін біліктілікті арттыруға мүмкіндік беретін оқыту және қайта дайындау курстарын ұйымдастырамыз.'
        : 'Организуем курсы обучения и переквалификации, которые позволяют соискателям приобрести новые навыки или повысить квалификацию для последующего успешного трудоустройства.',
      icon: '🎓'
    },
    {
      title: isKazakh ? 'Серіктестермен өзара әрекеттесу' : 'Взаимодействие с партнерами',
      description: isKazakh
        ? 'Біз жұмыспен қамту, жұмыс орындарын құру және оқыту мәселелері бойынша мемлекеттік органдармен, еңбек мобильділігі орталықтарымен, мансап орталықтарымен және жұмыс берушілермен белсенді ынтымақтастық жасаймыз.'
        : 'Активно сотрудничаем с государственными органами, центрами трудовой мобильности, карьерными центрами и работодателями по вопросам трудоустройства, создания рабочих мест и обучения.',
      icon: '🤝'
    },
    {
      title: isKazakh ? 'Аутсорсинг және сатып алуларға қатысу' : 'Участие в аутсорсинге и закупках',
      description: isKazakh
        ? 'Біз халықты жұмыспен қамту саласындағы қызметтерді аутсорсингке қатысуға және тиімді шешімдер ұсына отырып, сатып алуларға қатысуға дайынбыз.'
        : 'Мы готовы участвовать в аутсорсинге услуг в сфере занятости населения и принимать участие в закупках, предлагая эффективные решения.',
      icon: '📊'
    },
    {
      title: isKazakh ? 'Іс-шараларды ұйымдастыру' : 'Организация мероприятий',
      description: isKazakh
        ? 'Біз байланыстар орнатуға, тәжірибе алмасуға және кәсіби байланыстарды дамытуға ықпал ететін корпоративтік, маркетингтік және бизнес іс-шараларын өткіземіз.'
        : 'Проводим корпоративные, маркетинговые и деловые мероприятия, способствующие налаживанию контактов, обмену опытом и развитию профессиональных связей.',
      icon: '🎯'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#58513a] animate-slide-in">
        <h1 className="text-3xl font-bold uppercase text-[#58513a] mb-6 flex items-center gap-2">
          <span className="inline-block text-2xl">🎖️</span>
          {isKazakh ? 'Біздің қызметтер' : 'Услуги'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 border-l-4 border-[#58513a] animate-slide-in">
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold uppercase text-[#58513a] mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link href={`/${locale}/contacts`} className="inline-block bg-[#58513a] text-white px-6 py-2 rounded font-bold shadow hover:bg-yellow-500 hover:text-[#23221c] transition">{isKazakh ? 'Толығырақ' : 'Подробнее'}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 