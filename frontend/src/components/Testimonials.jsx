import React from "react";

const testimonials = [
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    designation: "President and CEO, PrintReach, USA",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    rating: 4.5,
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    designation: "President and CEO, PrintReach, USA",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    rating: 4.5,
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    designation: "President and CEO, PrintReach, USA",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    rating: 4.5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          What peoples says about us
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              {/* Quote */}
              <div className="flex items-start mb-4">
                <span className="text-4xl text-yellow-500 font-bold">“</span>
                <p className="ml-4 text-gray-600">{testimonial.quote}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < Math.floor(testimonial.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <span className="text-yellow-400">½</span>
                )}
              </div>

              {/* Profile */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-gray-800 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
