import { useState } from "react";
import { useAboutTabContext } from "@/context/AboutTabContext";
import Image from "next/image";

// Define valid active div types
type ActiveDivType = "biography" | "skills" | "experience";

interface AboutSideNavProps {
  closeModal: () => void;
}

export default function AboutSideNav({ closeModal }: AboutSideNavProps) {
  const { activeAboutTab, setActiveTab } = useAboutTabContext();
  const [activeDiv, setActiveDiv] = useState<ActiveDivType>(activeAboutTab);

  // Individual functions for each div
  const handleBiographyClick = () => {
    console.log("Biography clicked");
    setActiveDiv("biography");
    setActiveTab("biography");
    closeModal();
  };

  const handleSkillsClick = () => {
    console.log("skill clicked");
    setActiveDiv("skills");
    setActiveTab("skills");
    closeModal();
  };

  const handleExperienceClick = () => {
    console.log("experience clicked");
    setActiveDiv("experience");
    setActiveTab("experience");
    closeModal();
  };

  // Define props for the reusable side nav item function
  type SideNavItemProps = {
    label: string;
    tab: ActiveDivType;
    iconSrc: string;
    onClick: () => void;
    isActive: boolean;
  };

  // Reusable render function for side nav items
  const renderSideNavItem = ({
    label,
    tab,
    iconSrc,
    onClick,
    isActive,
  }: SideNavItemProps) => (
    <div
      onClick={() => {
        onClick(); // Call the click handler for each section
        setActiveTab(tab); // Update the active tab in context
      }}
      className={`flex gap-3 items-center mb-8 w-full cursor-pointer ${
        isActive || activeAboutTab === tab ? "bg-[#1E1E1E]" : "bg-transparent"
      }`}
    >
      <Image
        src={iconSrc}
        alt={`${label} Icon`}
        width={14}
        height={14}
        className="object-contain"
      />
      <p className="text-[16px] text-[#F0C969]">{label}</p>
    </div>
  );

  return (
    <div className="mt-5">
      {renderSideNavItem({
        label: "Biography",
        tab: "biography",
        iconSrc: "./arrow-forward-icon.svg",
        onClick: handleBiographyClick,
        isActive: activeDiv === "biography",
      })}
      {renderSideNavItem({
        label: "Skills",
        tab: "skills",
        iconSrc: "./arrow-forward-icon.svg",
        onClick: handleSkillsClick,
        isActive: activeDiv === "skills",
      })}
      {renderSideNavItem({
        label: "Experience",
        tab: "experience",
        iconSrc: "./arrow-forward-icon.svg",
        onClick: handleExperienceClick,
        isActive: activeDiv === "experience",
      })}
    </div>
  );
}
