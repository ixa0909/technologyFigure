import React, { useState } from "react";
import style from "./End.module.css";

import Icon from "./Icon/Icon";

const Backend = (props) => {
  return (
    <span className={props.backStatus ? style.visible : style.hidden}>
      {props.iconsBack.map((iconBack) => {
        return <Icon langStatus={iconBack.statusBack} lang={iconBack.text} />;
      })}
    </span>
  );
};

export default Backend;
