import React from "react";
import "./container.scss";

const Container = (props) => {
  const className = `${props.class} containerWrapper`;
  return <div className={className}>{props.children}</div>;
};

export default Container;
