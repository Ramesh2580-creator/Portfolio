import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Figma } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs that captivate your audience. Focusing on modern UI/UX principles and brand consistency.",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern frameworks and best practices for optimal performance.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive and user-centered interfaces that elevate your brand and improve user experience.",
    icon: Figma,
    color: "from-blue-500 to-cyan-500",
  }  
];

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-8 lg:px-16" id="service">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering exceptional digital solutions tailored to your needs
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-pink-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Service Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:border-gray-600 transition-all duration-300 h-full">
                {/* Service Number */}
                <div className="absolute top-4 right-4 text-3xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">
                  {service.id.toString().padStart(2, "0")}
                </div>

                {/* Service Icon */}
                <div className="mb-6">
                  <service.icon className={`w-12 h-12 bg-gradient-to-r ${service.color} p-2 rounded-lg text-white shadow-lg`} />
                </div>

                {/* Service Title */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}>
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="group/btn relative px-6 py-2 rounded-lg overflow-hidden font-semibold">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 group-hover/btn:opacity-40 transition-opacity duration-300`} />
                  <span className={`relative bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}>
                    Learn More
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;