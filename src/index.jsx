import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Logement from "./pages/Logement/Logement";
import APropos from "./pages/APropos/APropos";
import Page404 from "./pages/Page404/Page404";
import Header from "./components/Header/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
