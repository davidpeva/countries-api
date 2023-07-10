import { useState, useEffect } from "react"
// import { Link } from 'react-router-dom' ESTO LO DEBO DE USAR CUANDO YA PONG AEL SINGLE FLAG
import "../../scss/sections/components/_flags.scss";

import axios from 'axios'

export default function Flags() {

    //THIS HELP ME TO BRING THE FLAGS
    const [item, setItem] = useState([])


    //THIS ONE  IS TO CALL THE API THIS IS WHAT MAKE THE MAGIC HAPPEN
    const getItems = async () => {
        try {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            setItem(res.data)
            //setFilterItems(res.data) ESTE ES PARA LA BUSQUEDA ACTIVAR DESPUES
        } catch (error) {
            console.log('error Api', error);
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="px-3">
            <div className="mt-lg-5">
                <ul className="flag-ul px-3 px-lg-0" >
                    {
                        //ACA USO CURRENTPOST.MAP Y NO ITEM.MAP PARA QUE SOLO ME ACOMODE LOS 30 CON ITEM.MAP ME ACOMODA LOS 200
                        item.map(flag => (
                            <li className="flag-li bg-secondary list-unstyled my-5 my-lg-0 rounded shadow-sm" key={flag.name.common}>
                                {/* <Link to={`/flag/${flag.name.common}`}> */}
                                <div className="">
                                    <div className="rounded-top">
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

                                {/* </Link> */}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}
