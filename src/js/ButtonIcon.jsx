import React from "react";
import Button from "@mui/material/Button";

export default function ButtonIcon (props){
  const show= () =>{
    if (props.status){
      props.setStatus(false);
    }else{
      props.setStatus(true);
    }
  };
  return (
    <Button variant="contained" color="secondary" onClick={show}>
      {props.text}
    </Button>
  );
};

