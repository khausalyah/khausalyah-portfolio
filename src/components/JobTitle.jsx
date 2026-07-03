import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function JobTitle() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="h-screen w-full flex items-center px-6 sm:px-16 lg:px-24 snap-start bg-zinc-950/40 border-t border-zinc-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">Available for Internships</span>
          
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-zinc-100 leading-tight uppercase">
            Software Engineer &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">System Analyst</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I am a Computer Science student specializing in software engineering, system analysis, and full-stack development. I am actively building AI-powered engineering tools and responsive web/mobile applications to deliver smart digital architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 relative">
            <a href="#showcase-section" className="flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-950 font-semibold rounded-lg text-xs tracking-wider uppercase hover:bg-zinc-300 transition-all shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              View Projects
            </a>
            
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium rounded-lg text-xs tracking-wider uppercase hover:border-zinc-500 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl overflow-hidden z-50">
                  <a 
                    href="/resume-dev.pdf" // <-- REPLACE WITH YOUR ACTUAL PDF FILE NAME/PATH
                    download="Khausalyah_WebMobile_Resume.pdf" // <-- Name of the file when downloaded
                    onClick={() => setIsDropdownOpen(false)} // Closes menu after clicking
                    className="block px-4 py-3 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-cyan-400 transition-colors border-b border-zinc-800 uppercase tracking-wide"
                  >
                    Web & Mobile App Dev
                  </a>
                  <a 
                    href="/resume-analyst.pdf" // <-- REPLACE WITH YOUR ACTUAL PDF FILE NAME/PATH
                    download="Khausalyah_SystemAnalyst_Resume.pdf" // <-- Name of the file when downloaded
                    onClick={() => setIsDropdownOpen(false)} // Closes menu after clicking
                    className="block px-4 py-3 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-cyan-400 transition-colors uppercase tracking-wide"
                  >
                    Software & System Analyst
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end h-[380px] mt-8 lg:mt-0">
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 lg:left-auto lg:right-32 w-[1px] h-[80px] bg-zinc-800" />
          <motion.div
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="origin-top mt-[40px]"
          >
            <div className="w-[250px] bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 flex flex-col items-center shadow-2xl relative overflow-hidden backdrop-blur-md group">
              <div className="w-10 h-2 border border-zinc-700 bg-zinc-800 rounded-md absolute top-2" />
              <div className="w-full h-[250px] bg-zinc-950 rounded-xl mt-4 border border-zinc-800 overflow-hidden relative">
                <img 
                  src="/profile.jpg" 
                  alt="Profile Badge" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => { e.target.style.opacity = '0'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-xs font-mono bg-zinc-950 -z-10">PHOTO</div>
              </div>
              <div className="mt-4 text-center w-full space-y-1">
                <h3 className="font-bold text-zinc-200 tracking-tight text-sm">KHAUSALYAH</h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">CS Student</p>
              </div>
              <div className="w-full h-6 flex gap-[2px] justify-center items-end mt-4 opacity-40">
                {[...Array(18)].map((_, idx) => (
                  <div key={idx} className={`bg-zinc-400 h-full w-[2px] ${idx % 3 === 0 ? 'h-3/4' : ''}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}