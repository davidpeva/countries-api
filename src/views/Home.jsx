//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14

import "../../src/scss/common/_variables.scss";
import "../scss/sections/_home.scss";

import HeroInput from "../components/home/HeroInput";

export default function Header() {
  return (
    <main className="home-flags container">

      <HeroInput/>

      {/* Dropdown */}
      <div className="dropdown px-3">
        <a
          className="btn btn-secondary bg-secondary dropdown-toggle shadow-sm mt-3 mb-4 p-3 w-50 w-lg-25"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by Region
        </a>

        <ul className="dropdown-menu bg-secondary border-0" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              Africa
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              America
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Asia
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
