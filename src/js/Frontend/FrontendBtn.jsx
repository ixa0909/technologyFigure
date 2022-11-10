import React, { useContext } from "react";
import ButtonIcon from "../ButtonIcon";

import { front } from "../App";
const FrontendBtn = (props) => {
  const { frontStatus, setFrontStatus } = useContext(front);
  return (
    <div className="btn">
      <ButtonIcon
        setStatus={setFrontStatus}
        status={frontStatus}
        text={"frontend"}
      />
      {props.iconsFront.map((iconFront) => {
        return (
          <ButtonIcon
            setStatus={iconFront.setStatusFront}
            status={iconFront.statusFront}
            text={iconFront.text}
          />
        );
      })}
    </div>
  );
};

export default FrontendBtn;
