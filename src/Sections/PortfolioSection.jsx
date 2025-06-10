import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Zenithmain',
    description: 'A flagship project showcasing advanced development techniques, possibly involving web or AI-based solutions for optimized performance.',
    tech: ['JavaScript', 'Node.js', 'Python'], // Inferred based on common technologies
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500',
    github: 'https://github.com/abhisoni1921/Zenithmain',
    live: 'https://zenithmain.vercel.app/',
    date: 'October 2024' // Placeholder date
  },
  {
    title: 'ImagineAlgos',
    description: 'A collaborative project focusing on algorithm visualization or implementation, possibly involving data structures or computational logic.',
    tech: ['Python', 'JavaScript', 'React'], // Inferred based on name
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=500',
    github: 'https://github.com/va-run-6626/ImagineAlgos',
    live: 'https://imagine-algos.vercel.app/',
    date: 'May 2024' // Placeholder date
  },
    {
    title: 'Gambit',
    description: 'A strategic project, potentially a game or algorithm-driven application with a focus on innovative solutions. it may involve AI or complex logic.',
    tech: ['Python', 'AI', 'JavaScript'], // Inferred based on name and user’s project patterns
    image: 'https://cdn.pixabay.com/photo/2021/05/19/11/20/balance-6265638_1280.jpg',
    github: 'https://github.com/abhisoni1921/Gambit',
    live: 'https://gambit-beta.vercel.app/',
    date: 'July 2024' // Placeholder date
  },
  {
    title: 'Pathological Image Classification',
    description: 'Blockchain and Cloud-Assisted Secure Deep Feature Classification Framework for Pathology Images using CNN, VGGNet, MobileNet for classifying the images.',
    tech: ['Deep Learning', 'CNN', 'VGGNet', 'MobileNet'],
    image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=500',
    github: '#',
    live: '#',
    date: 'September 2024'
  },
  {
    title: 'Fashion Avenue - Clothing Store',
    description: 'Responsive website with engaging UI using HTML, CSS, JavaScript and React. Features eye-catching header, compelling content sections.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=500',
    github: 'https://github.com/abhisoni1921/clothing-store',
    live: 'https://abhisoni1921.github.io/clothing-store/',
    date: 'January 2024'
  },
  {
    title: 'N-Queen Visualizer',
    description: 'A visualizer for the N-Queen problem, showcasing the solution through an interactive interface using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500',
    github: 'https://github.com/abhisoni1921/N-Queens-Visualiser',
    live: 'https://abhisoni1921.github.io/N-Queens-Visualiser/',
    date: 'March 2023'
  }
  
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-800/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                  {project.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-blue-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;