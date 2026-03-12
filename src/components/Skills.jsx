import React from 'react';

const skills = [
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'API Design'] },
  { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma', 'Webpack'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills & Expertise</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{group.category}</h4>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
