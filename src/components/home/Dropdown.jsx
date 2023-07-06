
import "../../scss/common/_variables.scss";
import "../../scss/sections/components/_dropdown.scss";

export default function Dropdown() {
    return (
        <div className="px-3">

            {/* Dropdown */}
            <div className="dropdown mt-5 mt-lg-0">
                <a
                    className="btn btn-secondary bg-secondary dropdown-toggle shadow-sm p-3"
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
        </div>
    )
}
