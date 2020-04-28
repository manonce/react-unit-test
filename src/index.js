import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import AsyncTests from './AsyncTests';
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AsyncTests />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
