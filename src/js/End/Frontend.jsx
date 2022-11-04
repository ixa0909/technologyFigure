import React, { useState } from "react";
import style from "./End.module.css";

import Icon from "./Icon/Icon";

const Frontend = (props) => {
  return (
    <span className={props.frontStatus ? style.visible : style.hidden}>
      <Icon langStatus={props.vueStatus} lang={"vuejs"} />
      <Icon langStatus={props.reactStatus} lang={"react"} />
      <Icon langStatus={props.htmlStatus} lang={"html5"} />
      <Icon langStatus={props.cssStatus} lang={"css3"} />
    </span>
  );
};

export default Frontend;
