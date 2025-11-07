import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20 px-6 md:px-16 bg-slate-900 text-center overflow-hidden font-orbitron"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle cyan gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffd5]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Futuristic divider */}
        <div className="w-24 h-[2px] bg-cyan-400/60 mx-auto mb-8"></div>

        {/* Paragraphs */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I’m{" "}
          <span className="text-cyan-400 font-medium">Amir Rahemeto</span>, a
          passionate{" "}
          <span className="text-white font-semibold">
            Full Stack Web Developer
          </span>{" "}
          from Addis Ababa, Ethiopia. I build clean, scalable, and futuristic
          web experiences that blend performance and creativity. My key stack
          includes{" "}
          <span className="text-cyan-400">
            React, Node.js, Express, and MongoDB
          </span>
          .
        </motion.p>

        <motion.p
          className="text-gray-400 text-base leading-relaxed max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I enjoy pushing the boundaries of modern web design — crafting bold,
          immersive digital interfaces and seamless user experiences. My
          mission: to bring futuristic ideas to life through clean, elegant code.
        </motion.p>

        {/* Tech Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Front-End", desc: "React • Tailwind • Framer Motion" },
            { title: "Back-End", desc: "Node.js • Express • MongoDB" },
            { title: "Tools", desc: "Git • Docker • Vite • Figma" },
          ].map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 shadow-md hover:border-cyan-400/80 hover:shadow-cyan-400/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 tracking-wide">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
