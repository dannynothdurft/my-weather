import "./styles/global.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./lib/components/App";
import store from "./lib/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
