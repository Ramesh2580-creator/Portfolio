import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Restaurant from "../assets/Restaurant.png";
import Game from "../assets/game.png";
import Movies from "../assets/movies-search.png";
import BLogs from "../assets/Blogs.png";
import Ecommerce from "../assets/macstore.png";

const projects = [
  {
    id: 1,
    name: "Ecommerce Website",
    technologies: ["React", "Laravel", "MySql"],
    description: "A full-stack Ecommerce website with modern design.",
    image: Ecommerce,
    github: "",
    demo: "https://macstore.com.np",
    category: "Full Stack",
  },
  {
    id: 2,
    name: "Blogs Website",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    description: "A full-stack blogging platform featuring a modern UI, dynamic post creation, and seamless user experience.",
    image: BLogs,
    github: "https://github.com/Ramesh2580-creator/Blogs-Website",
    demo: "https://blogs-website-z5b9.vercel.app/",
    category: "Full Stack",
  },
  {
    id: 3,
    name: "Restaurant Website",
    technologies: ["React", "JavaScript"],
    description: "A modern frontend restaurant website built with React, using array-based data for menu and booking display.",
    image: Restaurant,
    github: "https://github.com/Ramesh2580-creator/Restaurant-Website.git",
    demo: "https://restaurant-website-one-ashy.vercel.app/",
    category: "Frontend",
  },
  {
    id: 4,
    name: "Rock Paper Scissors",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "A classic Rock Paper Scissors game with interactive UI, smooth animations, and real-time score updates using vanilla JavaScript.",
    image: Game,
    github: "https://github.com/Ramesh2580-creator/Rock-paper-scissors-game.git",
    demo: "https://rock-paper-scissors-game-y1d5.vercel.app/",
    category: "Game",
  },
  {
    id: 5,
    name: "Movies Search",
    technologies: ["React","Tailwinds CSS","API"],
    description: "Movie search application with advanced filtering and recommendation system.",
    image: Movies,
    github: "https://github.com/Ramesh2580-creator/Movies-Search.git",
    demo: "https://movies-search-liart-rho.vercel.app/",
    category: "Web App",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-8 lg:px-16" id="project">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my latest work and technical expertise
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Project Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                      {project.name}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-gray-700/30 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;