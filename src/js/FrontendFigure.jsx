import React, { useContext } from "react";
import style from "./End.module.css";

import {front} from "./App"
import item from "./iconUrl"
import Name from "./Name";

const FrontendFigure = (props) => {
  const {frontStatus,setFrontStatus} = useContext(front); 
  return (
    <span style={{float:"left"}}>
    <span className={frontStatus ? style.visible : style.hidden}>
      {props.iconsFront.map((iconFront) => {
        return <img src={item(iconFront.text)} className={iconFront.statusFront ? style.visibleIcon:style.hidden}></img>
      })}

    </span>
    <br />
    <Name name={"フロントエンド"}/>
    <br/>
    </span>
  );
};

export default FrontendFigure;
