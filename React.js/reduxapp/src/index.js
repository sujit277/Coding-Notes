import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ComA from "./ComA";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ComA />
  </Provider>,
  document.getElementById("root")
);
