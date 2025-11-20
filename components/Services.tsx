import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceItem: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <div className="group border-t-2 border-black py-16 hover:bg-black hover:text-white transition-colors duration-500 cursor-default relative overflow-hidden">
    <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative">
      <div className="lg:col-span-2">
        <span className="font-mono text-sm font-bold">0{index + 1}</span>
      </div>
      <div className="lg:col-span-6">
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:italic transition-all">
          {service.title}
        </h3>
      </div>
      <div className="lg:col-span-4 flex flex-col gap-4">
        <p className="text-lg font-medium leading-relaxed opacity-80">
          {service.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {service.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold border border-current px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white text-black pb-24 pt-12">
      <div className="max-w-[90%] mx-auto mb-12">
        <h2 className="text-sm font-bold font-mono tracking-widest uppercase border-l-2 border-black pl-4">
          [02] Capabilities
        </h2>
      </div>
      
      <div className="flex flex-col border-b-2 border-black">
        {SERVICES.map((service, idx) => (
          <ServiceItem key={service.id} service={service} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Services;