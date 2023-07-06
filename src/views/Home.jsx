//ACA EN EL HOME LAS LETRAS DEBEN DE SER TAMAÑO 14

import "../../src/scss/common/_variables.scss";
import "../scss/sections/_home.scss";

import HeroInput from "../components/home/HeroInput";
import Dropdown from "../components/home/Dropdown";

export default function Header() {
  return (
    <main className="home-flags container">

      <div className="mt-4 mt-lg-5 d-lg-flex align-items-lg-center justify-content-lg-between">
        <HeroInput />
        <Dropdown />
      </div>


    </main>
  );
}
