import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";

// ✨ Natural Dynamic Typing Hook
function useDynamicTyping(phrases, pause = 1500) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timer;

    const randomTypingSpeed = () => Math.floor(Math.random() * 40) + 80; // 80–120ms

    if (!deleting && display.length < current.length) {
      // Typing characters
      timer = setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1));
      }, randomTypingSpeed());
    } else if (deleting && display.length > 0) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplay(current.slice(0, display.length - 1));
      }, randomTypingSpeed() * 0.6); // a bit faster when deleting
    } else if (!deleting && display.length === current.length) {
      // Pause at end
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length === 0) {
      // Move to next phrase
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [display, deleting, index, phrases, pause]);

  return display;
}

export default function Hero() {
  const phrases = [
    "Code the Future.",
    "Do More.",
    "Full Stack Developer, Futuristic Creator.",
  ];
  const typed = useDynamicTyping(phrases);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine));
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 45, density: { enable: true, area: 800 } },
      color: { value: "#00ffd5" },
      links: {
        enable: true,
        distance: 180,
        color: "#00ffd5",
        opacity: 0.2,
        width: 1,
      },
      move: { enable: true, speed: 0.9 },
      opacity: { value: 0.5 },
      size: { value: 1.5 },
    },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const sections = [
    "home",
    "about",
    "tech-stack",
    "services",
    "projects",
    "contact",
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white font-[Orbitron]"
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md px-6 md:px-20 py-4 flex justify-between items-center shadow-lg border-b border-[#00ffd5]/20"
      >
        <div
          className="text-white font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Amir
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {sections.map((item) => (
            <li
              key={item}
              className="cursor-pointer capitalize hover:text-[#00ffd5] transition-colors"
              onClick={() => scrollToSection(item)}
            >
              {item.replace("-", " ")}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-black/90 backdrop-blur-lg text-white flex flex-col items-center gap-6 py-6 z-20 md:hidden"
          >
            {sections.map((item) => (
              <div
                key={item}
                className="text-lg capitalize cursor-pointer hover:text-[#00ffd5]"
                onClick={() => scrollToSection(item)}
              >
                {item.replace("-", " ")}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles id="tsparticles" options={particlesOptions} />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 mt-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left max-w-xl space-y-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#00ffd5]">
            Hi, I’m <span className="font-bold text-white">Amir</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Full Stack Web Developer 🚀 | Building bold, futuristic digital
            experiences.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 flex items-center">
            {typed}
            <motion.span
              className="text-[#00ffd5]"
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-[#00ffd5]/30 animate-pulse" />
          <img
            src="/images/amir-profile.png"
            alt="Amir Rahemeto"
            className="relative w-64 sm:w-72 md:w-[520px] lg:w-[560px] rounded-full object-cover shadow-[0_0_40px_#00ffd540] transition-all duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
