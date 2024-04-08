import React from "react";
import "./Esp.css";
import "../about/About.css";

const Exp = () => {
  return (
    <div className="Exp">
      <div className="lineBox">
        <h1 className="aboutH1">
          Experience<span className="green">.</span>
        </h1>
        <hr className="hrLine" />
      </div>
      <div>
        <div className="workBox">
          <h3 className="workPlace">Google</h3>
          <p className="workDate">2022 - PRESENT</p>
        </div>
        <div className="workBox">
          <h3 className="workJob">Software Engineer</h3>
          <p className="workDate">Atlanta</p>
        </div>
        <p className="exppTxt">
          Data Engineer for store front. Built data pipelines with Spark and
          Airflow. Saw Bezos one time. He said he liked my paintings. I said I
          liked his hair.
        </p>
        <ul>
          <li className="useTxtLi">Tailwind</li>
          <li className="useTxtLi">Sass</li>
          <li className="useTxtLi">Python</li>
          <li className="useTxtLi">GraphQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Exp;
