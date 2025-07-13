import React from 'react';
import { projects } from '../data/projects';

const Projects = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Projects</h2>
    <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
        >
          <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-200 group-hover:text-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-auto">View Project</a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 