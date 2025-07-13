import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full bg-gray-800 py-4 px-6 flex items-center justify-between mt-8">
    <div className="text-gray-300 text-sm">
      © {new Date().getFullYear()} Akhil Nakka. All Rights Reserved.
    </div>
    <div className="flex gap-4 text-2xl">
      <a href="https://github.com/AKHILNAKKA5" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/nakka-akhil-631395182/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors"><FaLinkedin /></a>
      <a href="mailto:akhilnakkaus5@gmail.com" className="hover:text-purple-400 transition-colors"><FaEnvelope /></a>
    </div>
  </footer>
);

export default Footer; 