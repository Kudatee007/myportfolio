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
          <h3 className="workPlace">Google</h3>
          </Reveal>
          <Reveal>
          <p className="workDate">2022 - PRESENT</p>
          </Reveal>
        </div>
        <div className="workBox">
        <Reveal>
          <h3 className="workJob">Software Engineer</h3>
          </Reveal>
          <Reveal>
          <p className="workDate">Atlanta</p>
          </Reveal>
        </div>
        <Reveal>
        <p className="exppTxt">
          Data Engineer for store front. Built data pipelines with Spark and
          Airflow. Saw Bezos one time. He said he liked my paintings. I said I
          liked his hair.
        </p>
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
  );
};

export default Exp;
