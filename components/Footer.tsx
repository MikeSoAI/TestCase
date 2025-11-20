import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-black text-black">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black tracking-tighter text-lg">
          AI_VISUAL©2025
        </div>
        
        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:underline">Style Guide</a>
          <a href="#" className="hover:underline">Licensing</a>
        </div>
        
        <div className="text-xs font-mono font-bold uppercase">
          Made in the Latent Space
        </div>
      </div>
    </footer>
  );
};

export default Footer;