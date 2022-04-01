import { createContext, useReducer } from "react";

// custom Stuff
import { useCreateStrip } from "../hooks/useCreateStrip";

export const ColorThemeContext = createContext();

const ColorThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_CAROUSEL":
      return { ...state, navColor: action.payload, linkToHome: false };
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
    isReady: false,
  });

  const changeNavColor = (i) => {
    dispatch({
      type: "CHANGE_COLOR_CAROUSEL",
      payload: colorStrip[i],
    });
  };

  return (
    <ColorThemeContext.Provider value={{ ...state, dispatch, changeNavColor }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
