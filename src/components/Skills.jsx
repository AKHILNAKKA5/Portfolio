import React from 'react';
import { skills } from '../data/skills';

const Skills = () => (
  <section id="skills" className="py-12 animate-fadeIn">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">My Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
          <span className="text-4xl mb-2 transition-transform duration-300 group-hover:animate-bounce" style={{ color: skill.color }}>{skill.icon}</span>
          <span className="text-gray-200 font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 