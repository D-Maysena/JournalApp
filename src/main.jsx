import { createRoot } from "react-dom/client";
import "./styles.css";
import JournalApp from "./JournalApp.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
