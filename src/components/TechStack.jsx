import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiMysql,
} from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 text-center bg-slate-950">
      <h2 className="text-4xl font-futuristic text-cyan-400 mb-10">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {tech.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px #00FFFF",
            }}
            className="bg-slate-800/60 rounded-xl py-6 px-4 flex flex-col items-center justify-center gap-3 text-lg font-semibold hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/40 transition-all"
          >
            <div className="text-4xl">{item.icon}</div>
            <p>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
