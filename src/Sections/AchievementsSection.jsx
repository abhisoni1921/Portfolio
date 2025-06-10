import React, { useState, useEffect } from 'react';
import { Award, Trophy, Star, Code, BookOpen, Medal, Target, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'District Topper',
    subtitle: '12th Standard Excellence',
    description: 'Achieved the highest academic performance in district-wide examinations',
    icon: Trophy,
    color: 'amber',
    stats: '#2 Rank'
  },
  {
    title: 'MERN Certified',
    subtitle: 'Great Learning Platform',
    description: 'Mastered MERN concepts and advanced design patterns',
    icon: BookOpen,
    color: 'emerald',
    stats: 'Certified'
  },
  {
    title: 'Problem Solver',
    subtitle: 'Chegg Expert Contributor',
    description: 'Resolved complex computer science queries helping students worldwide',
    icon: Target,
    color: 'violet',
    stats: '70+ Solutions'
  },
  {
    title: 'Code Warrior',
    subtitle: 'Competitive Programming',
    description: 'Consistently solved algorithmic challenges across multiple coding platforms',
    icon: Code,
    color: 'cyan',
    stats: '250+ Problems'
  }
];

const colorMap = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    icon: 'bg-amber-500',
    text: 'text-amber-400',
    hover: 'hover:border-amber-500/50'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    icon: 'bg-emerald-500',
    text: 'text-emerald-400',
    hover: 'hover:border-emerald-500/50'
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    icon: 'bg-violet-500',
    text: 'text-violet-400',
    hover: 'hover:border-violet-500/50'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    icon: 'bg-cyan-500',
    text: 'text-cyan-400',
    hover: 'hover:border-cyan-500/50'
  }
};

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="achievements" className="py-20 bg-slate-900 relative z-10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Achievements
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const colors = colorMap[achievement.color];
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-slate-800/80 backdrop-blur-sm border ${colors.border} ${colors.hover} rounded-3xl p-6 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Glowing effect */}
                  <div className={`absolute inset-0 ${colors.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${colors.icon} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className={`${colors.text} text-sm font-bold px-3 py-1 bg-slate-700/50 rounded-full`}>
                        {achievement.stats}
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className={`${colors.text} text-sm font-medium`}>
                        {achievement.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {achievement.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.icon.replace('bg-', 'from-')} to-transparent rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16 space-x-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;