import React from 'react';

const LiquidOrb: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Subtle Colorful Glow behind the object */}
      <div className="absolute w-[140%] h-[140%] bg-gradient-to-tr from-blue-200/30 via-purple-200/30 to-pink-200/30 blur-[80px] rounded-full" />
      
      {/* The Liquid Object */}
      <div className="relative w-full h-full animate-morph animate-float overflow-hidden">
        
        {/* Base Layer: Silver/Mercury */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-200 to-gray-400" />
        
        {/* High-Contrast Chrome Reflections */}
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_25%)]" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_80%_80%,#ffffff_0%,transparent_40%)]" />
        
        {/* Metallic Horizon Line Simulation */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* Iridescent Surface Sheen */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-cyan-300/20 via-purple-300/20 to-yellow-200/20 mix-blend-overlay" />
        
        {/* Deep Internal Shadow for Volume (Softer for light mode) */}
        <div className="absolute inset-0 shadow-[inset_-10px_-10px_40px_rgba(0,0,0,0.15),inset_10px_10px_40px_rgba(255,255,255,1)] rounded-[inherit]" />
      </div>
      
      {/* Refraction / Glass Ring Overlay */}
      <div className="absolute w-[105%] h-[105%] border border-black/5 rounded-[inherit] animate-morph blur-[1px] pointer-events-none" />
    </div>
  );
};

export default LiquidOrb;