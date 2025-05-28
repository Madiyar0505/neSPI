import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'ТОО «neSPI» - Трудоустройство и социальная адаптация',
  description: 'ТОО «neSPI» – казахстанская компания, созданная для содействия занятости и предоставления услуг в сфере трудоустройства и социальной адаптации.',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navigation locale={locale} />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">ТОО «neSPI»</h3>
                <p className="text-gray-300">
                  Республика Казахстан, город Астана,<br />
                  ул. Ильяса Омарова, дом 27, кв. 326
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                <p className="text-gray-300">
                  Email: info@nespi.kz<br />
                  Телефон: +7 (XXX) XXX-XX-XX
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Время работы</h3>
                <p className="text-gray-300">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб-Вс: Выходной
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
