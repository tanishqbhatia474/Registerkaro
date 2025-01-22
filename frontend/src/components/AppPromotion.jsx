import React from "react";

const AppPromotion = () => {
  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Manage Your Services by Your Mobile Phone
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress seamlessly.
          </p>
          {/* App Store Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="bg-white text-gray-900 font-medium px-4 py-2 rounded flex items-center shadow-md hover:shadow-lg transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                alt="App Store"
                className="w-6 h-6 mr-2"
              />
              Get it on App Store
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 font-medium px-4 py-2 rounded flex items-center shadow-md hover:shadow-lg transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Play_Arrow_logo.svg"
                alt="Google Play"
                className="w-6 h-6 mr-2"
              />
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <div className="flex justify-center lg:justify-end relative">
            {/* First Image */}
            <img
              src="https://via.placeholder.com/300x500" // Replace with the actual app screenshot
              alt="App Screenshot 1"
              className="w-40 h-auto lg:w-60 rounded-lg shadow-lg"
            />
            {/* Second Image */}
            <img
              src="https://via.placeholder.com/300x500" // Replace with the actual app screenshot
              alt="App Screenshot 2"
              className="w-40 h-auto lg:w-60 -ml-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
