import React, { useState } from "react";
import style from "./End.module.css";


import item from "./iconUrl"

const FrontendFigure = (props) => {
  
  return (
    <span className={props.frontStatus ? style.visible : style.hidden}>
      {props.iconsFront.map((iconFront) => {
        return <img src={item(iconFront.text)} className={iconFront.statusFront ? style.visibleIcon:style.hidden}></img>
      })}

    </span>
  );
};

export default FrontendFigure;
