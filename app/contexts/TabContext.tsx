'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface TabContextType {
  activeTab: string;
  setActiveTab: any;
}

// Create the context with an initial default value
const TabContext = createContext<TabContextType | undefined>(undefined);

// Create a provider component
export const TabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>('about');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Custom hook to use the TabContext
export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
