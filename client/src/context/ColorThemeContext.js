import { createContext, useState, useEffect, useReducer } from "react";

// custom Stuff
import { useCreateStrip } from "../hooks/useCreateStrip";

export const ColorThemeContext = createContext();

const ColorThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_CAROUSEL":
      return { ...state, navColor: action.payload };
    case "CHANGE_COLOR_INFO":
      return { ...state, navColor: "hotpink", linkToHome: true };
    default:
      return state;
  }
};

export const ColorThemeContextProvider = ({ children }) => {
  const colorStrip = useCreateStrip(1, [
    "lightgreen",
    "hotpink",
    "yellow",
    "red",
    "white",
  ]);

  const [state, dispatch] = useReducer(ColorThemeReducer, {
    linkToHome: false,
    navColor: colorStrip[1],
    activeIndex: 1,
  });

  const { navColor } = state;
  console.log(navColor);

  const changeNavColor = (i) => {
    dispatch({ type: "CHANGE_COLOR_CAROUSEL", payload: colorStrip[i] });
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--navbar", navColor);
  }, [navColor]);

  return (
    <ColorThemeContext.Provider value={{ ...state, dispatch, changeNavColor }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
