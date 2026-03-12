import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);



  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {t('contact.title')}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          {t('contact.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href="https://fastwork.co/user/burapha_th?source=web_marketplace_profile-menu_profile"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
          >
            Fastwork
          </a>
          <a
            href="mailto:buraphatrx@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
          >
            Email
          </a>
          <a
            href="https://line.me/ti/p/41030196zx"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
          >
            Line
          </a>
        </div>
      </div>
    </section>
  );
}
