import "../../src/scss/common/_variables.scss";
import "../scss/sections/_header.scss";
import "../../src/scss/common/_global.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../App";


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <nav className="nav" id={theme}>
      <div className="nav-bckg d-flex w-100 ">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="nav-home nav-link fw-bold" aria-current="page" href="#">
          Where in the World?
        </a>
        <a
          className="nav-home nav-link"
          type="button"
          onClick={toggleThemeHandler}
          aria-checked={theme === "light"}
        >
          <FontAwesomeIcon icon={faMoon} className="me-2" />
          Dark Mode
        </a>
      </div>
      </div>
      
    </nav>
  );
}