import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ImageBanner from "../components/ImageBanner";
import TextApropos from "../components/TextApropos";
const Apropos = () => {
  return (
    <div>
      <Banner />
      <div className="imagebannerApropos">
        <ImageBanner imageUrl="./montagne.png" showTitle={false} />
      </div>

      <div>
        <TextApropos
          titre={"Fiabilité"}
          paragraphe={
            "Les annonces postées bienveillance faiLes annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.t partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.stées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
      </div>

      <div>
        <TextApropos
          titre={"Respect"}
          paragraphe={
            "La bienveillance fait La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
      </div>

      <div>
        <TextApropos
          titre={"Service"}
          paragraphe={
            "La bienveillaLa bienveillance fait partie deLa sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.s valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.nce fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
      </div>

      <div>
        <TextApropos
          titre={"Sécurité"}
          paragraphe={
            "La bienveillance fait partie des valeurs fondatrices de La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.nce fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Apropos;
