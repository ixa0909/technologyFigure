import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Icon from "./Icon"

function App() {
  const [IconStatus, setIconStatus] = useState(0)
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.preventDefault();
          console.log("Hello");
        }}
      >
        ボタン
      </Button>
      <Icon></Icon>
    </div>

  );
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
