import React from "react";

export default function Icon(props) {
  const show = () => {
    props.setIconStatus(1);
  };
  const unshown = () => {
    props.
    props.setIconStatus(0);
  };

  return (
    <div className="filter">
      <Button variant="contained" color="secondary" onClick={show}>
        React
      </Button>
    </div>
  );
}
