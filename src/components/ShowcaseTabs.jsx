import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShowcaseTabs() {
  const [currentTab, setCurrentTab] = useState('Projects');

  const technicalSkills = [
    { 
      name: "React.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      hoverClass: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]" 
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      hoverClass: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]" 
    },
    { 
      name: "Vite", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      hoverClass: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      hoverClass: "hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]" 
    },
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      hoverClass: "hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]" 
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      hoverClass: "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]" 
    },
    { 
      name: "PHP", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      hoverClass: "hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]" 
    },
    { 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      hoverClass: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]" 
    },
    { 
      name: "ASP.NET", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
      hoverClass: "hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]" 
    },
    { 
      name: "Android Studio", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
      hoverClass: "hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]" 
    },
    { 
      name: "Firebase", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      hoverClass: "hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]" 
    },
    { 
      name: "SQLite", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      hoverClass: "hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]" 
    },
    { 
  name: "Visual Studio", 
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
  hoverClass: "hover:border-purple-600/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.15)]" 
},
{ 
  name: "VS Code", 
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  hoverClass: "hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]" 
},
    { 
      name: "MS SQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      hoverClass: "hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]" 
    }

  ];

  const projectsData = [
    {
      title: "ServisKu",
      category: "Full Stack Web System",
      description: "A web-based home service booking and management system that connects customers with service providers while enabling appointment scheduling, booking management, and administrative control.",
      image: "/servisku.png", // <-- REPLACE THIS with your actual image path
      stack: ["PHP", "JavaScript", "phpMyAdmin", "XAMPP"]
    },
    {
      title: "AquaWatch",
      category: "Mobile Application Development",
      description: "A mobile application that helps users monitor water quality and water-related information through an intuitive interface with real-time tracking and alerts.",
      image: "/aqua.png", // <-- REPLACE THIS with your actual image path
      stack: ["Java", "Android Studio", "SQLite", "Firebase"]
    },
    {
      title: "Vacynify",
      category: "System Architecture & QA Specification",
      description: "A software engineering project focused on designing a vaccination management system through requirements analysis, UML diagrams, software architecture, and testing documentation.",
      image: "/vacynify.png", // <-- REPLACE THIS with your actual image path
      stack: ["System Design", "UML Modeling", "QA Testing Specs"]
    }
  ];

  return (
    <section id="showcase-section" className="min-h-screen w-full flex flex-col justify-center snap-start bg-[#050505] border-t border-zinc-900/50 relative overflow-hidden py-24 px-6 sm:px-16 lg:px-24">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Structural Headers */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Engineering Directory</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Portfolio Showcase</h3>
        </div>

        {/* Premium Navigation Switch */}
        <div className="flex justify-center gap-4 mb-14">
          {['Projects', 'Tech Stack'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                currentTab === tab 
                  ? 'bg-zinc-800 text-white border-zinc-700 shadow-md' 
                  : 'bg-zinc-900/50 text-zinc-400 border-zinc-800/50 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Target Content Blocks */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentTab === 'Tech Stack' ? (
              <motion.div 
                key="tech-stack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tech Stack Grid - Matching Reference Image */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-3xl mx-auto">
                  {technicalSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className={`group flex flex-col items-center justify-center p-6 aspect-square rounded-3xl border border-transparent bg-[#111111] hover:bg-[#161616] transition-all duration-300 cursor-default select-none ${skill.hoverClass}`}
                    >
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className="w-12 h-12 object-contain mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
                      />
                      <span className="font-sans text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projectsData.map((project, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col rounded-2xl border border-zinc-800 bg-[#0a0a0a] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    {/* Project Screenshot Wrapper */}
                    <div className="w-full h-48 overflow-hidden bg-zinc-900 border-b border-zinc-800 relative">
                       <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                       />
                    </div>

                    {/* Project Details */}
                    <div className="p-6 flex flex-col flex-grow justify-between space-y-6 relative">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="space-y-3 relative z-10">
                        <span className="block text-xs font-mono text-cyan-500/70 tracking-wider uppercase transition-colors duration-300 group-hover:text-cyan-400">
                          {project.category}
                        </span>
                        
                        <h4 className="text-xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-white">
                          {project.title}
                        </h4>
                        
                        <p className="text-sm text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50 relative z-10">
                        {project.stack.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 group-hover:bg-cyan-950/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}