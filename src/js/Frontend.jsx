import React,{useContext} from "react";

import FrontendBtn from "./FrontendBtn";
import BackendFigure from "./BackendFigure";
import FrontendFigure from "./FrontendFigure";

const Frontend = (props) => {
  
  return (
    <div>
      <FrontendBtn
        iconsFront={props.iconsFront}
        
      />

      <div className="fig">
        <span className="icon">
          <BackendFigure
            
            iconsBack={props.iconsBack}
          />
          <FrontendFigure
            
            iconsFront={props.iconsFront}
          />
        </span>
      </div>
    </div>
  );
};

export default Frontend;
