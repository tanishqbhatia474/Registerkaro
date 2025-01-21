import React from 'react';

const TrustedSection = () => {
  return (
    <section className="bg-gray-50 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h2>
      
      <div className="flex justify-center items-center space-x-12 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="w-44 h-44" />
        <img src="https://morpheusdata.com/wp-content/uploads/2020/04/morpheus-logo-v2.svg" alt="Morpheus" className="w-44 h-44" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="w-44 h-44" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Monday_logo.svg" alt="Monday.com" className="w-44 h-44" />
        <img src="https://cdn.worldvectorlogo.com/logos/segment-1.svg" alt="Segment" className="w-44 h-44" />
      </div>
    </section>
  );
};

export default TrustedSection;
