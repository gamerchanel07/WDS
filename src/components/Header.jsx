import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ dark, setDark }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WDS</h1>
      <nav className="hidden md:flex gap-8 items-center">
        <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('header.home')}</a>
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('header.about')}</a>
        <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('header.skills')}</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('header.contact')}</a>
      </nav>
      <div className="flex gap-2 items-center">
        <button
          onClick={toggleLanguage}
          className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-semibold text-sm"
        >
          {language === 'en' ? '🇹🇭 TH' : '🇬🇧 EN'}
        </button>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
