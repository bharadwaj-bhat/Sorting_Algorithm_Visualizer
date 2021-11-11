import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename="/Sorting_Algorithm_Visualizer/home">
    <App />
  </Router>,

  document.getElementById("root")
);
