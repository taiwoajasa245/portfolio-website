// TabContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Define valid active div types
type ActiveDivType = "biography" | "skills" | "experience";

interface TabContextProps {
  activeTab: ActiveDivType;
  setActiveTab: (tab: ActiveDivType) => void;
}

// Create the context
const TabContext = createContext<TabContextProps | undefined>(undefined);

// Custom hook to use the context
export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

// Context Provider
export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<ActiveDivType>("biography");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
