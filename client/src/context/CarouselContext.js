import { createContext, useState } from "react";

// custom Stuff
import { useCreateStrip } from "../hooks/useCreateStrip";

export const CarouselContext = createContext();

export const CarouselContextProvider = ({ children }) => {
  const colorStrip = useCreateStrip(1, [
    "lightgreen",
    "hotpink",
    "yellow",
    "red",
    "white",
  ]);

  const [navColor, setNavColor] = useState(colorStrip.current[1]);

  const changeNavColor = (i) => {
    setNavColor(colorStrip.current[i]);
  };

  return (
    <CarouselContext.Provider value={{ changeNavColor, navColor, colorStrip }}>
      {children}
    </CarouselContext.Provider>
  );
};
