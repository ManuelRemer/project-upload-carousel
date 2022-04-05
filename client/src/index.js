import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./color.css";
import App from "./App";
// custom stuff
import { ColorThemeContextProvider } from "./context/ColorThemeContext";
import { AdminContextProvider } from "./context/AdminContext";

ReactDOM.render(
  <React.StrictMode>
    <AdminContextProvider>
      <ColorThemeContextProvider>
        <App />
      </ColorThemeContextProvider>
    </AdminContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
