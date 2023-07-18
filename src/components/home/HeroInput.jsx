//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14
import PropTypes from "prop-types";

import "../../scss/common/_variables.scss";
import "../../scss/sections/components/_hero-input.scss";
import "../../scss//common/_global.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function HeroInput({ handleForm, formText }) {

  return (
    <div className="px-3" >

      {/* INPUT SEARCH */}
      <div className="box-shadow">
        <div className="input-group shadow-sm rounded">
          <button
            className="input-srch border-0 button input-group-text px-4"
            id="search-country"
            type="button" onClick={(e) => handleForm(e.target.value)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-50" />
          </button>
          <input
            className="input-srch border-0 form-control input py-3"
            placeholder="Search for a country..."
            aria-label="search-country"
            type="search"
            aria-describedby="search-country"
            value={formText}
            onChange={(e) => handleForm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

HeroInput.propTypes = {
  formText: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired
}