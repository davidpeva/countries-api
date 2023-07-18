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

  return (
    <div>
      {/* THE ? IS A CONDITIONAL RENDERING IS LIKE AND IF SI LO ENCUENTRA LO MUESTRA SI NO || no aplica */}
      <div>Name: {info?.name?.common || 'N/A'}</div>
      <div>Capital: {info?.capital || 'N/A'}</div>
      <div>Currencies: {info?.currencies ? Object.keys(info.currencies).join(', ') : 'N/A'}</div>
      <div>Population: {info?.population || 'N/A'}</div>
    </div>
  );
}
