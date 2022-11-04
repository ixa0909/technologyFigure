import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";

import Backend from "./End/Backend";
import Frontend from "./End/Frontend";
import ButtonIcon from "./ButtonIcon";

function App() {
  const [goStatus, setGoStatus] = useState(true);
  const [reactStatus, setReactStatus] = useState(true);
  const [htmlStatus, setHtmlStatus] = useState(true);
  const [cssStatus, setCssStatus] = useState(true);
  const [vueStatus, setVueStatus] = useState(true);
  const [frontStatus, setFrontStatus] = useState(true);
  const [backStatus, setBackStatus] = useState(true);

  const [icons, setIcon] = useState([]);

  useEffect(() => {
    (async () => {
      setIcon([
        {
          setStatus: setBackStatus,
          status: backStatus,
          text: "backend",
        },
        {
          setStatus: setFrontStatus,
          status: frontStatus,
          text: "frontend",
        },
        {
          setStatus: setGoStatus,
          status: goStatus,
          text: "go",
        },
        {
          setStatus: setReactStatus,
          status: reactStatus,
          text: "react",
        },
        {
          setStatus: setCssStatus,
          status: cssStatus,
          text: "css3",
        },
        {
          setStatus: setVueStatus,
          status: vueStatus,
          text: "vuejs",
        },
      ]);
    })();
  }, [backStatus, frontStatus, reactStatus, cssStatus, goStatus, vueStatus]);

  return (
    <div>
      <div className="btn">
        {icons.map((icon) => {
          return (
            <ButtonIcon
              setStatus={icon.setStatus}
              status={icon.status}
              text={icon.text}
            />
          );
        })}
      </div>
      <div className="framework">
        <span className="icon">
          <Backend backStatus={backStatus} goStatus={goStatus} />
          <Frontend frontStatus={frontStatus} reactStatus={reactStatus} />

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