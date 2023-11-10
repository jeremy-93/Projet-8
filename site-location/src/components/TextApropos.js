import React, { useState } from "react";
function TextApropos({ titre, paragraphe }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="center">
      <div className="bouton">
        <div className="boiteF">
          <div className="titre">
            <h3>{titre}</h3>
          </div>
          <div>
            <button
              className={`fleche  ${isExpanded ? "expanded" : ""}`}
              type="button"
              onClick={handleArrowClick}
            ></button>
          </div>
        </div>
        <div className={`cont ${isExpanded ? "expanded" : "collapsed"}`}>
          <p>{paragraphe}</p>
        </div>
      </div>
    </div>
  );
}

export default TextApropos;
