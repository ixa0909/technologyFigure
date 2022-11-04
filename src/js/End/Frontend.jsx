import React, { useState } from "react";
import style from "./End.module.css";

import Icon from "../Icon";

const Frontend = (props) => {
  return (
    <span className={props.frontStatus ? style.visible : style.hidden}>
      <Icon langStatus={props.reactStatus} lang={"react"}/>
    </span>
  );
};

export default Frontend;
