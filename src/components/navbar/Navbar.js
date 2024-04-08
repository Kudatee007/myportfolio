import React from "react";
import "./Navbar.css";
import TK from "../img/TK.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="topBar">
        <img src={TK} alt="" className="tkImg" />
        <div className="txtTopBar">
          <h3 className="topBarTxtWhite">About</h3>
          <h3 className="topBarTxtWhite">Projects</h3>
          <h3 className="topBarTxtWhite">Exp.</h3>
          <h3 className="topBarTxtWhite">Contact</h3>
        </div>
        <div className="hamburgerBox">
          <h2 className="topBarTxtGreen">My resume</h2>
          <GiHamburgerMenu className="hamburger" />
        </div>
      </div>
      <div className="sideBar">
        <FaLinkedinIn className="sideBarIcon" />
        <TbBrandGithubFilled className="sideBarIconRound" />
        <FaTwitter className="sideBarIconRound" />
      </div>
    </div>
  );
};

export default Navbar;
