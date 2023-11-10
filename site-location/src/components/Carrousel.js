import React, { useState } from "react";

const Carousel = () => {
  const images = ["carrouselImage2", "carrouselImage1"]; // Ajoutez plus de noms de classe Sass au besoin
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      <div className={`carrousel-image ${images[currentImage]}`}></div>
      <div className="nav">
        <button className="Flèchegauche" onClick={prevImage}></button>
        <span>
          {currentImage + 1} / {images.length}
        </span>
        <button className="Flèchedroite" onClick={nextImage}></button>
      </div>
    </div>
  );
};

export default Carousel;
