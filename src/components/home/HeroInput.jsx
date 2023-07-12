//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14

import "../../scss/common/_variables.scss";
import "../../scss/sections/components/_hero-input.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  
  return (
    <div className="px-3" >

      {/* INPUT SEARCH */}
      <div>
        <div className="input-group shadow-sm rounded">
          <span
            className="bg-secondary border-0 input-group-text px-4"
            id="search-country"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-50"/>
          </span>
          <input
            className="bg-secondary border-0 form-control py-3"
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


