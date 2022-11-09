import React,{useContext} from "react";
import {a} from "./App"
import ButtonIcon from "./ButtonIcon";

const BackendBtn = (props) => {
  const {backStatus,setBackStatus} = useContext(a);
  return (
    <div className="btn">
      
      <ButtonIcon
        setStatus={setBackStatus}
        status={backStatus}
        text={"backend"}
      />
      {props.iconsBack.map((iconBack) => {
        return (
          <ButtonIcon
            setStatus={iconBack.setStatusBack}
            status={iconBack.statusBack}
            text={iconBack.text}
          />
        );
      })}
    </div>
  );
};

export default BackendBtn;
