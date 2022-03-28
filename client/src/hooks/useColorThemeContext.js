import { ColorThemeContext } from "../context/ColorThemeContext";
import { useContext } from "react";

export const useColorThemeContext = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useColorThemeContext must be used within its provider");
  }

  return context;
};
