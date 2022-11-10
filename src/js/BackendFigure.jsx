import React, { useState,useContext } from "react";
import style from "./End.module.css";
import {back} from "./App"

import item from "./iconUrl"
import Name from "./Name";
const BackendFigure = (props) => {
  const {backStatus,setBackStatus} = useContext(back);
  
  return (
    <span style={{float:"left"}}>
    <span className={backStatus ? style.visible : style.hidden}>
      {props.iconsBack.map((iconBack) => {
        return <img src={item(iconBack.text)} className={iconBack.statusBack ? style.visibleIcon:style.hidden}></img>
        
      })}
      
    </span>
    <br />
    <Name name={"バックエンド"}/>
    <br/>
    </span>

  );
};

export default BackendFigure;
