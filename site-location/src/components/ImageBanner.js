import React from "react";
import PropTypes from "prop-types";

const ImageBanner = ({ imageUrl, showTitle }) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="" />}
      {showTitle === true && (
        <h2 className="titreBannière">Chez vous, partout et ailleurs</h2>
      )}
      <div className="noir"></div>
    </div>
  );
};

ImageBanner.propTypes = {
  imageUrl: PropTypes.string,
  showTitle: PropTypes.bool,
};

export default ImageBanner;
