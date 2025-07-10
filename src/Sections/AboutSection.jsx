import React, { useState, useEffect } from 'react';
import { User, Download, Code, Brain, Trophy } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 300);
    const timer2 = setTimeout(() => setStatsVisible(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const stats = [
    { icon: Trophy, value: "A+", label: "Code Quality Rating", delay: "0ms" },
    { icon: Code, value: "10+", label: "Frameworks Used", delay: "200ms" },
    { icon: Brain, value: "99%", label: "Problem Success Rate", delay: "400ms" }
];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative group">
              {/* Main profile circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-full"></div>
                </div>
                
                {/* User icon */}
                <User size={140} className="text-white relative z-10 transform group-hover:scale-110 transition-all duration-500" />
                
                {/* Floating particles */}
                <div className="absolute top-4 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-8 left-6 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-12 left-12 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Orbital elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 leading-tight">
                Passionate Developer & 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Problem Solver</span>
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm <span className="text-blue-400 font-semibold">Abhishek Kumar Soni</span>, a dedicated Computer Science student at IIIT Sonepat 
                  with a strong passion for full-stack development.  I've successfully delivered multiple web applications 
                  and enhanced user experiences significantly.
                </p>
                <p>
                  With expertise in modern web technologies and a problem-solving mindset, I've 
                  resolved 70+ complex computer science queries and solved 250+ coding challenges. 
                  I enjoy creating innovative solutions that make a real impact.
                </p>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 p-6 rounded-xl transform transition-all duration-700 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 group ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent size={24} className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-3 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10"><a href="https://drive.google.com/file/d/1d8tPuLqip_ovqbHHQLdlWX0e45dHFUwM/view?usp=drive_link">Download Resume</a></span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
