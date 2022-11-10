import React, { useEffect, useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./app.css";

import Backend from "./Backend/Backend";
import Frontend from "./Frontend/Frontend";

import Home from "./Home/Home";
import Result from "./Result/Result";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const back = createContext();
export const front = createContext();

function App() {
  const [goStatusBack, setGoStatusBack] = useState(true);
  const [reactStatusBack, setReactStatusBack] = useState(true);
  const [htmlStatusBack, setHtmlStatusBack] = useState(false);
  const [cssStatusBack, setCssStatusBack] = useState(true);
  const [vueStatusBack, setVueStatusBack] = useState(true);
  const [pythonStatusBack, setPythonStatusBack] = useState(true);
  const [javaStatusBack, setJavaStatusBack] = useState(true);
  const [slackStatusBack, setSlackStatusBack] = useState(true);
  const [mysqlStatusBack, setMysqlStatusBack] = useState(true);
  const [sqliteStatusBack, setSqliteStatusBack] = useState(true);

  const [goStatusFront, setGoStatusFront] = useState(true);
  const [reactStatusFront, setReactStatusFront] = useState(true);
  const [htmlStatusFront, setHtmlStatusFront] = useState(true);
  const [cssStatusFront, setCssStatusFront] = useState(false);
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
        {
          setStatusBack: setMysqlStatusBack,
          statusBack: mysqlStatusBack,
          text: "mysql",
        },
        {
          setStatusBack: setSqliteStatusBack,
          statusBack: sqliteStatusBack,
          text: "sqlite",
        },
        {
          setStatusBack: setJavaStatusBack,
          statusBack: javaStatusBack,
          text: "java",
        },
        {
          setStatusBack: setPythonStatusBack,
          statusBack: pythonStatusBack,
          text: "python",
        },
        {
          setStatusBack: setSlackStatusBack,
          statusBack: slackStatusBack,
          text: "slack",
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
    pythonStatusBack,
    javaStatusBack,
    slackStatusBack,
    sqliteStatusBack,
    mysqlStatusBack,
    reactStatusFront,
    cssStatusFront,
    goStatusFront,
    vueStatusFront,
    htmlStatusFront,
  ]);

  return (
    <Router>
      <Header />
      <front.Provider value={{ frontStatus, setFrontStatus }}>
        <back.Provider value={{ backStatus, setBackStatus }}>
          <Routes>
            <Route
              exact
              path="index.html"
              element={
                <Backend iconsBack={iconsBack} iconsFront={iconsFront} />
              }
            />

            <Route exact path="home" element={<Home />} />

            <Route
              exact
              path="result"
              element={<Result iconsBack={iconsBack} iconsFront={iconsFront} />}
            />
            <Route
              path=""
              element={
                <Frontend iconsBack={iconsBack} iconsFront={iconsFront} />
              }
            />
          </Routes>
        </back.Provider>
      </front.Provider>
      <Footer />
    </Router>
  );
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
