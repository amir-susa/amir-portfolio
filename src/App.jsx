import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // ✅ Added Footer import
import "./index.css";

export default function App() {
  return (
    <div className="bg-primary text-white font-orbitron">
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}
