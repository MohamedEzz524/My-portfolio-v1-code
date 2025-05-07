import React from "react";
import "./MainTitle.css";

export default function Main_title({ title }) {
  return (
    <div className="main-title">
      <span className="title-object"></span>
      <span className="title-object"></span>
      <span className="title-object"></span>
      <span className="main-title-bg"></span>
      <span className="title-left">{"< "}</span>
      <span className="title-right">{"/> "}</span>
      {title}
    </div>
  );
}
