import React from "react";

const steps = [
  {
    icon: "📝", // Replace with actual icon/image if needed
    title: "Fill up Application Form",
    bgColor: "bg-red-500",
  },
  {
    icon: "💳",
    title: "Make Online Payment",
    bgColor: "bg-green-500",
  },
  {
    icon: "👨‍💼",
    title: "Executive will Process Application",
    bgColor: "bg-orange-500",
  },
  {
    icon: "✉️",
    title: "Get Confirm Mail",
    bgColor: "bg-gray-500",
  },
];

const ProcessSteps = () => {
  return (
    <div className="bg-orange-500 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 w-1/4"
          >
            <div
              className={`rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl ${step.bgColor}`}
            >
              {step.icon}
            </div>
            <p className="text-white font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
