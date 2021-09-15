import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "virtual:generated-pages-react";
import { fetchEnvironment } from "./api/environment";
import App from "./App";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { environmentState } from "./recoil/atoms/environmentState";

const init = async () => {
  try {
    const environment = await fetchEnvironment();
    const initializeState: (mutableSnapshot: MutableSnapshot) => void = ({
      set,
    }) => {
      set(environmentState, { ...environment });
    };

    ReactDOM.render(
      <React.StrictMode>
        <RecoilRoot initializeState={initializeState}>
          <App />
        </RecoilRoot>
      </React.StrictMode>,
      document.getElementById("root")
    );
  } catch (e) {
    console.error(e);
  }
};

init();
