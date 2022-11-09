import React, { useContext } from "react";
import style from "./End.module.css";

import {front} from "./App"
import item from "./iconUrl"

const FrontendFigure = (props) => {
  const {frontStatus,setFrontStatus} = useContext(front); 
  return (
    <span className={frontStatus ? style.visible : style.hidden}>
      {props.iconsFront.map((iconFront) => {
        return <img src={item(iconFront.text)} className={iconFront.statusFront ? style.visibleIcon:style.hidden}></img>
      })}

    </span>
  );
};

export default FrontendFigure;
