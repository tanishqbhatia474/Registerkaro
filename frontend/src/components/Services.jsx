import React from "react";

const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Explore Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a
              href="#learn-more"
              className="text-blue-500 font-medium hover:text-blue-700"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
