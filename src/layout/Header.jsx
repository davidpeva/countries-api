import "../../src/scss/common/_variables.scss";
import "../scss/sections/_header.scss";

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
    <nav className="nav shadow-sm d-flex" id={theme}>
      <div className="container d-flex align-items-center justify-content-between">
        <a className="nav-link fw-bold" aria-current="page" href="#">
          Where in the World?
        </a>
        <a
          className="nav-link"
          type="button"
          onClick={toggleThemeHandler}
          aria-checked={theme === "light"}
        >
          <FontAwesomeIcon icon={faMoon} className="me-2" />
          Dark Mode
        </a>
      </div>
    </nav>
  );
}