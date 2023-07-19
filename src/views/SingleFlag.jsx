import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "bootstrap/dist/js/bootstrap.min.js";
import "../scss/common/_global.scss";
import "../scss/main.scss";

export default function SingleFlag() {
  // THIS IS TO SET THE CALL TO THE API
  const [info, setInfo] = useState(null); // Change [] to null

  // HELP ME TO THE DYNAMIC LINK
  const params = useParams();

  // CALL TO THE API WITH DYNAMIC LINK
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${params.name}`);
        setInfo(data[0]); // The response is an array, so take the first item
        console.log(data);
      } catch (error) {
        console.log('Error fetching data', error);
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
  const currenciesNamesString = currenciesNames ? currenciesNames.join(', ') : 'N/A';

  //TOP LEVEL DOMAIN
  const topLevelDomain = Object.keys(info.tld).map(() => info.tld[0]);
  const topLevelDomainString = topLevelDomain.join(', ');

  //LANGUAGES
  const languages =
    info.languages
      ?
      Object.keys(info?.languages).map((lang) => info.languages[lang])
      :
      null;

  const languagesStrings = languages ? languages.join(', ') : 'N/A';

  //BORDER COUNTRIES
  const bordersCountries =
    info.borders
      ?
      Object.keys(info?.borders).map((border) => info.borders[border])
      :
      null;

  // const bordersCountriesStrings = bordersCountries ? console.log(bordersCountries.join('-')) : 'N/A';

  return (
    <div>
      {/* THE ? IS A CONDITIONAL RENDERING IS LIKE AND IF SI LO ENCUENTRA LO MUESTRA SI NO || no aplica */}
      <div>Native Name: {info?.name?.common || 'N/A'}</div>
      <div>Population: {info?.population || 'N/A'}</div>
      <div>Region: {info?.region || 'N/A'}</div>
      <div>Sub Region: {info?.subregion || 'N/A'}</div>
      <div>Capital: {info?.capital || 'N/A'}</div>
      <div>Top Level Domain: {topLevelDomainString || 'N/A'}</div>
      <div>Currencies: {currenciesNamesString}</div>
      <div>Languages: {languagesStrings}</div>
      <div>Border Countries:
        {/* <div> */}
          {
            bordersCountries
              ?
              bordersCountries.map(border => (
                <button key={border} className='mx-1'>
                  {border}
                </button>
              ))
              :
              'N/A'
          }
        {/* </div> */}
      </div>
    </div>
  );
}
