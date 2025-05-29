import { createContext, useContext, useState } from "react";

const SettingContext = createContext(undefined);

export const SettingProvider = ({ children }) => {
  const [setting, changeSetting] = useState({
    difficulty: "all",
    tag: "all",
  });

  return (
    <SettingContext.Provider value={{ setting, changeSetting }}>
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSetting must be used within a SettingProvider");
  }
  return context;
};
