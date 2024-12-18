// TabContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Define valid active div types
type ActiveDivType = "biography" | "skills" | "experience";

interface TabContextProps {
  activeAboutTab: ActiveDivType;
  setActiveTab: (tab: ActiveDivType) => void;
}

// Create the context
const TabContext = createContext<TabContextProps | undefined>(undefined);

// Custom hook to use the context
export const useAboutTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

// Context Provider
export const AboutTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeAboutTab, setActiveTab] = useState<ActiveDivType>("biography");

  return (
    <TabContext.Provider value={{ activeAboutTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
