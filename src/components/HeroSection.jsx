import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="h-full w-full flex items-center px-8 sm:px-16 lg:px-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
        
        {/* Left Side: Typography & Info */}
        <div className="space-y-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-tight mb-6">
              Frontend<br/>Developer
            </h1>
            
            <div className="space-y-4 text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              <p>
                I'm a Computer Science student passionate about building modern web and mobile applications that solve real-world problems.
              </p>
              <p>
                I enjoy software engineering, AI-powered solutions, system design, and data-driven analysis. I'm always eager to learn new technologies and create applications that are scalable, user-friendly, and impactful.
              </p>
              <p className="text-xs text-gray-500 font-mono mt-4">
                STACK: HTML, CSS, JS, PHP, Java, ASP.NET, React, Node.js, Firebase, SQLite, SQL Server.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-md text-sm hover:bg-gray-200 transition-colors">
              <Download size={16} />
              Download CV
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-gray-600 text-white font-medium rounded-md text-sm hover:border-gray-300 transition-colors">
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side: Swinging ID Badge (From Video) */}
        <div className="relative flex justify-center lg:justify-end h-[500px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The Lanyard String */}
            <div className="absolute top-[-100px] left-1/2 w-[1px] h-[100px] bg-gray-600 origin-top" />
            
            {/* Swinging Animation */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="origin-top relative z-10"
              style={{ transformOrigin: "center -100px" }} 
            >
              {/* ID Card */}
              <div className="w-64 h-[350px] bg-[#111] rounded-2xl border border-gray-800 p-5 flex flex-col items-center shadow-2xl relative overflow-hidden group">
                
                {/* Top Clip */}
                <div className="w-16 h-3 border-t-2 border-x-2 border-gray-600 rounded-t-lg absolute top-0 -mt-[2px] bg-[#111]" />
                <div className="w-8 h-1 bg-gray-800 rounded-full mt-1 mb-4" />
                
                {/* Profile Image - Replace 'profile.jpg' with your actual image path */}
                <div className="w-full h-48 bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                   <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                
                {/* Text on Badge */}
                <div className="mt-5 text-center w-full">
                  <h3 className="font-bold text-white text-lg tracking-wide">Khausalyah</h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-mono">CS Student</p>
                  
                  {/* Barcode Graphic */}
                  <div className="w-full h-8 flex gap-[2px] justify-center items-end mt-4 opacity-50">
                     {[...Array(20)].map((_, i) => (
                        <div key={i} className={`bg-gray-400 h-full w-[2px] ${i % 4 === 0 ? 'h-3/4' : ''} ${i % 6 === 0 ? 'w-[3px]' : ''}`} />
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}