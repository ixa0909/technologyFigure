import React from "react";

import FrontendBtn from "./FrontendBtn";
import BackendFigure from "./BackendFigure";
import FrontendFigure from "./FrontendFigure";

const Frontend = (props) => {
  return (
    <div>
      <FrontendBtn
        iconsFront={props.iconsFront}
        setFrontStatus={props.setFrontStatus}
        frontStatus={props.frontStatus}
      />

      <div className="tech-fig">
        <span className="icon">
          <BackendFigure
            backStatus={props.backStatus}
            iconsBack={props.iconsBack}
          />
          <FrontendFigure
            frontStatus={props.frontStatus}
            iconsFront={props.iconsFront}
          />
        </span>
      </div>
    </div>
  );
};

export default Frontend;
