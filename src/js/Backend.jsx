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
            
            iconsBack={props.iconsBack}
          />
          <FrontendFigure
            
            iconsFront={props.iconsFront}
          />
        </span>
      
    </div>
  );
};

export default Backend;
