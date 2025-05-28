import Link from 'next/link';

export default function JobSeekersPage({ params: { locale } }: { params: { locale: string } }) {
  // Only Russian content as per user request
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#58513a] animate-slide-in">
        <h1 className="text-3xl font-bold uppercase text-[#58513a] mb-6 flex items-center gap-2">
          <span className="inline-block text-2xl">🎯</span>
          Новый старт вашей карьеры с ТОО «neSPI»
        </h1>
        <p className="text-lg text-gray-700 mb-8 font-semibold animate-slide-in">
          Завершение военной службы – это начало нового важного этапа. ТОО «neSPI» здесь, чтобы поддержать вас на этом пути и помочь найти достойную работу, где ваш опыт, навыки и преданность делу будут оценены по достоинству.
        </p>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#58513a] animate-slide-in">
          <h2 className="text-2xl font-bold uppercase text-[#58513a] mb-4">Мы предлагаем:</h2>
          <ul className="list-disc pl-8 space-y-4 text-gray-700 font-medium">
            <li><span className="font-semibold">Индивидуальные консультации:</span> Поможем оценить ваши сильные стороны, определить карьерные цели и составить план действий.</li>
            <li><span className="font-semibold">Помощь в трудоустройстве:</span> Предоставим доступ к актуальным вакансиям от проверенных работодателей, поможем с составлением резюме и подготовкой к собеседованиям.</li>
            <li><span className="font-semibold">Программы адаптации:</span> Участвуйте в наших программах, чтобы быстрее влиться в гражданскую среду и понять требования современного рынка труда.</li>
            <li><span className="font-semibold">Обучение и переподготовка:</span> Если вы хотите сменить сферу деятельности или повысить квалификацию, мы организуем для вас необходимое обучение.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/ru/contacts" className="inline-block bg-[#58513a] text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-yellow-500 hover:text-[#23221c] transition text-center">Записаться на консультацию</Link>
          <Link href="/ru/contacts" className="inline-block bg-yellow-500 text-[#23221c] px-8 py-3 rounded-lg font-bold shadow hover:bg-[#58513a] hover:text-white transition text-center">Отправить резюме</Link>
        </div>
      </div>
    </div>
  );
} 