import React, { useState } from 'react';

const ArchitexAI = () => {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="w-full h-screen bg-[#0a0a0a] text-gray-300 flex justify-center overflow-hidden">
      
      <div className="w-full max-w-7xl h-full flex flex-col justify-between p-8 md:p-12 lg:px-16 lg:py-10">
        
        {/* 1. COMPACT HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-900 pb-4 shrink-0">
          <div className="flex flex-col">
            {/* UPDATED: Flagship Project styled like Identity Profile */}
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-1">
              Flagship Project
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Architex AI 
            </h1>
            <p className="text-sm text-gray-400 mt-1">Automated Enterprise Software Architecture Generator</p>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0 text-xs font-semibold">
            <a href="#" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-colors">
              Live Demo ↗
            </a>
            <a href="https://github.com/khausalyah" className="bg-gray-900 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-800 transition-colors">
              GitHub ↗
            </a>
          </div>
        </header>

        {/* 2. MAIN DASHBOARD CONTENT GRID */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 min-h-0">
          
          {/* LEFT COLUMN: THE NARRATIVE & SPECS (Takes 7/12 cols) */}
          <section className="lg:col-span-7 flex flex-col justify-between gap-5 min-h-0 overflow-y-auto pr-2">
            
            {/* REMOVED: Elevator pitch to eliminate scrolling */}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shrink-0 mt-2">
              <div className="p-4 bg-gray-900/30 border border-gray-900 rounded-xl space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-red-400">The Problem</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Software design is fragmented. Teams waste time jumping between text editors and separate drawing tools.
                </p>
              </div>
              <div className="p-4 bg-gray-900/30 border border-gray-900 rounded-xl space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">The Solution</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A unified workspace where an LLM converts natural language into database schemas and live Mermaid.js diagrams.
                </p>
              </div>
            </div>

            {/* Tech Stack Horizontal Row */}
            <div className="space-y-2 shrink-0">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Engine Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vite', 'Mermaid.js', 'React-Markdown', 'html2pdf.js', 'Node.js', 'Express.js', 'LLM API'].map((tech) => (
                  <span key={tech} className="bg-gray-900 text-[11px] px-3 py-1.5 rounded-md border border-gray-800 text-gray-300 hover:bg-cyan-900/40 hover:text-cyan-300 hover:border-cyan-700/50 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="flex-1 min-h-0 flex flex-col justify-center space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Engineering Architecture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <div className="p-3 bg-gray-900/50 border border-gray-800/60 rounded-xl flex flex-col justify-center hover:bg-gray-800 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-cyan-900/20">
                  <h4 className="text-xs font-bold text-white">Dynamic Vector Rendering</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-1.5">
                    Pipes raw markdown straight into Mermaid.js for live rendering.
                  </p>
                </div>

                <div className="p-3 bg-gray-900/50 border border-gray-800/60 rounded-xl flex flex-col justify-center hover:bg-gray-800 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-cyan-900/20">
                  <h4 className="text-xs font-bold text-white">Strict Prompt Engineering</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-1.5">
                    Rigorous LLM backend prompts enforcing strict syntax constraints.
                  </p>
                </div>

                <div className="p-3 bg-gray-900/50 border border-gray-800/60 rounded-xl flex flex-col justify-center hover:bg-gray-800 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-cyan-900/20">
                  <h4 className="text-xs font-bold text-white">Client-Side PDF Compilation</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-1.5">
                    Uses html2pdf.js to upscale canvas nodes for high-res exports.
                  </p>
                </div>

                <div className="p-3 bg-gray-900/50 border border-gray-800/60 rounded-xl flex flex-col justify-center hover:bg-gray-800 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-cyan-900/20">
                  <h4 className="text-xs font-bold text-white">Intelligent Session State</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-1.5">
                    History tracker with live search for fast context swapping.
                  </p>
                </div>

              </div>
            </div>

          </section>

          {/* RIGHT COLUMN: INTERACTIVE VISUAL DISPLAY (Takes 5/12 cols) */}
          <section className="lg:col-span-5 flex flex-col justify-between bg-gray-950/40 border border-gray-900 rounded-2xl p-4 min-h-0">
            
            <div className="flex bg-gray-900 p-1 rounded-xl border border-gray-800 gap-1 shrink-0">
              <button 
                onClick={() => setActiveTab('hero')}
                className={`flex-1 text-center py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'hero' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>
                Main Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('action')}
                className={`flex-1 text-center py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'action' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>
                Generation Workflow
              </button>
              <button 
                onClick={() => setActiveTab('export')}
                className={`flex-1 text-center py-2 rounded-lg text-xs font-medium transition-all ${activeTab === 'export' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>
                Output Generation
              </button>
            </div>

            <div className="flex-1 min-h-0 bg-gray-900/60 rounded-xl border border-gray-800 border-dashed my-4 flex items-center justify-center p-4 overflow-hidden relative group">
              {activeTab === 'hero' && (
                <img 
                  src="/architex-hero.png" 
                  alt="Main Dashboard" 
                  className="w-full h-full object-contain rounded-lg shadow-lg" 
                />
              )}
              {activeTab === 'action' && (
                <img 
                  src="/architex-action.png" 
                  alt="Workflow Action" 
                  className="w-full h-full object-contain rounded-lg shadow-lg" 
                />
              )}
              {activeTab === 'export' && (
                <img 
                  src="/architex-output.png" 
                  alt="Output Generation" 
                  className="w-full h-full object-contain rounded-lg shadow-lg" 
                />
              )}
            </div>

            <div className="text-center text-[10px] text-gray-500 italic shrink-0">
              * Click the tabs above to cycles through live system verification assets.
            </div>

          </section>

        </main>

        {/* 3. MINIMAL FOOTER STAMP */}
        <footer className="text-center text-[11px] text-gray-600 border-t border-gray-950 pt-4 shrink-0">
          Architex AI Architecture Specification Blueprint • Built with React Engine
        </footer>

      </div>
    </div>
  );
};

export default ArchitexAI;