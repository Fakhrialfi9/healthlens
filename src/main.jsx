import React from "react";
import ReactDOM from "react-dom/client";
import App from "./base/apps/apps.tsx";
import "./base/style/index.css";
import "./base/style/lightColor.css";
// import "./base/style/darkColor.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
