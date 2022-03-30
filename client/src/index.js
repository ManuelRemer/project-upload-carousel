import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./color.css";
import App from "./App";
// custom stuff
import { ColorThemeContextProvider } from "./context/ColorThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
