import React from "react";

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center px-4 py-2 space-y-2 sm:space-y-0">
      {/* Left Section: Logo or Brand Name */}
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <span className="font-bold text-lg sm:text-xl">RegisterKaro</span>
      </div>

      {/* Right Section: Email, Phone, and Social Icons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 w-full sm:w-auto space-y-2 sm:space-y-0">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=100&id=60688&format=png&color=FFFFFF"
            alt="mail"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <a
            href="mailto:www.registerkaro.in"
            className="hover:underline break-all"
          >
            www.registerkaro.in
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-lg sm:text-xl">phone</span>
          <a href="tel:+918447746183" className="hover:underline">
            +918447746183
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start space-x-4">
          <a href="#" aria-label="Facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
              alt="Twitter"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>
          <a href="#" aria-label="Pinterest">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              alt="Pinterest"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
