import React from "react";
import "./About.css";
import Reveal from "../utils/Reveal";

const About = () => {
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
              I've spent the last 5 years building and scaling software for some
              pretty cool companies. I also teach people to paint online (incase
              you've got an empty canvas layin' around 🎨). Let's connect!
            </p>
          </Reveal>
          <Reveal>
            <p className="heyContact">Contact me</p>
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
              <span className="hTxt">A</span>s a student studying finance, I
              have developed a strong foundation in financial analysis and
              decision-making. However, I have always had a passion for
              front-end web development and have dedicated much of my time to
              learning and improving my skills in this area.
            </Reveal>
            <br />
            <br />
            <Reveal>
              I am skilled in HTML, CSS, and JavaScript and have a strong eye
              for design. I am determined to become a well-rounded developer and
              am always seeking out new challenges and opportunities to improve
              my skills.
            </Reveal>
            <br /> <br />
            <Reveal>
              In my spare time, I enjoy working on personal projects and
              collaborating with others to create beautiful and functional
              websites.
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
                  <li className="useTxtLi">Python</li>
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
