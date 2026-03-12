import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {t('about.title')}
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('about.description')}
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('about.services')}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('about.servicesList').map((service, index) => (
                                <span key={index}>
                                    • {service}<br />
                                </span>
                            ))}
                        </p>

                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {t('about.benefits')}<br />
                            {t('about.benefitsList').map((benefit, index) => (
                                <span key={index}>
                                    ✔ {benefit}<br />
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('about.keyHighlights')}</h3>
                        <ul className="space-y-3">
                            {t('about.highlights').map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">→</span>
                                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
