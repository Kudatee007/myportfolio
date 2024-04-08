import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="heyBox">
        <h1 className="hey1Txt">Hey, i'm Timmy<span className="green">.</span></h1>
        <h6 className="hey6Txt">I'm a <span className="heyGreen">Full Stack Developer</span></h6>
        <p className="heypTxt">
          I've spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to paint online (incase
          you've got an empty canvas layin' around 🎨). Let's connect!
        </p>
        <p className="heyContact">Contact me</p>
      </div>
      <div className="boxAbout">
        <div className="lineBox">
          <h1 className="aboutH1">
            About<span className="green">.</span>
          </h1>
          <hr className="hrLine" />
        </div>
        <div className="aboutBox">
          <p className="aboutP">
            As a student studying finance, I have developed a strong foundation
            in financial analysis and decision-making. However, I have always
            had a passion for front-end web development and have dedicated much
            of my time to learning and improving my skills in this area. I am
            skilled in HTML, CSS, and JavaScript and have a strong eye for
            design. I am determined to become a well-rounded developer and am
            always seeking out new challenges and opportunities to improve my
            skills. In my spare time, I enjoy working on personal projects and
            collaborating with others to create beautiful and functional
            websites.
          </p>
          <div>
            <div>
              <h2 className="useTxt">Use at work</h2>
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
            </div>
            <div>
              <h2 className="useTxt">Use at fun</h2>
              <ul>
                <li className="useTxtLi">Tailwind</li>
                <li className="useTxtLi">Sass</li>
                <li className="useTxtLi">Python</li>
                <li className="useTxtLi">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
