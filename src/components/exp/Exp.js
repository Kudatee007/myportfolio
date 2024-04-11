import React from "react";
import "./Esp.css";
import "../about/About.css";
import Reveal from "../utils/Reveal";

const Exp = () => {
  return (
    <div className="Exp" id="Exp">
      <div className="lineBox">
        {/* <Reveal> */}
        <h1 className="aboutH1">
          Experience<span className="green">.</span>
        </h1>
        {/* </Reveal> */}
        <hr className="hrLine" />
      </div>
      <div>
        <div className="workBox">
          <Reveal>
            <h3 className="workPlace">Tech Studio</h3>
          </Reveal>
          <Reveal>
            <p className="workDate">2022 - 2023</p>
          </Reveal>
        </div>
        <div className="workBox">
          <Reveal>
            <h3 className="workJob">Software Development</h3>
          </Reveal>
          <Reveal>
            <p className="workDate">lagos</p>
          </Reveal>
        </div>
        <Reveal>
          <p className="exppTxt">
            Tech Studio holds a special place in my journey as a software
            developer. It's where I embarked on the exhilarating path of
            learning and mastering the craft of software development.
          </p>
        </Reveal>
        <Reveal>
          <ul>
            <li className="useTxtLi">Html</li>
            <li className="useTxtLi">Css</li>
            <li className="useTxtLi">Javascript</li>
            <li className="useTxtLi">React</li>
            <li className="useTxtLi">Express</li>
            <li className="useTxtLi">MongoDb</li>
            <li className="useTxtLi">Node</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default Exp;
