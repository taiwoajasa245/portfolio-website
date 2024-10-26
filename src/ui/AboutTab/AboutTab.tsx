import { Metadata } from "next";
import { useTabContext } from "@/context/AboutTabContext";
import Biography from "./Biography";
import NumbersList from "@/components/NumberLIst";
import Skills from "./Skills";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function AboutTab() {
  const { activeTab } = useTabContext();

  const renderContent = () => {
    switch (activeTab) {
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

  return (
    <>
      <div className="flex items-center ">
        {/*  number-list */}
        <NumbersList />

        {/* about me  */}
        {/* <Biography /> */}
        {renderContent()}
      </div>
    </>
  );
}
