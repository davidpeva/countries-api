import { useState, useEffect } from "react"
// import { Link } from 'react-router-dom' ESTO LO DEBO DE USAR CUANDO YA PONG AEL SINGLE FLAG

import axios from 'axios'

export default function Flags() {

    //THIS HELP ME TO BRING THE FLAGS
    const [item, setItem] = useState([])


    //THIS ONE  IS TO CAL THE API THIS IS WHAT MAKE THE MAGIC HAPPEN
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
            <ul className="ps-0" >
                {
                    //ACA USO CURRENTPOST.MAP Y NO ITEM.MAP PARA QUE SOLO ME ACOMODE LOS 30 CON ITEM.MAP ME ACOMODA LOS 200
                    item.map(flag => (
                        <li className="list-unstyled" key={flag.name.common}>
                            {/* <Link to={`/flag/${flag.name.common}`}> */}
                            <div className="">
                                {
                                    flag.flags.png
                                        ?
                                        <img className="" src={flag.flags.png} alt={flag.flags.alt} />
                                        :
                                        // <img className="" src={error} alt="error" /> ACA PONGO LA IMAGEN DE ERROR QUE TENIA EN EL OTRO O LA PAGINA DE ERROR
                                        <img className="" alt="error" />
                                }

                            </div>
                            <div className="">
                                <div className="d-flex">
                                    <div className="text-decoration-none">{flag.name.common}</div>
                                </div>
                                <div className="d-flex">
                                    <div>Population:</div>
                                    <div className="ms-1 text-decoration-none">{flag.population}</div>
                                </div>
                                <div className="d-flex">
                                    <div>Region:</div>
                                    <div className="ms-1 text-decoration-none"> {flag.region}</div>
                                </div>
                                <div className="d-flex">
                                    <div>Capital:</div>
                                    <div className="ms-1 text-decoration-none"> {flag.capital}</div>
                                </div>
                            </div>
                            {/* </Link> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
