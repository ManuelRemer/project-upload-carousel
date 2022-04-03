import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// custom stuff
import { useColorThemeContext } from "../hooks/useColorThemeContext";
// styles
import "./Navbar.css";

const Navigation = () => {
  const location = useLocation();
  const { navColor, linkToHome, dispatch } = useColorThemeContext();

  useEffect(() => {
    location.pathname === "/"
      ? // hardcoded payloads must be converted to dynamic values
        dispatch({ type: "CHANGE_COLOR_CAROUSEL", payload: "lightgreen" })
      : dispatch({ type: "CHANGE_COLOR_INFO", payload: "hotpink" });
  }, [dispatch, location]);

  useEffect(() => {
    document.documentElement.style.setProperty("--nav", navColor);
  }, [navColor]);

  const NavbarContent = () => {
    return <h1 className="nav__inner">Anne Franke</h1>;
  };

  return (
    <div className="nav">
      {!linkToHome && (
        <Link to="/info">
          <NavbarContent />
        </Link>
      )}
      {linkToHome && (
        <Link to="/">
          <NavbarContent />
        </Link>
      )}
    </div>
  );
};

export default Navigation;
