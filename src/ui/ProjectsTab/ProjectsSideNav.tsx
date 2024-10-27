import { useState } from "react";
import { useProjectTabContext } from "@/context/ProjectTabContext";
import Image from "next/image";

// Define valid active div types
type ActiveDivType = "2024" | "2023" | "2022";

interface AboutSideNavProps {
  closeModal: () => void;
}

export default function ProjectSideNav({ closeModal }: AboutSideNavProps) {
  const { activeProjectTab, setActiveProjectTab } = useProjectTabContext();
  const [activeDiv, setActiveDiv] = useState<ActiveDivType>(activeProjectTab);

  // Individual functions for each div
  const handleBiographyClick = () => {
    console.log("2024 clicked");
    setActiveDiv("2024");
    setActiveProjectTab("2024");
    closeModal();
  };

  const handleSkillsClick = () => {
    console.log("2023 clicked");
    setActiveDiv("2023");
    setActiveProjectTab("2023");
    closeModal();
  };

  const handleExperienceClick = () => {
    console.log("2022 clicked");
    setActiveDiv("2022");
    setActiveProjectTab("2022");
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
        setActiveProjectTab(tab); // Update the active tab in context
      }}
      className={`flex gap-3 items-center mb-8 w-full p-2 cursor-pointer ${
        isActive || activeProjectTab === tab ? "bg-[#1E1E1E]" : "bg-transparent"
      }`}
    >
      <Image
        src={iconSrc}
        alt={`${label} Icon`}
        width={10}
        height={10}
        className="object-contain md-h4"
      />
      <p className="text-[16px] text-[#F0C969]">{label}</p>
    </div>
  );

  return (
    <div className="mt-5">
      {renderSideNavItem({
        label: "2024",
        tab: "2024",
        iconSrc: "./arrow-forward-icon.svg",
        onClick: handleBiographyClick,
        isActive: activeDiv === "2024",
      })}
      {renderSideNavItem({
        label: "2023",
        tab: "2023",
        iconSrc: "./arrow-forward-icon.svg",
        onClick: handleSkillsClick,
        isActive: activeDiv === "2023",
      })}
      {renderSideNavItem({
        label: "2022",
        tab: "2022",
        iconSrc: "./arrow-forward-icon.svg",
        onClick: handleExperienceClick,
        isActive: activeDiv === "2022",
      })}
    </div>
  );
}
