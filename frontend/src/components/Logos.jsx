import React from "react";

const logos = [
  "https://img.icons8.com/?size=100&id=5qUJBPRD9xiI&format=png&color=000000", // Replace with actual logo URLs
  "https://img.icons8.com/?size=100&id=11116&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=38286&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=3467&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=jsQA1CYwtblt&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=7csVZvHoQrLW&format=png&color=000000",
];

const Logos = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-20 mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
