import React from "react";
import Button from "@mui/material/Button";

const ButtonBack = (props) => {
  const backShow = () => {
    props.setBackStatus((BackStatus) => !BackStatus);
  };
  return (
    <Button variant="contained" color="secondary" onClick={backShow}>
      Back
    </Button>
  );
};

export default ButtonBack;
