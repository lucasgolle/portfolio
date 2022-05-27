import { createContext, useContext, useState } from "react";

export const LangContext = createContext();

export const Language = ({ children }) => {
  const [portuguese, setportuguese] = useState(true);

  const changePortuguese = () => {
    setportuguese(true);
  };

  const changetoEnglish = () => {
    setportuguese(false);
  };

  return (
    <LangContext.Provider
      value={{ portuguese, changePortuguese, changetoEnglish }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLanguege = () => useContext(LangContext);
