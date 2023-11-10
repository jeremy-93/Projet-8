import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const PageErreur = () => {
  return (
    <div>
      <Banner />
      <div className="Erreur404p">
        <div>
          <h1>404</h1>
        </div>
        <div>
          <p>Oups! La page que vous demandez n'existe pas</p>
        </div>
        <NavLink to="/">
          <li className="">Retourner sur la page d'accueil </li>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default PageErreur;
