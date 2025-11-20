import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-black/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <a href="#" className="font-sans font-black text-2xl tracking-tighter text-black hover:opacity-50 transition-opacity">
          AI_VISUAL©
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-tight text-black">
          <a href="#about" className="hover:text-gray-500 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"/>
          </a>
          <a href="#work" className="hover:text-gray-500 transition-colors relative group">
            Works
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"/>
          </a>
          <a href="#services" className="hover:text-gray-500 transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"/>
          </a>
          <a href="#contact" className="hover:text-gray-500 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"/>
          </a>
        </div>

        <div className="md:hidden text-black">
           <span className="text-3xl cursor-pointer">＋</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;