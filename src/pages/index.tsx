import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { classNamesFunc } from "classnames-generics";

const classNames = classNamesFunc<keyof typeof style>();

const index: React.VFC = () => {
console.log('style :>> ', style);

  return (
    <div className={classNames(style.container)}>
      <p>index.vue</p>
      <Link to="/about">about</Link>
    </div>
  );
};

export default index;
