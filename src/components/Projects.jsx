import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaChartLine, FaGavel } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Procedural Art Generator (Front-End)",
      desc: "A dynamic front-end app generating unique digital art using HTML Canvas and JavaScript. Implements sliders and color pickers for real-time manipulation.",
      icon: <FaPaintBrush className="text-cyan-400 text-3xl inline-block mb-3" />,
      img: "/images/art.PNG",
      github: "https://github.com/amir-susa/procedural-art-generator",
      live: "https://amir-susa.github.io/procedural-art-generator/",
    },
    {
      title: "Personal Finance Dashboard (API-Driven)",
      desc: "An API-driven dashboard displaying real-time financial data using JavaScript. Handles external API errors gracefully for a seamless UX.",
      icon: <FaChartLine className="text-cyan-400 text-3xl inline-block mb-3" />,
      img: "/images/Dashboard.PNG",
      github: "https://github.com/amir-susa/Personal-Finance-Dashboard-API-Driven-",
      live: "https://amir-susa.github.io/Personal-Finance-Dashboard-API-Driven-/",
    },
    {
      title: "Online Auction Site (Full-Stack)",
      desc: "A full MERN stack web app enabling real-time online auctions. Implements REST API, MongoDB database, and WebSockets for live bid updates.",
      icon: <FaGavel className="text-cyan-400 text-3xl inline-block mb-3" />,
      img: "/images/auction.PNG",
      github: "https://github.com/amir-susa/An-Online-Auction-Site-Full-Stack-",
      live: "https://an-online-auction-site-full-stack.onrender.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 text-center">
      <h2 className="text-4xl font-futuristic text-cyan-400 mb-10">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/70 rounded-2xl overflow-hidden shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/60 transition-all border border-slate-700"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition duration-500"
            />
            <div className="p-6">
              {p.icon}
              <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
