import { useState } from "react";
import { Link } from "react-router-dom";
// custom stuff
import { useCarouselContext } from "../hooks/useCarouselContext";
// styles
import "./Navigation.css";

const Navigation = () => {
  const [toHome, setToHome] = useState(false);
  // think about storing toHome in local storage to keep state after reload
  const { navColor, changeNavColor } = useCarouselContext();

  return (
    <div className="nav">
      <h1
        className="nav__inner"
        style={!toHome ? { color: `${navColor}` } : { color: `hotpink` }}
        onClick={() => {
          setToHome(!toHome);
          toHome && changeNavColor(1);
        }}
      >
        {!toHome && <Link to="/info">Anne Franke</Link>}
        {toHome && <Link to="/">Anne Franke</Link>}
      </h1>
    </div>
  );
};

export default Navigation;
