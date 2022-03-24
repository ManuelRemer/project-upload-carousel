import { useState } from "react";
import { Link } from "react-router-dom";
// styles
import "./Navigation.css";

const Navigation = () => {
  const [toHome, setToHome] = useState(false);
  return (
    <div className="nav">
      <h1
        className="nav__inner"
        onClick={() => {
          setToHome(!toHome);
        }}
      >
        {!toHome && <Link to="/info">Anne Franke</Link>}
        {toHome && <Link to="/">Anne Franke</Link>}
      </h1>
    </div>
  );
};

export default Navigation;
