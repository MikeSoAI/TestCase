import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const PortfolioItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div className="group relative flex flex-col gap-4 cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Typography / Caption */}
      <div className="flex flex-col border-t border-black pt-3">
        <div className="flex justify-between items-baseline">
          <h3 className="text-2xl font-bold text-black uppercase tracking-tighter">{project.title}</h3>
          <span className="text-xs font-mono text-gray-500">({project.year})</span>
        </div>
        <div className="flex justify-between items-center mt-1">
           <p className="text-sm text-gray-600 font-medium">{project.category}</p>
           <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-[90%] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-black pb-8">
           <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">
             SELECTED <br/> WORKS
           </h2>
           <div className="mb-2 md:mb-4">
             <p className="font-mono text-xs font-bold uppercase tracking-widest text-black">[ Index 2024—2025 ]</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {PROJECTS.map((project, index) => (
            <PortfolioItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32 flex justify-center">
           <a href="#" className="text-9xl font-black text-gray-100 hover:text-black transition-colors tracking-tighter select-none cursor-pointer">
             ARCHIVE
           </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;