import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";


function App() {
  var [IconStatus, setIconStatus] = useState(0);
  const show = () => {
    setIconStatus(IconStatus=>!IconStatus);
  };
  var a=1;
  if(IconStatus===true){
    a="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg";
  }else{
    a=null;
  }
  return (
    <div className="filter">
      <Button variant="contained" color="secondary" onClick={show}>
        Go
      </Button>
      <img src={a}></img>
      
    </div>
  );
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
