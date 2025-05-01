import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-12">
          {/* Icon Circle Container - Responsive sizing */}
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-8 md:mb-0 flex items-center justify-center shrink-0">
            <div className="icon-circle">
              <i className="fab fa-react text-4xl sm:text-5xl text-blue-500 icon"></i>
              <i className="fab fa-js-square text-4xl sm:text-5xl text-yellow-500 icon"></i>
              <i className="fab fa-html5 text-4xl sm:text-5xl text-orange-500 icon"></i>
              <i className="fab fa-css3-alt text-4xl sm:text-5xl text-blue-300 icon"></i>
              <i className="fab fa-bootstrap text-4xl sm:text-5xl text-purple-500 icon"></i>
              <i className="fas fa-palette text-4xl sm:text-5xl text-pink-500 icon"></i>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 w-full">
            <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
              I am a passionate Front-end developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create seamless and
              efficient user experiences.
            </p>

            {/* Skills Section */}
            <div className="space-y-4 px-4 sm:px-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-2/12 text-sm sm:text-base">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-2/12 text-sm sm:text-base">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-2/12 text-sm sm:text-base">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-2/12 text-sm sm:text-base">
                  TailwindCSS & Bootstrap
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 text-center px-4 sm:px-0">
              <div className="p-2 sm:p-4">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  0+
                </h3>
                <p className="text-sm sm:text-base">Years Experience</p>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  6+
                </h3>
                <p className="text-sm sm:text-base">Projects Completed</p>
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p className="text-sm sm:text-base">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .icon-circle {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
        }

        .icon:nth-child(1) { animation: orbit 15s linear infinite; }
        .icon:nth-child(2) { animation: orbit 15s linear infinite; animation-delay: -2.5s; }
        .icon:nth-child(3) { animation: orbit 15s linear infinite; animation-delay: -5s; }
        .icon:nth-child(4) { animation: orbit 15s linear infinite; animation-delay: -7.5s; }
        .icon:nth-child(5) { animation: orbit 15s linear infinite; animation-delay: -10s; }
        .icon:nth-child(6) { animation: orbit 15s linear infinite; animation-delay: -12.5s; }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        /* Extra small devices */
        @media (max-width: 640px) {
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(70px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(70px) rotate(-360deg);
            }
          }
        }

        /* Small devices */
        @media (min-width: 641px) and (max-width: 768px) {
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(80px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(80px) rotate(-360deg);
            }
          }
        }

        /* Medium devices */
        @media (min-width: 769px) and (max-width: 1024px) {
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(90px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(90px) rotate(-360deg);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default About;