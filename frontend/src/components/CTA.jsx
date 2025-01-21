import React from "react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-blue-900 py-12 text-center">
      <div className="max-w-3xl mx-auto px-4 text-white">
        <h2 className="text-sm uppercase font-bold mb-2">1% of the industry</h2>
        <h1 className="text-3xl font-bold mb-6">
          Welcome to your new digital reality. Now.
        </h1>
        <div className="flex justify-center items-center mb-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-3 rounded-l-md border-none outline-none"
          />
          <button className="bg-orange-600 text-white px-6 py-3 rounded-r-md hover:bg-orange-700 transition">
            Submit
          </button>
        </div>
        <div className="flex justify-center gap-4 text-sm">
          <span>✔️ Instant results</span>
          <span>✔️ User-friendly interface</span>
          <span>✔️ Personalized customization</span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
