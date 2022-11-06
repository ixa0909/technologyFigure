import React, { useState } from "react";
import style from "./End.module.css";

import Icon from "./Icon/Icon";

const Frontend = (props) => {
  return (
    <span className={props.frontStatus ? style.visible : style.hidden}>
      {props.icons.map((icon) => {
        return <Icon langStatus={icon.status} lang={icon.text} />;
      })}

    </span>
  );
};

export default Frontend;
