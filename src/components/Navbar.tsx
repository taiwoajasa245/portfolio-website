"use client";

import { useState } from "react";
import Image from "next/image";
import AboutSideNav from "@/ui/AboutTab/AboutSideNav";
import ProjectsSideNav from "@/ui/ProjectsTab/ProjectsSideNav";

type TabType = "hello" | "about" | "project";

interface NavbarProps {
  onTabChange: (tab: TabType) => void;
}

export default function Navbar({ onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState<String>("hello");
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTabChange = (tab: TabType) => {
    setIsActive(tab);
    onTabChange(tab);
    setIsOpen(false);
  };

  const renderSideNavContent = () => {
    if (isActive === "project") {
      return <ProjectsSideNav closeModal={() => setIsOpen(false)} />;
    } else if (isActive === "about") {
      return <AboutSideNav closeModal={() => setIsOpen(false)} />;
    } else {
      return (
        <div className="text-center">
          <p>Tab Not Found</p>
        </div>
      );
    }
  };

  const renderSideNavTitle = () => {
    if (isActive === "project") {
      return <p className="text-[25px] text-[#E2E2E2]">Timeline</p>;
    } else if (isActive === "about") {
      return <p className="text-[25px]  text-[#E2E2E2]">About</p>;
    } else {
      return (
        <div className="text-center">
          <p>Title Not found</p>
        </div>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between w-full bg-[#252525]">
      {/* Tab Links */}
      <div className="flex space-x-1">
        <div
          onClick={() => handleTabChange("hello")}
          className={`bg-[#1E1E1E] border-t-4  cursor-pointer ${
            isActive === "hello"
              ? "border-t-[#F0C969] text-[#F0C969]"
              : "border-t-transparent bg-[#2D2D2D] text-[#969696]"
          }`}
        >
          <p className="text-[10px] text-center p-3 ">hello.html</p>
        </div>

        {/* about.css */}

        <div
          onClick={() => handleTabChange("about")}
          className={`bg-[#1E1E1E] border-t-4  cursor-pointer ${
            isActive === "about"
              ? "border-t-[#F0C969] text-[#F0C969]"
              : "border-t-transparent bg-[#2D2D2D] text-[#969696]"
          }`}
        >
          <p className="text-[10px] text-center p-3 ">about.css</p>
        </div>

        {/* project.js  */}

        <div
          onClick={() => handleTabChange("project")}
          className={`bg-[#1E1E1E] border-t-4  cursor-pointer ${
            isActive === "project"
              ? "border-t-[#F0C969] text-[#F0C969]"
              : "border-t-transparent bg-[#2D2D2D] text-[#969696]"
          }`}
        >
          <p className="text-[10px] text-center p-3 ">project.js</p>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      {isActive !== "hello" && (
        <div className={`md:hidden mr-4`}>
          <button onClick={toggleMenu}>
            <Image
              src={isOpen ? "/close-icon.svg" : "/ham-icon.svg"}
              alt="Menu Icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </button>
        </div>
      )}

      {isOpen && isActive !== "hello" && (
        <div className="fixed mt-[75px] mb-[60px] inset-0 z-50 md:hidden">
          <div className="absolute left-0 h-full w-64 bg-[#252525] p-4 transition-transform transform translate-x-0">
            {renderSideNavTitle()}
            {renderSideNavContent()}
          </div>
        </div>
      )}
    </nav>
  );
}
