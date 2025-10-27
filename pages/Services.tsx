import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';
import ServiceMain from '../assets/images/ServiceMain.png'

const HeroSection = () => (
  <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${ServiceMain})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-4 leading-tight">Our Services</h1>
      <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-200">
        Delivering excellence in every phase of infrastructure development, from underground works to in-building solutions.
      </p>
    </div>
  </div>
);

const WhatWeDoSection = () => (
  <div className="py-12 sm:py-16 lg:py-20 text-center bg-white" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23E97522\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-uw-dark">What We Do</h2>
      <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-uw-grey-1 leading-relaxed text-sm sm:text-base">
        At United Works Pte. Ltd., we specialize in underground civil works across Singapore - from laying network cables, power lines, and water pipes to constructing manholes and wiring server rooms. With over a decade of experience and certified excellence, we power the infrastructure behind the nation's connectivity.
      </p>
    </div>
  </div>
);

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => {
  const isImageLeft = service.layout === 'left';
  return (
    <div className={`container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center`}>
      <div className={`flex justify-center order-1 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <img src={service.imageUrl} alt={service.title} className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-lg" />
      </div>
      <div className={`order-2 ${isImageLeft ? 'md:order-2 md:pl-6 lg:pl-10' : 'md:order-1 md:pr-6 lg:pr-10'}`}>
        <h3 className="text-2xl sm:text-3xl font-bold text-uw-orange">{service.title}</h3>
        <p className="mt-4 text-uw-grey-1 leading-loose text-sm sm:text-base">
          {service.description}
        </p>
      </div>
    </div>
  );
};


const Services = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <div className="divide-y divide-gray-200">
        {SERVICES_DATA.map((service, index) => (
            <div key={index} className={index % 2 === 0 ? 'bg-uw-grey-2' : 'bg-white'}>
                <ServiceItem service={service} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;