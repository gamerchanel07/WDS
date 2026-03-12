import React from 'react';

const sampleProjects = [
  { 
    id: 1, 
    name: 'React Dashboard', 
    description: 'A comprehensive dashboard built with React and Tailwind CSS featuring real-time data visualization.',
    tags: ['React', 'Tailwind', 'API']
  },
  { 
    id: 2, 
    name: 'E-Commerce Platform', 
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  { 
    id: 3, 
    name: 'Task Management App', 
    description: 'Collaborative task management tool with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Vite']
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Featured Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="group p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{proj.name}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
