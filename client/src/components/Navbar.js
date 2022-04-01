import { useEffect, useState } from "react";
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
      ? dispatch({ type: "CHANGE_COLOR_CAROUSEL", payload: "lightgreen" })
      : dispatch({ type: "CHANGE_COLOR_INFO", payload: "hotpink" });
  }, [dispatch, location]);

  useEffect(() => {
    const element = document.querySelector("h1");
    document.documentElement.style.setProperty("--nav", navColor);
    element.style.color = navColor;
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
