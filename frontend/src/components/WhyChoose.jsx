import React from "react";

const features = [
  {
    title: "Confidential & Safe",
    description: "All your private information is safe with us",
    icon: "🛡️", // Replace with actual icon/image if required
    bgColor: "bg-red-50",
  },
  {
    title: "No Hidden Fee",
    description: "Everything is put before you with no hidden charges or conditions",
    icon: "✅",
    bgColor: "bg-green-50",
  },
  {
    title: "Guaranteed Satisfaction",
    description: "We ensure that you stay 100% satisfied with our offered services",
    icon: "😊",
    bgColor: "bg-blue-50",
  },
  {
    title: "Expert CA/CS Assistance",
    description: "Prompt support from our in-house expert professionals",
    icon: "👩‍💼",
    bgColor: "bg-pink-50",
  },
  {
    title: "Confidential & Safe",
    description: "All your private information is safe with us",
    icon: "🛡️",
    bgColor: "bg-red-50",
  },
];

const WhyChoose = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-yellow-600 uppercase text-sm font-bold tracking-wider mb-2">
          Why RegisterKaro.in
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-yellow-600">Register Karo</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${feature.bgColor}`}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
