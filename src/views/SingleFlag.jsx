import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/js/bootstrap.min.js";
import "../scss/common/_variables.scss";
import "../scss/common/_global.scss";

import { ThemeContext } from "../App";


export default function SingleFlag() {
  // THIS IS TO SET THE CALL TO THE API
  const [info, setInfo] = useState(null); // Change [] to null

  // HELP ME TO THE DYNAMIC LINK
  const params = useParams();

  //THIS IS FOR THE COLOR CHANGE
  const { theme } = useContext(ThemeContext);

  // CALL TO THE API WITH DYNAMIC LINK
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${params.name}`);
        setInfo(data[0]); // The response is an array, so take the first item
        console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
        setInfo(null); // Set info to null in case of error
      }
    }
    fetchData();
  }, [params]);

  if (info === null) {
    return <div>Loading...</div>; // Render a loading message while data is being fetched or if there's an error
  }

  //CURRENCIES
  //FIRST VERIFY IF INFO.CURRENCIES EXISTS
  const currenciesNames =
    //IF EXIST THEN THE METOHD IS APLLIED
    info.currencies
      //THEN
      ?
      Object.keys(info.currencies).map((currency) => info.currencies[currency].name)
      //IF DO NOT EXISTS IS NULL
      :
      null;

  //IF EXISTS THE JOIN METHOD IS APLIED IS IF NOT N/A IS WRITTEN
  const currenciesNamesString = currenciesNames ? currenciesNames.join(", ") : "N/A";

  //TOP LEVEL DOMAIN
  const topLevelDomain = Object.keys(info.tld).map(() => info.tld[0]);
  const topLevelDomainString = topLevelDomain.join(", ");

  //LANGUAGES
  const languages =
    info.languages
      ?
      Object.keys(info?.languages).map((lang) => info.languages[lang])
      :
      null;

  const languagesStrings = languages ? languages.join(", ") : "N/A";

  //BORDER COUNTRIES
  const bordersCountries =
    info.borders
      ?
      Object.keys(info?.borders).map((border) => info.borders[border])
      :
      null;

  //HERE I ACCESS TO THE KEYS OF THE OBJECT LIKE AN ARRAY
  const nativeNames = Object.keys(info?.name?.nativeName);
  //ONCE I HAVE THE HEY I ACCESS TO THE LAST KEY
  const lastNativeNames = nativeNames[nativeNames.length - 1];
  //ONCE I HAVE THE INDEX I USE IT
  const lastNativeCommon = info?.name?.nativeName[lastNativeNames].common;

  return (
    <main className="vh-100" id={theme}>
      <div className="container">
        <div className="px-3">
          <div className="pt-4 pt-lg-5 d-lg-flex align-items-lg-center justify-content-lg-between">
            <button className="back-button border-0 px-4 py-2 rounded">
              <FontAwesomeIcon icon={faArrowLeft} className="pe-2" />
              Back
            </button>
          </div>


          {/* THE ? IS A CONDITIONAL RENDERING IS LIKE AND IF SI LO ENCUENTRA LO MUESTRA SI NO || no aplica */}
          <div className="mt-5 row gx-5">

            <div className="col-lg-6">
              <img className="w-100" src={info?.flags.png} alt={info?.flags.alt} />
            </div>

            <div className="col-lg-6">
              <div className="mt-5 mt-lg-0">
                <h2 className="fw-bold">{info?.name?.common || "N/A"}</h2>
              </div>
              <div className="mt-4">Native Name:
                <span className="fw-lighter ms-1">
                  {lastNativeCommon || "N/A"}
                </span>
              </div>
              <div className="mt-2">Population:
                <span className="fw-lighter ms-1">
                  {info?.population || "N/A"}
                </span>
              </div>
              <div className="mt-2">Region:
                <span className="fw-lighter ms-1">
                  {info?.region || "N/A"}
                </span>
              </div>
              <div className="mt-2">Sub Region:
                <span className="fw-lighter ms-1">
                  {info?.subregion || "N/A"}
                </span>
              </div>
              <div className="mt-2">Capital:
                <span className="fw-lighter ms-1">
                  {info?.capital || "N/A"}
                </span>
              </div>
              <div className="mt-5">Top Level Domain:
                <span className="fw-lighter ms-1">
                  {topLevelDomainString || "N/A"}
                </span>
              </div>
              <div className="mt-2">Currencies:
                <span className="fw-lighter ms-1">
                  {currenciesNamesString}
                </span>
              </div>
              <div className="mt-2">Languages:
                <span className="fw-lighter ms-1">
                  {languagesStrings}
                </span>
              </div>
              {/* <div className="borders mt-5 d-lg-flex align-items-center">
                <div className="w-lg-30">
                  Border Countries:
                </div>
                <div className="d-flex justify-content-between ms-lg-2 w-lg-70">
                  {
                    bordersCountries
                      ?
                      bordersCountries.map(border => (
                        <button key={border} className="borders-buttons border-0 px-4 py-2 rounded">
                          {border}
                        </button>
                      ))
                      :
                      "N/A"
                  }
                </div> */}
              <div className="borders mt-5 row align-items-center">
                <div className="col-12 col-lg-3">
                  Border Countries:
                </div>
                <div className="col-12 col-lg-9 d-flex justify-content-lg-left">
                  {
                    bordersCountries
                      ?
                      bordersCountries.map(border => (
                        <button key={border} className="borders-buttons border-0 me-4 px-4 py-2 rounded">
                          {border}
                        </button>
                      ))
                      :
                      "N/A"
                  }
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

SingleFlag.propTypes = {
  theme: PropTypes.func.isRequired,
}