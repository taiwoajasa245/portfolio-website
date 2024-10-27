import HelloTab from "@/ui/HelloTaB/HelloTab";
import AboutTab from '@/ui/AboutTab/AboutTab'; 
import ProjectsTab from "@/ui/ProjectsTab/ProjectsTab"; 


type TabType = "hello" | "about" | "project";

interface HomePageProps {
  activeTab: TabType;
}

export default function HomePage({ activeTab }: HomePageProps) {
  const getContent = () => {
    switch (activeTab) {
      case "hello":
        return <HelloTab />;
      case "about":
        return <AboutTab />;
      case "project":
        return <ProjectsTab />;
      default:
        return (
          <p className="text-white text-xl">Select a tab to see content.</p>
        );
    }
  };

  return <div className="flex items-start  h-screen  w-full">{getContent()}</div>;
}
