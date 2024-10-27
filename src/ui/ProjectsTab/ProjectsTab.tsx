import { Metadata } from "next";
import NumbersList from "@/components/NumberLIst";
// import ProjectsTabContent from "./ProjectsTabContent";
import Project_2024 from "./Project_2024";
import Project_2023 from "./Project_2023";
import { useProjectTabContext } from "@/context/ProjectTabContext";
import { useTabContext } from "@/context/TabContext";
import ProjectSideNav from "./ProjectsSideNav";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function ProjectsTab() {
  const { activeTab } = useTabContext();
  const { activeProjectTab } = useProjectTabContext();

  const renderContent = () => {
    switch (activeProjectTab) {
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
    <>
      <div className="flex items-start w-full h-full ">
        <div className="h-full w-[380px] bg-[#252525] hidden md:flex md:flex-col  ">
          <div className="p-5">{renderSideNavTitle()}</div>
          <ProjectSideNav closeModal={() => null} />
        </div>

        {/*  number-list */}
        <NumbersList />

        <div className=" ml-3 h-full overflow-auto scrollbar-hide ">
          {/* <ProjectsTabContent /> */}
          {renderContent()}
        </div>
      </div>
    </>
  );
}
