import React, { useState } from "react";
import style from "./End.module.css";


import item from "./iconUrl"
const BackendFigure = (props) => {
  
  return (
    <span className={props.backStatus ? style.visible : style.hidden}>
      {props.iconsBack.map((iconBack) => {
        return <img src={item(iconBack.text)} className={iconBack.statusBack ? style.visibleIcon:style.hidden}></img>
        
      })}
    </span>
  );
};

export default BackendFigure;
