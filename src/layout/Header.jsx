import "../../src/scss/common/_variables.scss";
import "../scss/sections/_header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <nav className="nav bg-secondary shadow-sm d-flex">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="nav-link fw-bold" aria-current="page" href="#">
          Where in the World?
        </a>

        <a className="nav-link">
          <FontAwesomeIcon icon={faMoon} className="me-2" />
          Dark Mode
        </a>
      </div>
    </nav>
  );
}
