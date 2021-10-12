import React from "react";
import { Link } from "react-router-dom";
import * as style from "./index.module.scss";
import { classNamesFunc } from "classnames-generics";

const classNames = classNamesFunc<keyof typeof style>();

const index: React.VFC = () => {
  console.log("style :>> ", style);

  return (
    <div className={classNames(style.container, { [style.container]: true })}>
      <p>index.vue</p>
      <Link to="/about">about</Link>
    </div>
  );
};

export default index;
