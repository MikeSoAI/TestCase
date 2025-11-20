import React from 'react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
       {/* Decorative Big Circle */}
      <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full border-[40px] border-white opacity-50 pointer-events-none" />

      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left: Context */}
        <div>
          <h2 className="text-7xl md:text-9xl font-black text-black tracking-tighter leading-[0.8] mb-12">
            LET'S<br/>
            COLLAB.
          </h2>
          
          <div className="space-y-8">
             <p className="text-xl font-medium text-gray-700 max-w-sm">
               Open for commissions, consulting, and art direction.
             </p>

             <div className="flex flex-col items-start gap-4 pt-8">
               {SOCIALS.map((social) => (
                 <a 
                   key={social.platform}
                   href={social.url} 
                   className="text-2xl font-bold text-black hover:text-gray-500 transition-colors flex items-center gap-2 group"
                 >
                   {social.display}
                   <span className="text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">→</span>
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white p-12 shadow-xl border border-gray-100">
           <form className="space-y-10">
              <div className="relative group">
                 <input 
                   type="text" 
                   placeholder="NAME"
                   className="w-full py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none text-black text-xl font-bold placeholder:text-black/20 transition-colors"
                 />
              </div>
              <div className="relative group">
                 <input 
                   type="email" 
                   placeholder="EMAIL"
                   className="w-full py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none text-black text-xl font-bold placeholder:text-black/20 transition-colors"
                 />
              </div>
              <div className="relative group">
                 <textarea 
                   rows={3}
                   placeholder="PROJECT DETAILS"
                   className="w-full py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none text-black text-xl font-bold placeholder:text-black/20 resize-none transition-colors"
                 />
              </div>

              <button className="w-full py-6 bg-black text-white font-black text-xl tracking-widest hover:bg-gray-800 transition-colors uppercase">
                Send Request
              </button>
           </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;