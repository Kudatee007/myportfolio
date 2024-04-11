import React, { useState, useEffect } from "react";
import "./Navbar.css";
import TK from "../img/TK.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "../img/KUDAISI TIMILEHIN.pdf";

const Navbar = () => {
  const [expand, setExpand] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(""); // State variable for active section
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);

      // Determine active section based on scroll position
      const homeSection = document.getElementById("Home");
      const aboutSection = document.getElementById("About");
      const projectSection = document.getElementById("Project");
      const expSection = document.getElementById("Exp");
      const contactSection = document.getElementById("Contact");

      if (
        currentScrollPos >= homeSection.offsetTop - 100 &&
        currentScrollPos < aboutSection.offsetTop - 100
      ) {
        setActiveSection("Home");
      } else if (
        currentScrollPos >= aboutSection.offsetTop - 100 &&
        currentScrollPos < projectSection.offsetTop - 100
      ) {
        setActiveSection("About");
      } else if (
        currentScrollPos >= projectSection.offsetTop - 100 &&
        currentScrollPos < expSection.offsetTop - 100
      ) {
        setActiveSection("Project");
      } else if (
        currentScrollPos >= expSection.offsetTop - 100 &&
        currentScrollPos < contactSection.offsetTop - 100
      ) {
        setActiveSection("Exp");
      } else if (currentScrollPos >= contactSection.offsetTop - 100) {
        setActiveSection("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  function Handler() {
    setExpand(!expand);
  }
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setExpand(!expand);
  }
  function scrollToSection1(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className={`navBar ${visible ? "" : "scroll"}`}>
      <div className="topBar">
        <img
          src={TK}
          alt=""
          className="tkImg"
          data-aos="fade-up-right"
          onClick={() => scrollToSection1("Home")}
        />
        <div className="txtTopBar">
          <h3
            className={`topBarTxtWhite ${
              activeSection === "About" ? "active" : ""
            }`}
            onClick={() => scrollToSection("About")}
          >
            About
          </h3>
          <h3
            className={`topBarTxtWhite ${
              activeSection === "Project" ? "active" : ""
            }`}
            onClick={() => scrollToSection("Project")}
          >
            Projects
          </h3>
          <h3
            className={`topBarTxtWhite ${
              activeSection === "Exp" ? "active" : ""
            }`}
            onClick={() => scrollToSection("Exp")}
          >
            Exp.
          </h3>
          <h3
            className={`topBarTxtWhite ${
              activeSection === "Contact" ? "active" : ""
            }`}
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </h3>
        </div>
        <div className="hamburgerBox">
          <a href={Resume} target="blank">
            <h2 className="topBarTxtGreen" data-aos="zoom-in">
              My resume
            </h2>
          </a>
          {expand ? (
            <GiHamburgerMenu className="hamburger" onClick={Handler} />
          ) : (
            <MdCancel className="hamburger" onClick={Handler} />
          )}
        </div>
      </div>
      <div className={expand ? "dropdown_menu" : "dropdown_menu open"}>
        <h3
          className={`topBarTxtWhiteMenu ${
            activeSection === "About" ? "active" : ""
          }`}
          onClick={() => scrollToSection("About")}
        >
          About
        </h3>
        <h3
            className={`topBarTxtWhiteMenu ${
              activeSection === "Project" ? "active" : ""
            }`}
            onClick={() => scrollToSection("Project")}
          >
            Projects
          </h3>
          <h3
            className={`topBarTxtWhiteMenu ${
              activeSection === "Exp" ? "active" : ""
            }`}
            onClick={() => scrollToSection("Exp")}
          >
            Exp.
          </h3>
          <h3
            className={`topBarTxtWhiteMenu ${
              activeSection === "Contact" ? "active" : ""
            }`}
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </h3>
      </div>
      <div className="sideBar" data-aos="fade-up-right">
        <a
          href="https://www.linkedin.com/in/timilehin-kudaisi-87834524a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="sideBarIcon" />
        </a>
        <a href="https://github.com/Kudatee007" target="_blank">
          <TbBrandGithubFilled className="sideBarIconRound" />
        </a>
        <a
          href="https://twitter.com/Kudatee001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="sideBarIconRound" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
