import React from "react";
import "./Tooltip.css";

function Tooltip(props) {
  const { children, title } = props;
  return (
    <div className="tooltip-wrapper">
      <div className="tooltip">{title}</div>
      {children}
    </div>
  );
}

export default Tooltip;
