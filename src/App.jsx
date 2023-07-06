import "../src/scss/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./views/Home";
import SingleFlag from "./views/SingleFlag";

export default function App() {
  return (
    <body>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-flag/" element={<SingleFlag />} />
        </Routes>
      </Router>
    </body>
  );
}
