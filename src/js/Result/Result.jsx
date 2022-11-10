import React from "react";
import BackendFigure from "../Backend/BackendFigure";
import FrontendFigure from "../Frontend/FrontendFigure";

function Result(props) {
  return (
    <div className="fig_around">
      <span className="fig">
        <BackendFigure iconsBack={props.iconsBack} />
        <FrontendFigure iconsFront={props.iconsFront} />
      </span>
    </div>
  );
}

export default Result;
