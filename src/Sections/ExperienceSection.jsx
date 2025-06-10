import React, { useState, useEffect } from 'react';
import { Building, Calendar, MapPin, Zap } from 'lucide-react';

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Zenith Edu. Sol. Pvt. Ltd',
    duration: 'January 2025 - Present',
    location: 'Onsite(Delhi, India)',
    type: 'Internship',
    description: [
      'Developed four major web applications: Zenith official website, LeapAhead course platform, LMS, and Prepare MCQ Test Preparation system',
      'Enhanced platform performance and functionality, achieving a 30% faster load time and 20% boost in user engagement',
      'Streamlined backend operations using Node.js and MongoDB, reducing API response time by 40%',
      'Led end-to-end development efforts across projects, coordinating with cross-functional teams'
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'UI/UX', 'JavaScript']
  }
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-20 bg-slate-900 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Experience
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="relative bg-slate-800 p-8 rounded-lg mb-8 transform hover:scale-102 transition-all duration-300 hover:shadow-2xl animate-fade-in-up">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-lg"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Building size={16} />
                    <span>{exp.company}</span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{exp.type}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-gray-400 mb-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="text-gray-400 mb-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Zap size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;