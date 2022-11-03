import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function Icon(props) {
  const show = () => {
    props.setIconStatus(1);
  };

  return (
    <div className="filter">
      <Button variant="contained" color="secondary" onClick={show}>
        React
      </Button>
    </div>
  );
}
