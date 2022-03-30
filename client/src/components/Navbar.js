import { useState } from "react";
import { Link } from "react-router-dom";
// custom stuff
import { useColorThemeContext } from "../hooks/useColorThemeContext";
// styles
import "./Navbar.css";

const Navigation = () => {
  const [toHome, setToHome] = useState(false);
  // think about storing toHome in local storage to keep state after reload
  const { navColor, dispatch, linkToHome, changeNaveColor } =
    useColorThemeContext();

  return (
    <div className="nav">
      <h1
        className="nav__inner"
        style={
          !toHome
            ? {
                // color: navColor,
                transition: "color 0.2s ease-in-out 0s",
                WebkitTransition: "color 0.2s ease-in-out 0s",
                color: `var(--navbar)`,
              }
            : {
                color: `var(--navbar)`,
                transition: "color 0.2s ease-in-out 0s",
                WebkitTransition: "color 0.2s ease-in-out 0s",
              }
        } // receives a variable whose value is specified by the user
        onClick={() => {
          changeNaveColor(1);
        }}
      >
        {!linkToHome && <Link to="/info">Anne Franke</Link>}
        {linkToHome && <Link to="/">Anne Franke</Link>}
      </h1>
    </div>
  );
};

export default Navigation;
