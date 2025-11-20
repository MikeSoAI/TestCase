import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-[90%] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t-2 border-black pt-12">
          
          <div className="md:col-span-4 sticky top-24">
             <h2 className="text-sm font-bold font-mono text-black tracking-widest uppercase mb-4 border-l-2 border-black pl-4">
               [01] The Artist
             </h2>
          </div>
          
          <div className="md:col-span-8 space-y-12">
            <h3 className="text-5xl md:text-7xl font-bold text-black leading-[0.95] tracking-tight">
              I SCULPT WITH <br/>
              <span className="text-gray-400">DATA & LIGHT.</span>
            </h3>
            
            <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg font-medium text-gray-800 leading-relaxed">
              <p>
                Traditional design rules are dissolving. As an AI Visual Designer, I don't just push pixels; I curate possibilities. My work explores the fluid boundary between directed algorithms and happy accidents.
              </p>
              <p>
                I specialize in high-fidelity generative imagery that feels tactile, premium, and unmistakably human-curated. From editorial fashion spreads created in latent space to kinetic liquid branding.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
               {['Generative Art', 'Art Direction', 'Model Training', 'Post-Processing'].map((skill) => (
                 <div key={skill} className="aspect-square border border-gray-200 flex items-center justify-center p-4 text-center hover:bg-black hover:text-white transition-colors cursor-default">
                    <span className="font-bold uppercase text-xs tracking-widest">{skill}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;