import { createContext, useContext, useState, ReactNode } from "react";

// Define valid active tab types
type ActiveTabType = "hello" | "about" | "project";

interface TabContextProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
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
  const [activeTab, setActiveTab] = useState<ActiveTabType>("hello");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
