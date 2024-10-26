import { Metadata } from "next";
import NumbersList from "@/components/NumberLIst";
// import ProjectsTabContent from "./ProjectsTabContent";
import Project_2024 from "./Project_2024";
import Project_2023 from "./Project_2023";
import { useTabContext } from "@/context/ProjectTabContext";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function ProjectsTab() {
  const { activeTab } = useTabContext();

  const renderContent = () => {
    switch (activeTab) {
      case "2024":
        return <Project_2024 />;
      case "2023":
        return <Project_2023 />;
      case "2022":
        return <Project_2024 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-start ml-2">
        {/*  number-list */}
        <NumbersList />

        <div className=" ml-3">
          {/* <ProjectsTabContent /> */}
          {renderContent()}
        </div>
      </div>
    </>
  );
}
