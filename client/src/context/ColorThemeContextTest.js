import { createContext, useState, useEffect, useReducer } from "react";

// custom Stuff
import { useCreateStrip } from "../hooks/useCreateStrip";

export const ColorThemeContext = createContext();

// const ColorThemeReducer = (state, action) => {
//   switch (action.type) {
//     case "INITIAL":
//       return {};
//     default:
//       return state;
//   }
// };

export const ColorThemeContextProvider = ({ children }) => {
  const colorStrip = useCreateStrip(1, [
    "lightgreen",
    "hotpink",
    "yellow",
    "red",
    "white",
  ]);

  // const [state, dispatch] = useReducer(ColorThemeReducer, {
  //   linkToHome: false,
  //   navColor: colorStrip[1],
  // });

  const [navColor, setNavColor] = useState(colorStrip[1]);

  useEffect(() => {
    document.documentElement.style.setProperty("--navbar", navColor);
  }, [navColor]);

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
