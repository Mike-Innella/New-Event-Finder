import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/layout.css";
import App from "../src/App.js";
import reportWebVitals from "./reportWebVitals";
import "../src/css/layout.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
