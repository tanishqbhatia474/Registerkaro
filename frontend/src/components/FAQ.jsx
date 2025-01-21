import React from "react";

const faqs = [
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
];

const FAQ = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-yellow-500 uppercase text-sm font-bold tracking-wide text-center mb-2">
          FAQ
        </h2>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequent Ask Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition"
            >
              <p className="text-gray-800 font-medium">{faq}</p>
              <span className="text-gray-400 text-2xl">→</span>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Show more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
