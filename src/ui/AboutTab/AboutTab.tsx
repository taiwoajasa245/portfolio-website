import { Metadata } from "next";
import { useAboutTabContext } from "@/context/AboutTabContext";
import { useTabContext } from "@/context/TabContext";
import Biography from "./Biography";
import NumbersList from "@/components/NumberLIst";
import Skills from "./Skills";
import AboutSideNav from "./AboutSideNav";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function AboutTab() {
  const { activeAboutTab } = useAboutTabContext();
  const { activeTab } = useTabContext();

  const renderContent = () => {
    switch (activeAboutTab) {
      case "biography":
        return <Biography />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Biography />;
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
      <div className="flex items-center h-screen bg-emerald-700">
        <div className="h-screen w-[276px] bg-[#252525] hidden md:flex md:flex-col ">
          <div className="mt-5">{renderSideNavTitle()}</div>
          <AboutSideNav closeModal={() => null} />
        </div>

        {/*  number-list */}
        <NumbersList />

        {renderContent()}
      </div>
    </>
  );
}
