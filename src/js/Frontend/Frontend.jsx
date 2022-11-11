import React from "react";

import FrontendBtn from "./FrontendBtn";
import BackendFigure from "../Backend/BackendFigure";
import FrontendFigure from "./FrontendFigure";

const Frontend = (props) => {
  
  console.log(props.ab)
  return (
    <div>
      <FrontendBtn iconsFront={props.iconsFront} />
      <div className="fig_around">
        <div className="fig">
          <span className="icon">
            <BackendFigure iconsBack={props.iconsBack} />
      <h1>{props.ab}</h1>
            <FrontendFigure iconsFront={props.iconsFront} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
