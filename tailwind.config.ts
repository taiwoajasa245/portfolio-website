import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)']
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        colorSlide: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
        }, 
      },
      animation: {
        "slide-down": "slideDown 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "color-slide": "colorSlide 0.4s ease-out forwards",
      },
      backgroundImage: {
        "highlight-gradient": "linear-gradient(to right, #F0C969, #2D2D2D)",
      },
    },
  },
  plugins: [],
};
export default config;
