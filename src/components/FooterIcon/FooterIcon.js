import React from "react";
import "./FooterIcon.css";

function FooterIcon({ icon }) {
  return (
    <a className="footer-icon" href="#">
      <img src={icon} alt="" />
    </a>
  );
}

export default FooterIcon;
