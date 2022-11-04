import React, { useState } from "react";
import style from "./End.module.css";


import Icon from "../Icon";

const Backend = (props) => {
  return (
    <span className={props.backStatus ? style.visible : style.hidden}>
      <Icon langStatus={props.goStatus} lang={"go"}/>
    </span>
  );
};

export default Backend;
