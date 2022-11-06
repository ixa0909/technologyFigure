import React, { useState } from "react";
import style from "./End.module.css";

import Icon from "./Icon/Icon";

const Backend = (props) => {
  return (
    <span className={props.backStatus ? style.visible : style.hidden}>
      {props.icons.map((icon) => {
        return <Icon langStatus={icon.status} lang={icon.text} />;
      })}
    </span>
  );
};

export default Backend;
