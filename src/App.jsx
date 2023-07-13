import "../src/scss/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./layout/Header";
import Home from "./views/Home";
import SingleFlag from "./views/SingleFlag";

export default function App({ formText }) {
  return (
    <>
      <Router>
        <Header />

        <Routes>

          <Route
            path="/"
            element={
              <Home
                formText={formText}
              />
            }
          />
          <Route
            path="/single-flag/"
            element={
              <SingleFlag />
            }
          />

        </Routes>

      </Router>
    </>
  );
}

App.propTypes = {
  formText: PropTypes.string.isRequired
}
