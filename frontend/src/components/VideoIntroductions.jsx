import React from "react";

const VideoIntroductions = () => {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Our Video Introductions</h2>
          <p className="text-gray-300 mb-6">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full">
                <span className="text-white text-2xl">💡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Bring those ideas to life
                </h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
          <iframe
  className="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/_HU7i5peA24?autohide=1&showinfo=0&controls=0&modestbranding=1&rel=0"
  title="Video Introduction"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroductions;
