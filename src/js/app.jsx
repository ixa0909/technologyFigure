import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import "./app.css";

function App() {
  const [goStatus, setGoStatus] = useState(true);
  const [reactStatus, setReactStatus] = useState(true);
  const [frontStatus, setFrontStatus] = useState(false);
  const [backStatus, setBackStatus] = useState(false);

  const backShow = () => {
    setBackStatus((BackStatus) => !BackStatus);
  };
  const frontShow = () => {
    setFrontStatus((FrontStatus) => !FrontStatus);
  };

  const goShow = () => {
    setGoStatus((goStatus) => !goStatus);
  };
  const reactShow = () => {
    setReactStatus((reactStatus) => !reactStatus);
  };

  var go = null;
  var react = null;
  var front = { display: "none" };
  var back = { display: "none" };
  if (backStatus === true) {
    back = { display: "inline-block" };
    ("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg");
  } else {
    back = { display: "none" };
  }
  if (frontStatus === true) {
    front = { display: "inline-block" };
    ("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg");
  } else {
    front = { display: "none" };
  }
  if (goStatus === true) {
    go =
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg";
  } else {
    go = null;
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
        <Button variant="contained" color="secondary" onClick={backShow}>
          Back
        </Button>
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
          <span className="back" style={back}>
            <img src={go}></img>
          </span>
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
