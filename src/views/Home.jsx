//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14
import { useState } from "react";

import "../../src/scss/common/_variables.scss";
import "../scss/sections/_home.scss";

import HeroInput from "../components/home/HeroInput";
import Dropdown from "../components/home/Dropdown";
import Flags from "../components/home/Flags";

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

  return (
    <main className="home-flags container">
      <div className="mt-4 mt-lg-5 d-lg-flex align-items-lg-center justify-content-lg-between">
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
    </main>
  );
}