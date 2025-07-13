import React, { useEffect, useRef, useState } from 'react';

const TITLES = [
  'Software Development Engineer',
  'Backend & Cloud Developer',
];

const HeroSection = () => {
  const [displayed, setDisplayed] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (pause) return;
    intervalRef.current = setInterval(() => {
      const current = TITLES[titleIdx];
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((idx) => idx + 1);
        if (charIdx + 1 === current.length) {
          setPause(true);
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((idx) => idx - 1);
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setTitleIdx((idx) => (idx + 1) % TITLES.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearInterval(intervalRef.current);
  }, [charIdx, deleting, pause, titleIdx]);

  useEffect(() => {
    if (pause) {
      setTimeout(() => setPause(false), 1000);
    }
  }, [pause]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-0 bg-gradient-to-b from-gray-900 to-gray-800 animate-fadeInUp min-h-[70vh]">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-white dark:text-white">Hi, I'm Akhil Nakka</h2>
        <span className="block text-2xl md:text-3xl font-semibold text-purple-400 min-h-[2.5rem] h-10 mb-4">
          {displayed}
          <span className="border-r-2 border-purple-400 animate-pulse ml-1" />
        </span>
        <div className="flex gap-4 mt-6">
          <a href="#contact" className="bg-white text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition-colors">Contact Me</a>
          <a href="src/Akhil_Nakka_Resume.pdf" download className="border-2 border-white text-white font-semibold px-6 py-2 rounded shadow hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2">
            Download Resume <span className="material-icons text-base">file_download</span>
          </a>
        </div>
        <div className="flex gap-4 mt-8 text-2xl">
          <a href="https://github.com/akhilnakka" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/akhilnakka" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end px-4 md:px-10">
        <img src="src/profile-akhil.jpg" alt="Akhil Nakka" className="w-80 h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl" />
      </div>
    </section>
  );
};

export default HeroSection; 