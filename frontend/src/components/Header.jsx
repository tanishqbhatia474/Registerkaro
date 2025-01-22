import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-50 to-blue-50 py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-2 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg font-semibold">★</span>
              <span className="text-gray-700 text-sm font-medium">Google Rating</span>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Your trusted partner <br /> for compliance business needs
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various{" "}
            <span className="font-semibold text-gray-800">registrations</span>,{" "}
            <span className="font-semibold text-gray-800">tax filings</span>, and
            other{" "}
            <span className="font-semibold text-gray-800">legal matters</span>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800">4.5+</div>
              <div className="text-xs md:text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800">20,000+</div>
              <div className="text-xs md:text-sm text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-800">99.8%</div>
              <div className="text-xs md:text-sm text-gray-600">Financial Stability</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
              Talk An Expert
            </button>
            <button className="flex items-center justify-center space-x-2 text-blue-700 px-4 py-2 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white">
              <span>See how it works</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative mt-10 md:mt-0">
          {/* Placeholder for Illustration */}
          <div className="hidden md:block">
            {/* Uncomment and replace with an actual image */}
            {/* <img
              src="path-to-illustration.png"
              alt="Illustration"
              className="w-full max-w-md mx-auto"
            /> */}
          </div>

          {/* Buttons */}
          <div className="p-8 grid grid-cols-1 gap-4 md:p-0">
            <button className="bg-white shadow-md px-4 py-2 rounded-lg text-gray-700 text-sm font-medium hover:shadow-lg">
              Annual Compliance
            </button>
            <button className="bg-white shadow-md px-4 py-2 rounded-lg text-gray-700 text-sm font-medium hover:shadow-lg">
              Payroll Services
            </button>
            <button className="bg-white shadow-md px-4 py-2 rounded-lg text-gray-700 text-sm font-medium hover:shadow-lg">
              Company Formation
            </button>
            <button className="bg-white shadow-md px-4 py-2 rounded-lg text-gray-700 text-sm font-medium hover:shadow-lg">
              Annual Compliance
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
