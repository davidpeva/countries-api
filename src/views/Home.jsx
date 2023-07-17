//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14
import { useState, useContext } from "react";
import PropTypes from "prop-types";

import "../../src/scss/common/_variables.scss";
import "../scss/sections/_home.scss";
import "../scss/common/_global.scss"

import HeroInput from "../components/home/HeroInput";
import Dropdown from "../components/home/Dropdown";
import Flags from "../components/home/Flags";
import { ThemeContext } from "../App";


export default function Home() {
  //THIS SETS ME THE FORM INPUT THE READ WHATS IS WRITTEN
  const [formText, setFormText] = useState("");

  //THIS SETS ME THE DROPDOWN
  const [region, setRegion] = useState("");

  const handleRegion = (selectedFilter) => {
    setRegion(selectedFilter);
  };

  const getRegions = () => {
    setRegion("");
  };

  //THIS IS FOR THE COLOR CHANGE
  const { theme } = useContext(ThemeContext);

  return (
    <main className="home-flags" id={theme}>
      <div className="container">
        <div className="pt-4 pt-lg-5 d-lg-flex align-items-lg-center justify-content-lg-between">
          <HeroInput
            handleForm={setFormText}
            formText={formText}
          />
          <Dropdown
            handleRegion={handleRegion}
            getRegions={getRegions}
          />
        </div>
        <Flags
          formText={formText}
          region={region}
        />
      </div>
    </main>
  );
}

Home.propTypes = {
  theme: PropTypes.func.isRequired,
}