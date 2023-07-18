import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import Pagination from "./Pagination";
import { Link } from 'react-router-dom'

import "../../scss/sections/components/_flags.scss";

export default function Flags({ formText, region }) {

    //THIS HELP ME TO BRING THE FLAGS THE ORIGINAL CALL
    const [item, setItem] = useState([]);

    //THIS IS TO CREATE A COPY FROM THE API THE GENERIC
    const [filterItems, setFilterItems] = useState([]);

    //LOGIC FOR THE PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    //LOGICA PARA LA PAGINACION
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPost = filterItems.slice(indexOfFirstPage, indexOfLastPost);

    //LOGICA PARA DAR CLICK SOBRE UN NUMERO Y QUE SE MUEVA
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //CALL THE API THIS IS WHAT MAKE THE MAGIC HAPPEN
    const getItems = async () => {
        try {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            setItem(res.data)
            setFilterItems(res.data)
        } catch (error) {
            console.log("API Error", error);
        }
    };

    useEffect(() => {
        getItems()
    }, []);

    //THIS ACTIVE THE FORM INPUT
    useEffect(() => {
        const searcher = () => {
            let data = item.filter((flag) => {
                return (
                    flag.name.common.toLowerCase().includes(formText.toLowerCase()) &&
                    //THIS I FOR THE DROPDOWN
                    (region === "" || flag.region.toLowerCase() === region.toLowerCase())
                );
            });
            setFilterItems(data);
        };
        searcher();
    }, [formText, region]);

    return (
        <div className="px-3">
            <div className="mt-lg-5">
                <ul className="flag-ul px-3 px-lg-0" >
                    {
                        //THE CALL WAS MADE TO THE COPY OF THE CALL
                        currentPost.map(flag => (
                            <li className="flag-back list-unstyled my-5 my-lg-0 rounded" key={flag.name.common}>
                                <Link to={`/name/${flag.name.common}`} className="text-decoration-none">
                                <div className="flag-li rounded">
                                    <div className="rounded-top d-flex">
                                        {
                                            flag.flags.png
                                                ?
                                                <img className="flag-img rounded-top shadow-sm" src={flag.flags.png} alt={flag.flags.alt} />
                                                :
                                                // <img className="" src={error} alt="error" /> ACA PONGO LA IMAGEN DE ERROR QUE TENIA EN EL OTRO O LA PAGINA DE ERROR
                                                <img className="flag-img shadow-sm" alt="error" />
                                        }

                                    </div>
                                    <div className="px-4 py-5">
                                        <div className="d-flex">
                                            <div className="fw-bolder text-decoration-none">{flag.name.common}</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="general-info">Population:</div>
                                            <div className="ms-1 text-decoration-none">{flag.population}</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="general-info">Region:</div>
                                            <div className="ms-1 text-decoration-none"> {flag.region}</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="general-info">Capital:</div>
                                            <div className="ms-1 text-decoration-none text-break"> {flag.capital}</div>
                                        </div>
                                    </div>
                                </div>

                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="pagination justify-content-center">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={item.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>

        </div>
    )
}

Flags.propTypes = {
    formText: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
}