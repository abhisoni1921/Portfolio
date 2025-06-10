import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech - Computer Science and Engineering',
    institution: 'Indian Institute of Information Technology, Sonepat',
    duration: '2021 - 2025',
    cgpa: '8.3/10',
    type: 'undergraduate'
  },
  {
    degree: 'Class-12th',
    institution: 'Govt. Excellence H. S. School Waidhan, Singrauli (M.P.)',
    duration: '2019 - 2020',
    percentage: '91.2%',
    type: 'secondary'
  },
  {
    degree: 'Class-10th',
    institution: 'Govt. Excellence H. S. School Waidhan, Singrauli (M.P.)',
    duration: '2017 - 2018',
    percentage: '87.5%',
    type: 'secondary'
  }
];

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="education" className="py-20 bg-slate-900 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Education
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <div className="ml-12 bg-slate-800 p-6 rounded-lg w-full transform hover:scale-102 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                    <span className="text-gray-400 text-sm">{edu.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  {edu.cgpa && (
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        Percentage: {edu.percentage}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;