import React,{useContext} from "react";
import {back} from "./App"
import FrontendBtn from "./FrontendBtn";
import BackendFigure from "./BackendFigure";
import FrontendFigure from "./FrontendFigure";

const Frontend = (props) => {
  const {backStatus,setBackStatus} = useContext(back);
  return (
    <div>
      <FrontendBtn
        iconsFront={props.iconsFront}
        setFrontStatus={props.setFrontStatus}
        frontStatus={props.frontStatus}
      />

      <div className="fig">
        <span className="icon">
          <BackendFigure
            backStatus={backStatus}
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
