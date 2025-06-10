import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = ['Full Stack Developer', 'Problem Solver', 'Code Enthusiast', 'Tech Innovator'];
  const fullText = roles[currentRoleIndex];

  useEffect(() => {
    let timeout;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [typedText, fullText, currentRoleIndex, roles.length]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <div className="text-blue-400 text-lg mb-2 animate-bounce">Hello World! 👋</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhishek Kumar Soni
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2 h-8">
              I'm a <span className="text-blue-400 font-mono">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            B.Tech CSE student at IIIT Sonepat passionate about full-stack development, 
            problem-solving, and creating innovative digital solutions. Currently working as 
            a Full Stack Developer Intern at Zenith Edu. Sol. Pvt. Ltd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:soniabhi1921@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
              <Mail size={24} />
            </a>
            <a href="tel:+919977794478" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
              <Phone size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;