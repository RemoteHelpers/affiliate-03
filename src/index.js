import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TagManager from "react-gtm-module";
import "./styles/main.scss";

const tagManagerArgs = {
  gtmId: "GTM-WM4KCVQ",
};

TagManager.initialize(tagManagerArgs);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
