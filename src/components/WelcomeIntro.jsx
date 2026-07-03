import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeIntro() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center snap-start bg-black relative">
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="w-2 h-2 rounded-full bg-cyan-500"
          />
        ))}
      </div>
      <div className="text-center space-y-1">
        <p className="text-sm font-mono text-zinc-500 tracking-widest uppercase">Welcome to my</p>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">Portfolio Website</h1>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center text-zinc-600 text-xs font-mono tracking-widest uppercase animate-bounce">
        <span>Scroll Down</span>
        <span className="mt-1">↓</span>
      </div>
    </section>
  );
}