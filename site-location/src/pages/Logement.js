import React from "react";
import { useParams } from "react-router-dom";
import data from "../components/dataLogements.json"; // Modifiez le chemin d'importation ici

const Logement = () => {
  const { identifiant } = useParams();

  const logement = data.find((element) => element.identifiant === identifiant);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-details">
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      {/* Affichez d'autres informations sur le logement ici */}
    </div>
  );
};

export default Logement;
