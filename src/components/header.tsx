"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import Sidebar from './Sidebar';
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const locale = useLocale();

  return (
    <header className="w-full bg-[#58513a]">
      {/* Top bar */}
      <div className="bg-gray-100 text-xs text-right py-1 pr-2 md:pr-8">
        <span role="img" aria-label="eye" className="mr-1">👁</span>
        {tCommon('vision')}
      </div>
      {/* Main header */}
      <div className="w-full bg-white border-b-4 border-[#7a7666]">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-2 md:py-4 md:px-4 lg:px-12">
          {/* Logo and title */}
          <div className="flex items-center flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <img src="/logo.png" onError={(e) => { e.currentTarget.src = '/vercel.svg'; }} alt="Logo" className="w-8 h-8 mr-2" />
              <span className="text-lg md:text-2xl font-bold text-[#575545] tracking-wider">{t('title')}</span>
            </Link>
          </div>
          {/* Navigation links - only show on md+ */}
          <nav className="hidden md:flex gap-6">
            <Link href={`/${locale}/military`} className="text-[#575545] hover:underline">{t('military')}</Link>
            <Link href={`/${locale}/families`} className="text-[#575545] hover:underline">{t('families')}</Link>
          </nav>
          {/* Search - only show on md+ */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 mr-4">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder={t('search')}
              className="bg-transparent outline-none text-sm"
            />
          </div>
          {/* Language switcher */}
          <div className="ml-2 flex-shrink-0">
            <LocalSwitcher />
          </div>
          {/* Menu icon - always visible, rightmost */}
          <div className="ml-2 flex-shrink-0 md:ml-4 cursor-pointer" onClick={() => setSidebarOpen(true)}>
            <span className="text-2xl text-[#575545]">&#9776;</span>
          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
