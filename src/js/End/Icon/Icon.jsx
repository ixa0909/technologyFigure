import React from "react";
import style from "./Icon.module.css";

function Icon(props){
  const item = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"+props.lang+"/"+props.lang+"-original-wordmark.svg";
  return (
      <span className={props.langStatus ? style.visible:style.hidden} >
        <img src={item}></img>
      </span>
  );
};

export default Icon;
