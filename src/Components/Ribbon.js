import React from "react";
import "./Ribbon.css";
const Ribbon = ({ status }) => {
  return (
    <div class={`ribbon ribbon-${status} ribbon-top-right `}>
      <span>{status}</span>
    </div>
  );
};

export default Ribbon;
