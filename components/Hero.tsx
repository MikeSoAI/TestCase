import React from 'react';
import LiquidOrb from './LiquidOrb';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 bg-white">
      
      {/* Artistic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')]" />
      
      <div className="container max-w-[90%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Main Typographic Statement */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center relative">
          
          {/* Decorative Badge */}
          <div className="absolute -top-12 left-0 lg:-left-12 hidden lg:block">
             <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <span className="text-[8px] font-mono uppercase tracking-widest text-black">Freelance • Artist • Designer • </span>
             </div>
          </div>

          <h1 className="text-[12vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter text-black mb-6 break-words uppercase">
            BOLD IDEAS.<br/>
            <span className="outline-text text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-black" style={{ WebkitTextStroke: '2px black'}}>AI-POWERED.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
             <p className="text-lg md:text-xl font-medium text-gray-600 max-w-md leading-relaxed">
               Kreative, mutige und futuristische Visuals für Marken, die <span className="text-black font-bold underline decoration-2">vorausdenken</span>.
             </p>
             
             <a href="#contact" className="group px-8 py-4 bg-black text-white font-bold text-sm tracking-widest hover:bg-transparent hover:text-black border-2 border-black transition-all duration-300 flex items-center gap-2">
               START PROJECT 
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </a>
          </div>
        </div>

        {/* Visual Art Object */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative h-[50vh] lg:h-auto">
           {/* Abstract Art Composition */}
           <div className="relative w-full h-full flex justify-center items-center">
              <div className="absolute top-10 right-10 w-full h-full border border-gray-200 rounded-[40%] rotate-12 z-0" />
              <LiquidOrb className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] z-10 drop-shadow-2xl" />
              <div className="absolute -bottom-10 -left-4 bg-white/80 backdrop-blur-sm px-6 py-3 border border-gray-100 shadow-lg z-20">
                 <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Fig. 01 — Liquid Intelligence</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;