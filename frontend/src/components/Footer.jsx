import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Design outstanding interfaces</h3>
          <p className="text-gray-300 text-sm mb-4">
            with advanced Figma features in a matter of minutes.
          </p>
          <div className="flex gap-4">
            {/* Social Media Icons */}
            <span className="bg-gray-800 p-2 rounded-full">F</span>
            <span className="bg-gray-800 p-2 rounded-full">G</span>
            <span className="bg-gray-800 p-2 rounded-full">I</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Start a Business</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Government Registration</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Compliance & Tax</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © 2024 RegisterKaro. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
