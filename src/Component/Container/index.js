import React from "react";
import "./container.scss";

const Container = (props) => {
  const className = `${props.class} containerWrapper`;
  return <section className={className}>{props.children}</section>;
};

export default Container;
