import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { applyMiddleware, createStore } from "redux";
import promise from 'redux-promise'
import { Provider } from "react-redux";
import reducers from "./main/reducers";

const store = applyMiddleware(promise)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
