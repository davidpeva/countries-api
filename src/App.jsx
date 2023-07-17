import "../src/scss/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/scss/common/_global.scss";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./layout/Header";
import Home from "./views/Home";
import SingleFlag from "./views/SingleFlag";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function App({ formText }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home formText={formText} />} />
            <Route path="/single-flag/" element={<SingleFlag />} />
          </Routes>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

App.propTypes = {
  formText: PropTypes.string.isRequired,
  theme: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired
}