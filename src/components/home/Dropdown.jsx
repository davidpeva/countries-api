import PropTypes from "prop-types";

import "../../scss/common/_variables.scss";
import "../../scss/sections/components/_dropdown.scss";

export default function Dropdown({ handleRegion, getRegions }) {

    //
    const handleClick = (region) => {
        handleRegion(region);
    };

    //THIS ON CLICK SHOW ME AGAIN ALL REGIONS
    const handleAllRegions = () => {
        getRegions();
    };

    return (
        <div className="px-3">

            {/* DROPDOWN */}
            <div className="box-shadow dropdown mt-5 mt-lg-0">
                <a
                    className="btn-region btn dropdown-toggle shadow-sm p-3"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Filter by Region
                </a>

                <ul className="btn-region dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleClick("Africa")}>
                            Africa
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleClick("Americas")}>
                            Americas
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleClick("Asia")}>
                            Asia
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleClick("Europe")}>
                            Europe
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleClick("Oceania")}>
                            Oceania
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleAllRegions(getRegions)}>
                            All Regions
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    handleRegion: PropTypes.func.isRequired,
    getRegions: PropTypes.func.isRequired
};