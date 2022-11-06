import React from "react";
import BackendBtn from "./BackendBtn";

import BackendFigure from "./BackendFigure";
import FrontendFigure from "./FrontendFigure";

const Backend = (props) => {
  return (
    <div>
      
      <BackendBtn
        iconsBack={props.iconsBack}
        setBackStatus={props.setBackStatus}
        backStatus={props.backStatus}
      />

      <div className="fig">
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

export default Backend;
