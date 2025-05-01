import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#service", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/home" 
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            Ramesh
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm uppercase tracking-wider hover:text-green-400 transition-colors duration-300 py-2
                  after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-400 
                  after:left-0 after:-bottom-1 after:transition-all after:duration-300
                  hover:after:w-full font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full
            hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
            Connect Me
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
          <div className="flex flex-col space-y-4 pt-4 pb-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-center py-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full
              hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 mx-auto">
              Connect Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;