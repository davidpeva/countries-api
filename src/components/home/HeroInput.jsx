//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14

import "../../scss/common/_variables.scss";
import "../../scss/sections/components/_hero-input.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>

      {/* INPUT SEARCH */}
      < div className="my-4 px-3" >
        <div className="input-group shadow-sm rounded">
          <span
            className="bg-secondary border-0 input-group-text opacity-50 px-4"
            id="search-country"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="bg-secondary border-0 form-control opacity-50 py-3"
            placeholder="Search for a country..."
            aria-label="search"
            type="search"
            aria-describedby="search-country"
          />
        </div>
      </div>
    </div>
  );
}


