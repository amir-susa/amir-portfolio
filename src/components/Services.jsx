import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloudUploadAlt, FaDatabase } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building sleek, responsive, and high-performing UIs with React, Tailwind CSS, and JavaScript.",
      icon: <FaCode className="text-cyan-400 text-5xl mb-4" />,
    },
    {
      title: "Backend Development",
      desc: "Designing secure RESTful APIs and server logic using Node.js, Express, and MySQL.",
      icon: <FaServer className="text-cyan-400 text-5xl mb-4" />,
    },
    {
      title: "Database Design",
      desc: "Structuring efficient, reliable databases using MongoDB and MySQL for scalability and performance.",
      icon: <FaDatabase className="text-cyan-400 text-5xl mb-4" />,
    },
    {
      title: "Deployment & Cloud",
      desc: "Seamless deployment with Render, GitHub Pages, and CI/CD pipelines for modern cloud hosting.",
      icon: <FaCloudUploadAlt className="text-cyan-400 text-5xl mb-4" />,
    },
  ];

  // 3D tilt motion handler
  const handleMouseMove = (e, setTilt) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 15) * -1;
    const rotateY = (x - centerX) / 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = (setTilt) => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.section
      id="services"
      className="py-20 px-6 text-center bg-slate-950"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-futuristic text-cyan-400 mb-10">
        What I Offer
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => {
          const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

          return (
            <motion.div
              key={i}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/40 transition duration-300 transform-gpu"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              onMouseMove={(e) => handleMouseMove(e, setTilt)}
              onMouseLeave={() => handleMouseLeave(setTilt)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)",
              }}
            >
              {s.icon}
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                {s.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
