import React from 'react';
import AboutImage from "../assets/aboutme-image.png";

const Hero = ({ profileImage }) => {
  const handleImageError = (e) => {
    e.target.src = "/hero-image.png";
    e.target.alt = "Profile Placeholder";
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center px-16">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block animate-bounce bg-white/10 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-gradient">
                Ramesh Yadav
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-white/80 font-semibold mt-4">
              Front-End Developer
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl">
              I specialize in building modern and responsive web applications 
              with a focus on user experience and clean code.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <button className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Contact With Me
                <span className="absolute inset-0 w-full h-full rounded-full bg-white/30 animate-ping"></span>
              </button>
              
              <a href="https://drive.google.com/file/d/15l0XucLbbsveJ5hRETkB8AWK0ybL9Vpv/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 rounded-full border-2 border-green-400/50 text-white font-medium
                  transform transition-all duration-300 hover:scale-105 hover:bg-green-400/10">
                  Download CV
                </button>
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              {[
                { name: "GitHub", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "Email", href: "#" }
              ].map(({ name, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white/70 hover:text-white transform transition-all duration-300 hover:scale-110 
                    px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-sm"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-spin"></div>
              <img
                src={profileImage || AboutImage}
                alt="Ramesh Yadav"
                onError={handleImageError}
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-contain  border-4 border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;