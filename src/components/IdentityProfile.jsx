import React from 'react';

export default function IdentityProfile() {
  return (
    <section className="h-screen w-full flex items-center px-6 sm:px-16 lg:px-24 snap-start bg-black border-t border-zinc-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto items-center">
        
        {/* LEFT COLUMN: TEXT & LINKS */}
        <div className="space-y-6 order-2 lg:order-1">
          <div>
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Identity Profile</h2>
            <h3 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100">Khausalyah Ganesan</h3>
          </div>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I enjoy transforming abstract ideas into concrete software systems through clean code, structured logic, and continuous learning, all focused on paving a high-impact future career in technology.
          </p>

          <blockquote className="border-l-2 border-cyan-500 pl-4 py-1 my-4 bg-zinc-900/30 rounded-r-lg">
            <p className="text-sm font-medium italic text-zinc-300">
              "What separates design from art is that design is meant to be functional."
            </p>
          </blockquote>

          <div className="flex flex-wrap gap-4 pt-2">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/khausalyah-ganesan-6b7b37344/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-6 py-2.5 bg-transparent text-cyan-400 font-medium rounded-lg text-sm border border-cyan-500/40 hover:bg-cyan-500 hover:text-zinc-950 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>

            {/* ADDED: GitHub Button */}
            <a 
              href="https://github.com/khausalyah" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-6 py-2.5 bg-transparent text-zinc-300 font-medium rounded-lg text-sm border border-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>

            {/* Email Me */}
            <a 
              href="mailto:khausalyahganesan@gmail.com" 
              className="flex items-center gap-2 px-6 py-2.5 bg-transparent text-blue-400 font-medium rounded-lg text-sm border border-blue-500/40 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email Me
            </a>
          </div>
        </div>
        
        {/* RIGHT COLUMN: GRADIENT CIRCLE IMAGE (RESTORED) */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-2xl">
            <div className="w-full h-full bg-zinc-950 rounded-full overflow-hidden flex items-center justify-center relative">
              <img 
                src="/profile.jpg" 
                alt="Khausalyah Ganesan Circle" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.target.style.opacity = '0'; }}
              />
              <div className="absolute text-zinc-800 text-xs font-mono select-none -z-10">PHOTO</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}