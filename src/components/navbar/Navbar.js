import React, { useState } from "react";
import "./Navbar.css";
import TK from "../img/TK.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  function Handler() {
    setExpand(!expand);
  }
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
          {expand ? (
            <GiHamburgerMenu className="hamburger" onClick={Handler} />
          ) : (
            <MdCancel className="hamburger" onClick={Handler} />
          )}
        </div>
      </div>
      <div className={expand ? "dropdown_menu" : "dropdown_menu open"}>
        <h3 className="topBarTxtWhiteMenu">About</h3>
        <h3 className="topBarTxtWhiteMenu">Projects</h3>
        <h3 className="topBarTxtWhiteMenu">Exp.</h3>
        <h3 className="topBarTxtWhiteMenu">Contact</h3>
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
