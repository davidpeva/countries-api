import { createContext, useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./layout/Header";
import Home from "./views/Home";
import SingleFlag from "./views/SingleFlag";

import "../src/scss/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/scss/common/_global.scss";


export const ThemeContext = createContext(null);

export default function App({ formText }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home formText={formText} />} />
            <Route
              path="/name/:name"
              element={
                <SingleFlag
                />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

App.propTypes = {
  formText: PropTypes.string.isRequired,
  theme: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}