import { createContext, useState } from "react";

// custom Stuff
import { useCreateStrip } from "../hooks/useCreateStrip";

export const ColorThemeContext = createContext();

export const ColorThemeContextProvider = ({ children }) => {
  const colorStrip = useCreateStrip(1, [
    "lightgreen",
    "hotpink",
    "yellow",
    "red",
    "white",
  ]);

  const [navColor, setNavColor] = useState(colorStrip[1]);

  const changeNavColor = (i) => {
    setNavColor(colorStrip[i]);
  };

  return (
    <ColorThemeContext.Provider
      value={{ changeNavColor, navColor, colorStrip }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
};
