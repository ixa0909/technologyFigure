import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import "./app.css";


import Backend from "./Backend";
import ButtonBack from "./ButtonBack";

function App() {
  const [goStatus, setGoStatus] = useState(true);

  const [reactStatus, setReactStatus] = useState(true);
  const [frontStatus, setFrontStatus] = useState(true);
  const [backStatus, setBackStatus] = useState(true);

  
  const frontShow = () => {
    setFrontStatus((FrontStatus) => !FrontStatus);
  };

  const goShow = () => {
    setGoStatus((goStatus) => !goStatus);
  };
  const reactShow = () => {
    setReactStatus((reactStatus) => !reactStatus);
  };

  
  var react = null;
  var front = { display: "none" };
  

  

  if (frontStatus === true) {
    front = { display: "inline-block" };
    ("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg");
  } else {
    front = { display: "none" };
  }
  
  if (reactStatus === true) {
    react =
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg";
  } else {
    react = null;
  }
  return (
    <div>
      <div className="btn">
        <ButtonBack setBackStatus={setBackStatus}/>
        <Button variant="contained" color="secondary" onClick={frontShow}>
          Front
        </Button>
        <Button variant="contained" color="secondary" onClick={goShow}>
          Go
        </Button>
        <Button variant="contained" color="secondary" onClick={reactShow}>
          React
        </Button>
      </div>
      <div className="framework">
        <span className="icon">
          <Backend backStatus={backStatus} goStatus={goStatus}/>
          <span className="front" style={front}>
            <img src={react}></img>
          </span>
          <br></br>
          <span className="name">
            <h6>backend</h6>
            <h6>frontend</h6>
          </span>
        </span>
      </div>
    </div>
  );
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
