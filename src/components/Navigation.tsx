'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navigation = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <nav className="bg-white shadow-sm border-b-4 border-[#b5b08a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo and site name */}
          <Link href={`/${locale}`} className="flex items-center group">
            {/* SVG Logo with animation */}
            <span className="inline-block animate-logo-entrance">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="21" fill="#e6e3d0" stroke="#b5b08a" strokeWidth="2"/>
                <rect x="12" y="14" width="20" height="16" rx="6" fill="#3a4a2b" stroke="#b5b08a" strokeWidth="2"/>
                <text x="50%" y="57%" textAnchor="middle" fill="#ffe066" fontSize="13" fontWeight="bold" fontFamily="Inter, Arial, sans-serif" dy=".3em">neSPI</text>
                <polygon points="22,7 25,17 35,17 27,23 30,33 22,27 14,33 17,23 9,17 19,17" fill="#ffe066" stroke="#b5b08a" strokeWidth="1"/>
              </svg>
            </span>
            <span className="ml-3 text-2xl font-extrabold text-[#2d2d2d] tracking-tight group-hover:text-[#3a4a2b] transition-colors duration-200">
              neSPI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold transition-colors duration-150 px-2 py-1 rounded-md border-b-2 border-transparent hover:border-[#ffe066] hover:bg-[#f7f6ef] hover:text-[#3a4a2b] ${
                  pathname === item.href
                    ? 'text-[#3a4a2b] border-[#ffe066] bg-[#f7f6ef]'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language switcher - Desktop */}
          <div className="hidden md:flex space-x-2">
            <Link
              href={switchLocale('ru')}
              className={`px-3 py-1 rounded border-2 text-sm font-bold transition uppercase tracking-wide shadow-sm ${
                locale === 'ru'
                  ? 'bg-[#e6e3d0] text-[#3a4a2b] border-[#b5b08a]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-[#f7f6ef] hover:text-[#3a4a2b]'
              }`}
            >
              RU
            </Link>
            <Link
              href={switchLocale('kz')}
              className={`px-3 py-1 rounded border-2 text-sm font-bold transition uppercase tracking-wide shadow-sm ${
                locale === 'kz'
                  ? 'bg-[#e6e3d0] text-[#3a4a2b] border-[#b5b08a]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-[#f7f6ef] hover:text-[#3a4a2b]'
              }`}
            >
              KZ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language switcher - Mobile */}
            <div className="flex space-x-2">
              <Link
                href={switchLocale('ru')}
                className={`px-2 py-1 rounded border-2 text-xs font-bold transition uppercase tracking-wide shadow-sm ${
                  locale === 'ru'
                    ? 'bg-[#e6e3d0] text-[#3a4a2b] border-[#b5b08a]'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                RU
              </Link>
              <Link
                href={switchLocale('kz')}
                className={`px-2 py-1 rounded border-2 text-xs font-bold transition uppercase tracking-wide shadow-sm ${
                  locale === 'kz'
                    ? 'bg-[#e6e3d0] text-[#3a4a2b] border-[#b5b08a]'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                KZ
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3a4a2b] hover:text-[#2d2d2d] hover:bg-[#f7f6ef] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#b5b08a]"
            >
              <span className="sr-only">Open main menu</span>
              {/* Burger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#b5b08a]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? 'text-[#3a4a2b] bg-[#f7f6ef] border-l-4 border-[#ffe066]'
                  : 'text-gray-700 hover:text-[#3a4a2b] hover:bg-[#f7f6ef] hover:border-l-4 hover:border-[#ffe066]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 