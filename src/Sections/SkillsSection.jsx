import React, { useState, useEffect } from 'react';
import { Code, Database, User, Cpu, Terminal, Globe } from 'lucide-react';

const skills = [
  { name: 'C++', percentage: 80, icon: <Cpu size={20} /> },
  { name: 'DSA', percentage: 70, icon: <Code size={20} /> },
  { name: 'SQL', percentage: 80, icon: <Database size={20} /> },
  { name: 'Express', percentage: 70, icon: <Globe size={20} /> },
  { name: 'HTML/CSS', percentage: 95, icon: <Globe size={20} /> },
  { name: 'JavaScript', percentage: 90, icon: <Terminal size={20} /> },
  { name: 'React', percentage: 85, icon: <Code size={20} /> },
  { name: 'Node.js', percentage: 80, icon: <Terminal size={20} /> }
];

const technicalSkills = {
  languages: ['C/C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  frameworks: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Flutter'],
  tools: ['VS Code', 'Git/GitHub', 'Google Colab', 'MySQL'],
  coursework: ['Database Management System', 'Object-Oriented Programming', 'Data Structures and Algorithms', 'Operating System', 'Computer Network', 'Artificial Intelligence']
};

const SkillsSection = () => {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Technical Skills
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
        
        {/* Programming Languages */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Programming Languages & Frameworks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-blue-400">{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-mono">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Categories */}
        <div className='max-w-6xl mx-auto'>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <div className="bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Code size={20} /> Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.languages.map((lang, i) => (
                <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Database size={20} /> Frameworks & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {[...technicalSkills.frameworks, ...technicalSkills.tools].map((tool, i) => (
                <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;