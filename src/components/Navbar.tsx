"use client";

import { useState } from "react";
import Image from "next/image";
import AboutSideNav from "@/ui/AboutTab/AboutSideNav";
import ProjectsSideNav from "@/ui/ProjectsTab/ProjectsSideNav";
import { useTabContext } from "@/context/TabContext";


type TabType = "hello" | "about" | "project";

interface NavbarProps {
  onTabChange: (tab: TabType) => void;
}

export default function Navbar({ onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  // const [isActive, setIsActive] = useState<string>("hello");
  const { activeTab, setActiveTab } = useTabContext();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    onTabChange(tab);
    setIsOpen(false);
  };

  const renderSideNavContent = () => {
    if (activeTab === "project") {
      return <ProjectsSideNav closeModal={() => setIsOpen(false)} />;
    } else if (activeTab === "about") {
      return <AboutSideNav closeModal={() => setIsOpen(false)} />;
    } else {
      return (
        <div className="text-center ">
          <p>Tab Not Found</p>
        </div>
      );
    }
  };

  const renderSideNavTitle = () => {
    if (activeTab === "project") {
      return <p className="text-[25px] text-[#E2E2E2]">Timeline</p>;
    } else if (activeTab === "about") {
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
    <nav className={`flex items-center justify-between w-full bg-[#252525]  `}>
      {/* Tab Links */}
      <div className="flex">
        <div
          onClick={() => handleTabChange("hello")}
          className={`bg-[#1E1E1E] border-t-4  cursor-pointer ${
            activeTab === "hello"
              ? "border-t-[#F0C969] text-[#F0C969]  drop-shadow-none"
              : "border-t-transparent bg-[#2D2D2D] text-[#969696]  drop-shadow-lg"
          }`}
        >
          <p className="text-[10px] text-center p-3  md:px-10 md:text-[12px] ">hello.html</p>
        </div>

        {/* about.css */}

        <div
          onClick={() => handleTabChange("about")}
          className={`bg-[#1E1E1E] border-t-4  cursor-pointer mx-[1px] ${
            activeTab === "about"
              ? "border-t-[#F0C969] text-[#F0C969]  drop-shadow-none"
              : "border-t-transparent bg-[#2D2D2D] text-[#969696]  drop-shadow-lg"
          }`}
        >
          <p className="text-[10px] text-center p-3 md:px-10 md:text-[12px] ">about.css</p>
        </div>

        {/* project.js  */}

        <div
          onClick={() => handleTabChange("project")}
          className={`bg-[#1E1E1E] border-t-4  cursor-pointer ${
            activeTab === "project"
              ? "border-t-[#F0C969] text-[#F0C969]  drop-shadow-none"
              : "border-t-transparent bg-[#2D2D2D] text-[#969696] drop-shadow-lg"
          }`}
        >
          <p className="text-[10px] text-center p-3  md:px-10 md:text-[12px] ">project.js</p>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      {activeTab !== "hello" && (
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

      {isOpen && activeTab !== "hello" && (
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
