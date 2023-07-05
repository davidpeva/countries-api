import "../src/scss/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./views/Home";

export default function App() {
  return (
    <body>
      <Router>
        <Header />

        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </body>
  );
}
