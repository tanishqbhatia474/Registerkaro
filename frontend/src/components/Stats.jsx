import React from "react";

const stats = [
  { value: "1M+", label: "CUSTOMERS" },
  { value: "12+", label: "YEARS OF EXCELLENCE" },
  { value: "41+", label: "R&D ENGINEERS" },
  { value: "78+", label: "COUNTRIES" },
  { value: "3287+", label: "PARTNERS" },
  { value: "41+", label: "AWARDS RECEIVED" },
];

const Stats = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-yellow-500 uppercase text-sm font-bold mb-2">
          Why Register Karo
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Some Numbers are Important
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
