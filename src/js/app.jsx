import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";

import Backend from "./End/Backend";
import Frontend from "./End/Frontend";
import ButtonIcon from "./ButtonIcon";

function App() {
  const [goStatusBack, setGoStatusBack] = useState(true);
  const [reactStatusBack, setReactStatusBack] = useState(true);
  const [htmlStatusBack, setHtmlStatusBack] = useState(true);
  const [cssStatusBack, setCssStatusBack] = useState(true);
  const [vueStatusBack, setVueStatusBack] = useState(true);

  const [goStatusFront, setGoStatusFront] = useState(true);
  const [reactStatusFront, setReactStatusFront] = useState(true);
  const [htmlStatusFront, setHtmlStatusFront] = useState(true);
  const [cssStatusFront, setCssStatusFront] = useState(true);
  const [vueStatusFront, setVueStatusFront] = useState(true);

  const [frontStatus, setFrontStatus] = useState(true);
  const [backStatus, setBackStatus] = useState(true);

  const [iconsBack, setIconBack] = useState([]);
  const [iconsFront, setIconFront] = useState([]);

  useEffect(() => {
    (async () => {
      setIconBack([
        {
          setStatusBack: setGoStatusBack,
          statusBack: goStatusBack,
          text: "go",
        },
        {
          setStatusBack: setReactStatusBack,
          statusBack: reactStatusBack,
          text: "react",
        },
        {
          setStatusBack: setCssStatusBack,
          statusBack: cssStatusBack,
          text: "css3",
        },
        {
          setStatusBack: setVueStatusBack,
          statusBack: vueStatusBack,
          text: "vuejs",
        },
        {
          setStatusBack: setHtmlStatusBack,
          statusBack: htmlStatusBack,
          text: "html5",
        },
      ]);
      setIconFront([
        {
          setStatusFront: setGoStatusFront,
          statusFront: goStatusFront,
          text: "go",
        },
        {
          setStatusFront: setReactStatusFront,
          statusFront: reactStatusFront,
          text: "react",
        },
        {
          setStatusFront: setCssStatusFront,
          statusFront: cssStatusFront,
          text: "css3",
        },
        {
          setStatusFront: setVueStatusFront,
          statusFront: vueStatusFront,
          text: "vuejs",
        },
        {
          setStatusFront: setHtmlStatusFront,
          statusFront: htmlStatusFront,
          text: "html5",
        },
      ]);
    })();
  }, [reactStatusBack, cssStatusBack, goStatusBack, vueStatusBack,htmlStatusBack,reactStatusFront, cssStatusFront, goStatusFront, vueStatusFront, htmlStatusFront]);

  return (
    <div>
      <div className="btn-back">
        <ButtonIcon
          setStatus={setBackStatus}
          status={backStatus}
          text={"backend"}
        />
        {iconsBack.map((iconBack) => {
          return (
            
              <ButtonIcon
                setStatus={iconBack.setStatusBack}
                status={iconBack.statusBack}
                text={iconBack.text}
              />
            
          );
        })}
      </div>
      <div className="btn-front">
        <ButtonIcon
          setStatus={setFrontStatus}
          status={frontStatus}
          text={"frontend"}
        />
        {iconsFront.map((iconFront) => {
          return (
            
              <ButtonIcon
                setStatus={iconFront.setStatusFront}
                status={iconFront.statusFront}
                text={iconFront.text}
              />
            
          );
        })}
      </div>
      <div className="framework">
        <span className="icon">
          <Backend backStatus={backStatus} iconsBack={iconsBack} />
          <Frontend frontStatus={frontStatus} iconsFront={iconsFront} />

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
