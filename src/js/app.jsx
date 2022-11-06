import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";

import Backend from "./Backend";
import Frontend from "./Frontend";

import Home from "./Home";
import About from "./About";

import { BrowserRouter as Router, Route ,Routes,Link} from "react-router-dom";

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
  }, [
    reactStatusBack,
    cssStatusBack,
    goStatusBack,
    vueStatusBack,
    htmlStatusBack,
    reactStatusFront,
    cssStatusFront,
    goStatusFront,
    vueStatusFront,
    htmlStatusFront,
  ]);

  return (
    // <div>
    //   <Backend
    //     backStatus={backStatus}
    //     iconsBack={iconsBack}
    //     iconsFront={iconsFront}
    //     setBackStatus={setBackStatus}
    //     frontStatus={frontStatus}
    //     setFrontStatus={setFrontStatus}
    //   />
    //   <Frontend
    //     frontStatus={frontStatus}
    //     iconsBack={iconsBack}
    //     iconsFront={iconsFront}
    //     setFrontStatus={setFrontStatus}
    //     backStatus={backStatus}
    //     setBackStatus={setBackStatus}
    //   />
    // </div>
    <Router>
      <h1>jglagja</h1>
      <Link to="/">a</Link>
      <Link to="/about">b</Link>
      <Routes>
      <Route exact path="/" element={Home}/>
      <Route path="/about" element={About}/>
        
      </Routes>
    </Router>
  );
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
