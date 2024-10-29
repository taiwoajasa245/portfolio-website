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
      return (
        <p className="md:text-[25px] text-[18px] p-3 text-[#E2E2E2]">
          Timeline
        </p>
      );
    } else if (activeTab === "about") {
      return (
        <p className="md:text-[25px] text-[18px] p-5 text-[#E2E2E2]">About</p>
      );
    } else {
      return (
        <div className="text-center">
          <p>Title Not found</p>
        </div>
      );
    }
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between w-full bg-[#252525] lg:animate-slide-down `}
     
      >
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
            <p className="text-[11px] text-center p-3 px-5  md:px-10 md:text-[12px] ">
              Hello
            </p>
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
            <p className="text-[11px] text-center p-3  px-5 md:px-10 md:text-[12px] ">
              About
            </p>
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
            <p className="text-[11px] text-center p-3 px-5 md:px-10 md:text-[12px] ">
              Project
            </p>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        {activeTab !== "hello" && (
          <div className={`md:hidden mr-4`}>
            <button onClick={toggleMenu}>
              <Image
                src="/ham-icon.svg"
                alt="Menu Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </div>
        )}

      </nav>
      {isOpen && activeTab !== "hello" && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)} // Close modal on backdrop click
          />

          {/* Modal Content */}
          <div className="relative bg-[#252525] w-[250px]  p-4 rounded-xl shadow-lg flex flex-col">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            {renderSideNavTitle()}
            {renderSideNavContent()}
          </div>
        </div>
      )}
    </>
  );
}
