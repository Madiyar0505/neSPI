'use client';

import { useState } from 'react';

export default function ContactsPage({ params: { locale } }: { params: { locale: string } }) {
  const isKazakh = locale === 'kz';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#58513a] animate-slide-in">
        <h1 className="text-3xl font-bold uppercase text-[#58513a] mb-6 flex items-center gap-2">
          <span className="inline-block text-2xl">📞</span>
          {isKazakh ? 'Бізбен байланысу' : 'Контакты'}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold uppercase text-[#58513a] mb-2 flex items-center gap-2"><span>🏢</span>{isKazakh ? 'Біздің мекен-жайымыз:' : 'Наш адрес:'}</h2>
            <p className="text-gray-700 mb-4">
              {isKazakh
                ? 'Қазақстан Республикасы, Астана қаласы, Ильяс Омаров көшесі, 27 үй, 326 пәтер'
                : 'Республика Казахстан, город Астана, ул. Ильяса Омарова, дом 27, кв. 326'}
            </p>
            <h2 className="text-xl font-bold uppercase text-[#58513a] mb-2 flex items-center gap-2"><span>📧</span>{isKazakh ? 'Қосымша байланыстар:' : 'Дополнительные контакты:'}</h2>
            <div className="space-y-2 text-gray-700 mb-4">
              <p>Email: info@nespi.kz</p>
              <p>{isKazakh ? 'Телефон:' : 'Телефон:'} +7 (XXX) XXX-XX-XX</p>
              <p>{isKazakh ? 'Жұмыс уақыты:' : 'Время работы:'} 9:00 - 18:00</p>
            </div>
            <div className="bg-[#f6f6f6] rounded-lg h-40 flex items-center justify-center border border-[#58513a]">
              <p className="text-gray-500">{isKazakh ? 'Карта осында болады' : 'Карта будет здесь'}</p>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold uppercase text-[#58513a] mb-4 flex items-center gap-2"><span>📝</span>{isKazakh ? 'Кері байланыс формасы' : 'Форма обратной связи'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#58513a] mb-1">{isKazakh ? 'Аты-жөні' : 'Имя'}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-[#58513a] rounded-md bg-[#f6f6f6] text-gray-900 focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#58513a] mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-[#58513a] rounded-md bg-[#f6f6f6] text-gray-900 focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#58513a] mb-1">{isKazakh ? 'Телефон' : 'Телефон'}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-[#58513a] rounded-md bg-[#f6f6f6] text-gray-900 focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-[#58513a] mb-1">{isKazakh ? 'Тақырып' : 'Тема'}</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-[#58513a] rounded-md bg-[#f6f6f6] text-gray-900 focus:ring-yellow-500 focus:border-yellow-500">
                  <option value="">{isKazakh ? 'Таңдаңыз' : 'Выберите'}</option>
                  <option value="job_seeker">{isKazakh ? 'Жұмыс іздеуші' : 'Соискатель'}</option>
                  <option value="employer">{isKazakh ? 'Жұмыс беруші' : 'Работодатель'}</option>
                  <option value="other">{isKazakh ? 'Басқа' : 'Другое'}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#58513a] mb-1">{isKazakh ? 'Хабарлама' : 'Сообщение'}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-[#58513a] rounded-md bg-[#f6f6f6] text-gray-900 focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              <button type="submit" className="w-full bg-[#58513a] text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-yellow-500 hover:text-[#23221c] transition mt-4">{isKazakh ? 'Жіберу' : 'Отправить'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 