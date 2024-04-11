import React from "react";
import "./About.css";
import Reveal from "../utils/Reveal";

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="About" id="Home">
      <div className="heyBox">
        <div className="heyPad">
          <Reveal>
            <h1 className="hey1Txt">
              Hey, i'm Timmy<span className="green">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h6 className="hey6Txt">
              I'm a <span className="heyGreen">Full Stack Developer</span>
            </h6>
          </Reveal>
          <Reveal>
            <p className="heypTxt">
              For the past two years, I've been fully immersed in learning and
              building. Every day has been a journey of growth and discovery.
              Let's create something extraordinary together.
            </p>
          </Reveal>
          <Reveal>
            <p className="heyContact" onClick={() => scrollToSection("Contact")}>Contact me</p>
          </Reveal>
        </div>
      </div>
      <div className="boxAbout" id="About">
        <div className="lineBox boxLine">
          {/* <Reveal> */}
          <h1 className="aboutH1">
            About<span className="green">.</span>
          </h1>
          {/* </Reveal> */}
          <div className="hrLine"></div>
        </div>
        <div className="aboutBox">
          <p className="aboutP">
            <Reveal>
              <span className="hTxt">A</span>s a recent finance graduate, I have
              developed a strong foundation in financial analysis and
              decision-making. However, I have always had a passion for
              front-end web development and have dedicated much of my time to
              learning and improving my skills in this area.
            </Reveal>
            <br />
            <br />
            <Reveal>
              I am skilled in HTML, CSS, JavaScript, React.js, Node.js, and
              proficiency in modern tools like Tailwind CSS and Sass, and i
              thrive on turning ideas into dynamic, user-centric web
              applications. My journey from finance to full-stack development
              has been driven by an insatiable curiosity and a relentless
              pursuit of growth.
            </Reveal>
            <br /> <br />
            <Reveal>
              Outside of coding, you'll find me immersed in personal projects,
              exploring the latest trends in web development, or engaging in
              meaningful collaborations to bring ideas to life.
            </Reveal>
          </p>
          <div className="useWrkBox">
            <div>
              <Reveal>
                <h2 className="useTxt">Use at work</h2>
              </Reveal>
              <Reveal>
                <ul className="useTxtUl">
                  <li className="useTxtLi">Javascript</li>
                  <li className="useTxtLi">Typescript</li>
                  <li className="useTxtLi">HTML</li>
                  <li className="useTxtLi">CSS</li>
                  <li className="useTxtLi">React</li>
                  <li className="useTxtLi">Redux</li>
                  <li className="useTxtLi">NodeJS</li>
                  <li className="useTxtLi">Express</li>
                  <li className="useTxtLi">MongoDb</li>
                  <li className="useTxtLi">Github</li>
                </ul>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h2 className="useTxt">Use at fun</h2>
              </Reveal>
              <Reveal>
                <ul>
                  <li className="useTxtLi">Tailwind</li>
                  <li className="useTxtLi">Sass</li>
                  <li className="useTxtLi">GraphQL</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
