/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#111827",
        accent: "#00FFD5",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"], // 👈 clean, custom family
        sans: ["Orbitron", "sans-serif"], // 👈 makes Orbitron global by default
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg-stars.jpg')",
      },
    },
  },
  plugins: [],
};
