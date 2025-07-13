import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/mvgrnywg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' }); // clear form
    } else {
      alert('There was an error sending your message.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Something went wrong. Try again later.');
  }
};


  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">Get in Touch</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col gap-4">
          <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required className="bg-gray-700 rounded px-4 py-2 text-white" />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="bg-gray-700 rounded px-4 py-2 text-white" />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required className="bg-gray-700 rounded px-4 py-2 text-white min-h-[100px]" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Send Message</button>
          {submitted && <span className="text-green-400 mt-2">Thank you! Your message has been sent.</span>}
        </form>
        <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-2 text-gray-300"><FaEnvelope className="text-xl text-purple-400" /> akhilnakkaus5@gmail.com</div>
          <div className="flex items-center gap-2 text-gray-300"><FaLinkedin className="text-xl text-purple-400" /> <a href="https://www.linkedin.com/in/nakka-akhil-631395182/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/akhilnakka</a></div>
          <div className="flex items-center gap-2 text-gray-300"><FaGithub className="text-xl text-purple-400" /> <a href="https://github.com/AKHILNAKKA5" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/akhilnakka</a></div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 