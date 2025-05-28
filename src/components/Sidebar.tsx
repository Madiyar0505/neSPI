"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

// Heroicons SVG
const icons = {
  medical: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
  info: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>,
  psych: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
  legal: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  discount: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" /></svg>,
  events: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4m-5 4h18" /></svg>,
  courses: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12V4" /></svg>,
  edu: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>,
  career: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>,
  jobs: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>,
  locations: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" /></svg>,
  providers: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 20H4v-2a4 4 0 013-3.87" /><circle cx="12" cy="7" r="4" /></svg>,
  news: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>,
  knowledge: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>,
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const t = useTranslations('Sidebar');
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20" onClick={onClose}></div>
      {/* Sidebar */}
      <div className="relative w-[340px] max-w-full h-full bg-white p-6 overflow-y-auto border-l border-gray-200 animate-slide-in-right">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
          onClick={onClose}
          aria-label={t('close')}
        >
          &times;
        </button>
        {/* Content */}
        <div>
          <div className="text-2xl font-bold mb-4 text-gray-900">{t('selected_materials')}</div>
          <div className="mb-6">
            <div className="text-base text-gray-800">{t('for_military')}</div>
            <div className="text-base text-gray-800">{t('for_families')}</div>
          </div>
          <div className="text-xl font-bold mb-3 text-gray-900">{t('sections')}</div>
          <ul className="space-y-1">
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.medical}<span>{t('medical')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.info}<span>{t('info')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.psych}<span>{t('psych')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.legal}<span>{t('legal')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.discount}<span>{t('discount')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.events}<span>{t('events')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.courses}<span>{t('courses')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.edu}<span>{t('edu')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.career}<span>{t('career')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.jobs}<span>{t('jobs')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.locations}<span>{t('locations')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.providers}<span>{t('providers')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.news}<span>{t('news')}</span></li>
            <li className="flex items-center gap-2 text-gray-900 text-base">{icons.knowledge}<span>{t('knowledge')}</span></li>
          </ul>
        </div>
      </div>
      <style jsx global>{`
        @keyframes slide-in-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
