import HelloTab from "@/ui/HelloTaB/HelloTab";
import AboutTab from "@/ui/AboutTab/AboutTab";
import ProjectsTab from "@/ui/ProjectsTab/ProjectsTab";

type TabType = "hello" | "about" | "project";

interface HomePageProps {
  activeTab: TabType;
}

export default function HomePage({ activeTab }: HomePageProps) {
  const getContent = () => {
    switch (activeTab) {
      case "hello":
        return (
          <div className="flex items-start md:items-center lg:items-start w-full h-full">
            <HelloTab />
          </div>
        );
      case "about":
        return (
          <div className="flex items-start md:items-start lg:items-start w-full h-full">
            {" "}
            <AboutTab />{" "}
          </div>
        );
      case "project":
        return (
          <div className="flex items-start lg:items-start h-full w-full">
            {" "}
            <ProjectsTab />{" "}
          </div>
        );

      default:
        return (
          <p className="text-white text-xl">Select a tab to see content.</p>
        );
    }
  };

  return <>{getContent()} </>;
}
