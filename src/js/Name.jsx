import React from "react";
import style from "./Figure.module.css";
const Name = (props) => {
  return <span className={style.name}>{props.name}</span>;
};

export default Name;
