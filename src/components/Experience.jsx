import React, { useState } from 'react';
import experience from '../data/experience';

const Experience = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [showPoints, setShowPoints] = useState(0);

  const handleOpen = (idx) => {
    setOpenIdx(idx);
    setShowPoints(0);
    // Animate points in
    const total = experience[idx].responsibilities.length;
    let i = 1;
    setShowPoints(1);
    const interval = setInterval(() => {
      i++;
      setShowPoints(i);
      if (i >= total) clearInterval(interval);
    }, 300);
  };

  const handleClose = () => {
    setOpenIdx(null);
    setShowPoints(0);
  };

  return (
    <section id="experience" className="py-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Professional Experience</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="border-l-2 border-purple-500 absolute h-full left-1/2 transform -translate-x-1/2 animate-growLine" />
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={exp.title} className={`flex flex-col md:flex-row items-center md:items-start ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} relative`}> 
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} z-10`}>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <div className="text-gray-400 text-sm mb-1">{exp.company} | {exp.location}</div>
                  <div className="text-gray-400 text-sm mb-2">{exp.dates}</div>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
                    <li>{exp.responsibilities[0]}</li>
                  </ul>
                  {exp.responsibilities.length > 1 && (
                    <button onClick={() => handleOpen(idx)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
                  )}
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-purple-500 rounded-full w-4 h-4 border-4 border-gray-900 top-1/2 -mt-2 z-20" />
            </div>
          ))}
        </div>
        {/* Modal Dialog */}
        {openIdx !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-lg w-full relative animate-fadeInUp">
              <h3 className="text-2xl font-bold mb-2 text-white">{experience[openIdx].title}</h3>
              <div className="text-gray-400 text-sm mb-1">{experience[openIdx].company} | {experience[openIdx].location}</div>
              <div className="text-gray-400 text-sm mb-4">{experience[openIdx].dates}</div>
              <div className="text-lg font-semibold text-purple-400 mb-2">Responsibilities:</div>
              <ul className="list-disc list-inside text-gray-200 text-base space-y-2 mb-6">
                {experience[openIdx].responsibilities.map((r, i) => (
                  <li key={i} className={`transition-opacity duration-500 ${i < showPoints ? 'opacity-100' : 'opacity-0'}`}>{r}</li>
                ))}
              </ul>
              <button onClick={handleClose} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-full">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience; 