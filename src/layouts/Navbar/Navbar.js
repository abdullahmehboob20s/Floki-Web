import React, { useRef, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navbarRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        navbarRef.current?.classList.add("scrolled");
      } else {
        navbarRef.current?.classList.remove("scrolled");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  return (
    <div className="navbar-wrapper">
      <div className="navbar-header">
        <p className="white weight-6">Swap your $FLOKI from ETH to BSC</p>
        <div className="navbar-header-btn dark-yellow fs-16px pointer weight-5 bg-yellow radius-6px">
          Floki Bridge
        </div>
      </div>
      <div className="navbar" ref={navbarRef}>
        <div className="navbar-brand">
          <img
            className="navbar-logo"
            src="https://theflokiinu.com/images/floki-logo.png"
            alt=""
          />
        </div>
        <div className="navbar-links">
          <div className="navbar-links-wrapper">
            <div className="navbar-link active">Home</div>
            <div className="navbar-link">Buy</div>
            <div className="navbar-link">Blog</div>
            <div className="navbar-link">Roadmap</div>
            <div className="navbar-link">Team</div>
            <div className="navbar-link">FAQ</div>
            <div className="navbar-link">Careers</div>
            <div className="navbar-link">NFT Portal</div>
            <div className="navbar-link">Whitepaper</div>
          </div>
          <div className="navbar-links-btns">
            <button className="navbar-btn dark-yellow navbar-header-btn bg-yellow radius-4px">
              Buy on Pancake Swap
            </button>
            <button className="navbar-btn white radius-4px">
              Buy on Uniswap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
