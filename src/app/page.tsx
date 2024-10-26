"use client";

import { useState } from "react";
import { TabProvider } from "@/context/AboutTabContext";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HomePage from "@/ui/HomePage";
import Footer from "@/components/Footer";
import HelloTabFooter from "@/ui/HelloTaB/Footer";
import { ProjectTabProvider } from "@/context/ProjectTabContext";

type TabType = "hello" | "about" | "project";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("hello"); // State for active tab

  const getContent = () => {
    switch (activeTab) {
      case "hello":
        return <Footer />;
      case "about":
        return <HelloTabFooter />;
      case "project":
        return <HelloTabFooter />;
      default:
        return (
          <p className="text-white text-xl text-center">
            Select a tab to see content.
          </p>
        );
    }
  };

  return (
    <>
      <ProjectTabProvider>
        <TabProvider>
          <div className="w-full h-screen flex flex-col  overflow-y-auto">
            <Header />
            <Navbar onTabChange={setActiveTab} />
            <div className="flex-grow overflow-auto">
              <HomePage activeTab={activeTab} /> {/* Pass activeTab as prop */}
            </div>
            {/* footer */}
            <div>{getContent()}</div>
          </div>
        </TabProvider>
      </ProjectTabProvider>
    </>
  );
}
