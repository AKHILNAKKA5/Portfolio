import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#about', label: 'About', icon: <FaUser /> },
  { href: '#experience', label: 'Experience', icon: <FaBriefcase /> },
  { href: '#projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { href: '#skills', label: 'Skills', icon: <FaTools /> },
  { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
];

const Navigation = () => (
  <nav className="w-full bg-gray-800 shadow sticky top-0 z-50 animate-fadeIn">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <span className="text-xl font-bold text-purple-400">Akhil Nakka</span>
      <ul className="flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="group flex items-center gap-2 text-white transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 relative">
              <span className="transition-transform duration-200 group-hover:scale-125">{item.icon}</span>
              <span className="hidden sm:inline relative">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navigation; 