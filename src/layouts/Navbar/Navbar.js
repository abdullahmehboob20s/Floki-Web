import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "assets/images/logo.png";

function Navbar(props) {
  const { navbarHeader = true, navbarLinks = true } = props;
  const [open, setOpen] = React.useState(false);
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

  const navbarToggler = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-wrapper">
      {navbarHeader ? (
        <div className="navbar-header">
          <p className="white weight-6">Swap your $FLOKI from ETH to BSC</p>
          <div className="navbar-header-btn dark-yellow fs-16px pointer weight-5 bg-yellow radius-6px">
            Floki Bridge
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={`navbar ${navbarLinks ? "" : "no-links"}`}
        ref={navbarRef}
      >
        <Link to="/" className="navbar-brand">
          <img className="navbar-logo" src={logoImg} alt="" />
        </Link>

        {navbarLinks ? (
          <div className="brand-icons-btns">
            <img
              src="https://theflokiinu.com/images/pancakeswap-logo.png"
              alt=""
            />
            <img src="https://theflokiinu.com/images/uniswap-logo.png" alt="" />

            <div
              className={`navbar-hamburger ${open ? "active" : ""}`}
              onClick={navbarToggler}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        ) : (
          ""
        )}
        {navbarLinks ? (
          <div className={`navbar-links ${open ? "open" : ""}`}>
            <div className="navbar-links-wrapper">
              <div className="navbar-link active">Home</div>
              <div className="navbar-link">Buy</div>
              <div className="navbar-link">Blog</div>
              <div className="navbar-link">Roadmap</div>
              <div className="navbar-link">Team</div>
              <div className="navbar-link">FAQ</div>
              <div className="navbar-link">Careers</div>
              <Link to="/nft-portal" className="navbar-link">
                NFT Portal
              </Link>
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
        ) : (
          <div className="fs-17px button-wrapper bg-yellow radius-4px weight-8 pointer">
            Connect Wallet
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
