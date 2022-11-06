import React from "react";
import ButtonIcon from "./ButtonIcon";

const BackendBtn = (props) => {
  return (
    <div className="btn">
      
      <ButtonIcon
        setStatus={props.setBackStatus}
        status={props.backStatus}
        text={"backend"}
      />
      {/* {props.iconsBack.map((iconBack) => {
        return (
          <ButtonIcon
            setStatus={iconBack.setStatusBack}
            status={iconBack.statusBack}
            text={iconBack.text}
          />
        );
      })} */}
    </div>
  );
};

export default BackendBtn;
