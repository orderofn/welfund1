import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

// Font Awesome Icons
import "font-awesome/css/font-awesome.min.css";

const clientRender = () => {
  ReactDOM.render(
    <HashRouter basename="/">
      <App />
    </HashRouter>,
    document.getElementById("root")
  );
};

const serverRender = () => {
  // You can implement SSR here if needed
};

if (typeof window === "object") {
  clientRender();
} else {
  serverRender();
}
