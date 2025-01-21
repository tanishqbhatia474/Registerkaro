import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Apple
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
  "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000", // Shopify
  "https://img.icons8.com/?size=100&id=16318&format=png&color=000000", // GitHub
  "https://img.icons8.com/?size=100&id=38571&format=png&color=000000", // Trello
  "https://img.icons8.com/?size=100&id=3467&format=png&color=000000", // Dropbox
  "https://img.icons8.com/?size=100&id=38286&format=png&color=000000", // Slack
  "https://img.icons8.com/?size=100&id=22982&format=png&color=000000", // Google Play
  "https://img.icons8.com/?size=100&id=23671&format=png&color=000000", // Stripe
  "https://img.icons8.com/?size=100&id=33811&format=png&color=000000", // Airtable
];

const HappyClients = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Happy Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>

      {/* Logo Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-full p-4 shadow-md flex items-center justify-center"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-blue-600 font-medium flex items-center justify-center gap-2 hover:underline"
        >
          Show more →
        </a>
      </div>
    </div>
  );
};

export default HappyClients;
