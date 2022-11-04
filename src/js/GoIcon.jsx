import React from "react";
import style from "./styles/Icon.module.css";

function GoIcon(props){
  const go = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg";
  return (
    
      <span className={props.goStatus ? style.visible:style.hidden} >
        <img src={go}></img>
      </span>
    
  );
};

export default GoIcon;
