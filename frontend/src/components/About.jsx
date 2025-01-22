import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8">
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-yellow-600 uppercase text-xs sm:text-sm font-bold tracking-wider mb-2">
          Welcome to RegisterKaro.in
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-yellow-600">Register Karo</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness
          to adapt in our ever-changing environment. Perry is an outstanding
          leader who is fanatical about customer satisfaction. He has built a
          solid team which has consistently delivered on projects thereby
          exceeding everyone’s expectations.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>
        <a
          href="#learn-more"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs sm:text-sm rounded hover:bg-blue-700 transition"
        >
          Learn More →
        </a>
      </div>

      {/* Image Content */}
      <div className="flex-1">
        <div className="relative">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQE_Je-kTl7cYQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1687891123464?e=1740614400&v=beta&t=iL1k_LYUiPQ2QM-xoT9Lmygx6RK-Q6-MVgI662K5QGw" // Replace with your image URL
            alt="Register Karo Team"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-full"
          />
          {/* Optional Decorative Elements */}
          <div className="absolute -top-2 -left-2 bg-yellow-500 w-4 h-4 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 bg-yellow-500 w-8 h-8 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
