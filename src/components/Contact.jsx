import React from "react";
import { FaLinkedin, FaWhatsapp, FaTelegram, FaTiktok, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-center bg-slate-900 text-gray-200"
    >
      <h2 className="text-4xl font-futuristic text-cyan-400 mb-12">
        Let’s Connect 🌍
      </h2>

      {/* Circular Social & Call Icons */}
      <div className="flex justify-center gap-6 mb-16">
        <a
          href="tel:+251922852525"
          className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-yellow-400 transition transform hover:-translate-y-1"
        >
          <FaPhoneAlt className="text-xl text-yellow-400 hover:text-slate-900 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/amir-rahemeto-280a74246"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-cyan-400 transition transform hover:-translate-y-1"
        >
          <FaLinkedin className="text-xl text-cyan-400 hover:text-slate-900 transition" />
        </a>

        <a
          href="https://wa.me/251922852525"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-green-400 transition transform hover:-translate-y-1"
        >
          <FaWhatsapp className="text-xl text-green-400 hover:text-slate-900 transition" />
        </a>

        <a
          href="https://t.me/AmirDev25"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-blue-400 transition transform hover:-translate-y-1"
        >
          <FaTelegram className="text-xl text-blue-400 hover:text-slate-900 transition" />
        </a>

        <a
          href="https://t.me/AmirDev60"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-blue-400 transition transform hover:-translate-y-1"
        >
          <FaTelegram className="text-xl text-blue-400 hover:text-slate-900 transition" />
        </a>

        <a
          href="https://www.tiktok.com/@rimasusa?_r=1&_t=ZM-917XHsfrKv5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-pink-400 transition transform hover:-translate-y-1"
        >
          <FaTiktok className="text-xl text-pink-400 hover:text-slate-900 transition" />
        </a>
      </div>

      {/* Comment Section */}
      <div className="max-w-md mx-auto bg-slate-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded bg-slate-700 text-gray-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded bg-slate-700 text-gray-200"
          />
          <textarea
            placeholder="Your Comment"
            className="p-2 rounded bg-slate-700 text-gray-200"
            rows={4}
          />
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold py-2 rounded transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
