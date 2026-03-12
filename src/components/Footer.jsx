import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">© {new Date().getFullYear()} WebPort. All rights reserved.</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}
