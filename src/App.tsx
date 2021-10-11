import React, { useState, VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { environmentState } from "./recoil/atoms/environmentState";
import { useRecoilState } from "recoil";
import Index from './pages/index';
// import style from "./index.module.scss";
// import { classNamesFunc } from "classnames-generics";

// const classNames = classNamesFunc<keyof typeof style>();

const hoge = `
  minify test
`
const hoge2 = `minify test2`

export const App : VFC = () => {
  const [count, setCount] = useState(0);
  const [environment, setEnvironment] = useRecoilState(environmentState);


  const json = {
    foo: 'bar'
  }

  const jsonStr = JSON.stringify(json);
  const jsonObj = JSON.parse(jsonStr);

  return (
    <div className="App">
      <Index />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>{hoge2}{hoge}</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
