import React, { useState } from "react";
import style from "./End.module.css";

import Icon from "./Icon/Icon";

const Frontend = (props) => {
  return (
    <span className={props.frontStatus ? style.visible : style.hidden}>
      {props.iconsFront.map((iconFront) => {
        return <Icon langStatus={iconFront.statusFront} lang={iconFront.text} />;
      })}

    </span>
  );
};

export default Frontend;
