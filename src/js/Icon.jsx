import React from "react";
import style from "./styles/Icon.module.css";

function Icon(props){
  const item = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"+props.lang+"/"+props.lang+"-original.svg";
  return (
    
      <span className={props.langStatus ? style.visible:style.hidden} >
        <img src={item}></img>
      </span>
    
  );
};

export default Icon;
