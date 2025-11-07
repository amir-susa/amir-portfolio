import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTiktok,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-400 py-10 border-t border-slate-800 text-center">
      {/* glowing gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-pulse" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/amir-rahemeto-280a74246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/amir-susa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:-translate-y-1"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:amirrahemeto@gmail.com"
            className="hover:text-cyan-400 transition transform hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/251922852525"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition transform hover:-translate-y-1"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://t.me/AmirDev25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:-translate-y-1"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.tiktok.com/@rimasusa?_r=1&_t=ZM-917XHsfrKv5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition transform hover:-translate-y-1"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-4" />

        {/* Footer Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Amir Rahemeto</span> — Crafted
          with Passion ⚡ | Built using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
