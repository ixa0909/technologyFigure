import React from "react";
import BackendBtn from "./BackendBtn";

import BackendFigure from "./BackendFigure";
import FrontendFigure from "./FrontendFigure";

const Backend = (props) => {
  return (
    <div>
      
      <BackendBtn
        iconsBack={props.iconsBack}
      />

    
        <span className="fig">
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
  );
};

export default Backend;
