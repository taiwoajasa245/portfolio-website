// TabContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Define valid active div types
type ActiveDivType = "2024" | "2023" | "2022";

interface TabContextProps {
  activeProjectTab: ActiveDivType;
  setActiveProjectTab: (tab: ActiveDivType) => void;
}

// Create the context
const TabContext = createContext<TabContextProps | undefined>(undefined);

// Custom hook to use the context
export const useProjectTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

// Context Provider
export const ProjectTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeProjectTab, setActiveProjectTab] = useState<ActiveDivType>("2024");

  return (
    <TabContext.Provider value={{ activeProjectTab, setActiveProjectTab }}>
      {children}
    </TabContext.Provider>
  );
};
