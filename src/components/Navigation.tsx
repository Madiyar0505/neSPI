'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  
  const navItems = [
    { href: `/${locale}`, label: locale === 'kz' ? 'Басты бет' : 'Главная' },
    { href: `/${locale}/about`, label: locale === 'kz' ? 'Біз туралы' : 'О Компании' },
    { href: `/${locale}/services`, label: locale === 'kz' ? 'Қызметтер' : 'Услуги' },
    { href: `/${locale}/jobseekers`, label: locale === 'kz' ? 'Ізденушілерге' : 'Соискателям' },
    { href: `/${locale}/employers`, label: locale === 'kz' ? 'Жұмыс берушілерге' : 'Работодателям' },
    { href: `/${locale}/contacts`, label: locale === 'kz' ? 'Байланыс' : 'Контакты' },
  ];

  // Helper to switch language in the current path
  const switchLocale = (targetLocale: string) => {
    return pathname.replace(/^\/[a-z]{2}/, `/${targetLocale}`);
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={`/${locale}`} className="text-2xl font-bold text-blue-700 tracking-tight">
            neSPI
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors duration-150 ${
                  pathname === item.href
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                    : 'text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-200 pb-1'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex space-x-2">
            <Link
              href={switchLocale('ru')}
              className={`px-3 py-1 rounded border text-sm font-medium transition ${
                locale === 'ru'
                  ? 'bg-blue-100 text-blue-700 border-blue-400'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              RU
            </Link>
            <Link
              href={switchLocale('kz')}
              className={`px-3 py-1 rounded border text-sm font-medium transition ${
                locale === 'kz'
                  ? 'bg-blue-100 text-blue-700 border-blue-400'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              KZ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 