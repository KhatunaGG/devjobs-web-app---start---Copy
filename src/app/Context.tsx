"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import jobsdata from './data.json'
export const GlobalContext = createContext<GlobalContextType | null>(null);


type GlobalContextType = {
  isDesktop: boolean;
  isTablet: boolean;
}



function GlobalContextProvider({ children }: { children: ReactNode }) {
 
  const [data, setData] = useState(jobsdata)





  
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  let windowWidth: windowWidthType;
  type windowWidthType = number;

  const checkWindowSize = () => {
    if (typeof window !== "undefined") {
      windowWidth = window.innerWidth;
    }
    if (windowWidth >= 1024) {
      setIsDesktop(true);
    }
    if (windowWidth >= 768 && windowWidth < 1014) {
      setIsTablet(true);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
  }, [isDesktop]);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", checkWindowSize);
  }





  return <GlobalContext.Provider value={{ isTablet, isDesktop }}>{children}</GlobalContext.Provider>;
}

export default GlobalContextProvider;
