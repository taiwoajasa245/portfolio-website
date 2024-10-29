import DownloadResume from "@/ui/HelloTaB/button";
import { useEffect, useState } from "react";

export default function Grettings() {
  const [text, setText] = useState(""); // Holds the currently typed text
  const [deleting, setDeleting] = useState(false); // Track deletion state
  const [colorIndex, setColorIndex] = useState(0); // Track the color cycle
  const [showCursor, setShowCursor] = useState(true); // For blinking cursor
  const [charIndex, setCharIndex] = useState(0); // Track current character index

  const fullText = "Ajasa Taiwo"; // The full text to type
  const textColors = ["#F0C969", "#79A0BC", "#FDFDFD"]; // Array of colors

  useEffect(() => {
    // Typing and deleting logic
    const typeInterval = setInterval(() => {
      if (!deleting && charIndex < fullText.length) {
        // Add a character if not deleting
        setText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1); // Move to the next character
      } else if (deleting && charIndex > 0) {
        // Remove a character during deletion
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1); // Move backwards
      } else if (charIndex === 0 && deleting) {
        // Switch color and start typing again when deletion completes
        setDeleting(false);
        setColorIndex((prev) => (prev + 1) % textColors.length); // Cycle color
      } else if (charIndex === fullText.length) {
        // When typing is complete, initiate deletion after a short pause
        setTimeout(() => setDeleting(true), 1000);
      }
    }, 150); // Adjust typing/deleting speed

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [charIndex, deleting]); // Re-run effect when charIndex or deleting changes

  return (
    <>
      <div className="ml-5 mt-16 overflow-auto h-full">
        <h1 className="text-[#FDFDFD]">
          Hello! I am <span className="md:text-[25px]">👋🏽</span>
        </h1>

        {/* Typewriter effect with dynamic color and blinking cursor */}
        <h1
          className="text-[27px] md:text-[40px] md:tracking-[10px] tracking-widest "
          style={{ color: textColors[colorIndex] }} // Apply the current color
        >
          {text}
          <span
            className={`${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            |
          </span>
        </h1>

        <p className="text-[#79A0BC]">I am a backend developer</p>

        <DownloadResume />
      </div>
    </>
  );
}
