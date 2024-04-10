import React, { useState } from "react";
import "./Project.css";
import Reveal from "../utils/Reveal";
import yourProject from "../img/example-project.jpg.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import carlos from "../img/carlos.jpeg"
import pablo from "../img/pablo.png"
import bentraco from "../img/bentraco.png"

const Project = () => {
  const [expand, setExpand] = useState(true);

  function Handler() {
    setExpand(!expand);
  }
  return (
    <div className="Project" id="Project">
      <div className="lineBox">
        <div className="hrLine"></div>
        {/* <Reveal> */}
        <h1 className="aboutH1">
          Project<span className="green">.</span>
        </h1>
        {/* </Reveal> */}
      </div>
      <div className="gridProjextBox">
        {/* PROJECT */}
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={pablo} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Pointapp</h1>
            <hr className="hrLine" />
            <div className="liveLink">
              <Reveal>
                <TbBrandGithubFilled className="sideBarIconRound" />
                <TbBrandGithubFilled className="sideBarIconRound" />
              </Reveal>
            </div>
          </div>
          <Reveal>
            <h6 className="projecth6Txt">
              Node - Express - Postgres - Kafka - Redis
            </h6>
          </Reveal>
          <Reveal>
            <p className="project6Txt">
              Think Zapier but for paint. Built with a team of four college
              friends and scaled to 1 billion requests per day. This was a fun
              one.{" "}
              <span className="green" onClick={Handler}>
                Learn more
              </span>
            </p>
          </Reveal>
          <div className={expand ? "learnMore" : "learnMore learnMore-open"}>
            <MdCancel className="learnMoreham" onClick={Handler} />
            <div className="learnMoreWidth">
              <img src={pablo} alt="" className="learnMoreImg" />
              <div className="learn_More">
                <h1 className="learnMoreh1Txt">Paint Reference 4</h1>
                <h6 className="learnMoreh6Txt">
                  Python - FastAPI - SQLAlchemy
                </h6>
                <p className="learnMorepTxt">
                  Alright, you got me. I'm all out of paint references. <br />
                  <br /> Point is, use this space to explain a bit further WHAT
                  this project is, as well as what YOU contributed to it. You
                  get the idea. <br />
                  <br />
                  Now more lorem :) Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Aspernatur quia officia odio nulla
                  consectetur aperiam ad tempora magni magnam nesciunt. <br />
                  <br />
                  Fuga id sapiente facere ipsa eius exercitationem officiis
                  deleniti, rerum dolorum. Deserunt soluta modi culpa animi.
                </p>
                <h4 className="learnMoreh4Txt">
                  Project Links<span className="green">.</span>
                </h4>
                <div className="projectLinkDiv">
                  <div className="projectIconDiv">
                    <TbBrandGithubFilled className="sideBarIconRound" />{" "}
                    <p>source code</p>
                  </div>
                  <div className="projectIconDiv">
                    <TbBrandGithubFilled className="sideBarIconRound" />{" "}
                    <p>live project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={carlos} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Pointapp</h1>
            <hr className="hrLine" />
            <div className="liveLink">
              <TbBrandGithubFilled className="sideBarIconRound" />
              <TbBrandGithubFilled className="sideBarIconRound" />
            </div>
          </div>
          <Reveal>
          <h6 className="projecth6Txt">
            Node - Express - Postgres - Kafka - Redis
          </h6>
          </Reveal>
          <Reveal>
          <p className="project6Txt">
            Think Zapier but for paint. Built with a team of four college
            friends and scaled to 1 billion requests per day. This was a fun
            one. <span className="green">Learn more</span>
          </p>
          </Reveal>
        </div>
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={bentraco} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Pointapp</h1>

            <hr className="hrLine" />
            <div className="liveLink">
              <TbBrandGithubFilled className="sideBarIconRound" />
              <TbBrandGithubFilled className="sideBarIconRound" />
            </div>
          </div>
          <Reveal>
          <h6 className="projecth6Txt">
            Node - Express - Postgres - Kafka - Redis
          </h6>
          </Reveal>
          <Reveal>
          <p className="project6Txt">
            Think Zapier but for paint. Built with a team of four college
            friends and scaled to 1 billion requests per day. This was a fun
            one. <span className="green">Learn more</span>
          </p>
          </Reveal>
        </div>
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={yourProject} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Pointapp</h1>

            <hr className="hrLine" />
            <div className="liveLink">
              <TbBrandGithubFilled className="sideBarIconRound" />
              <TbBrandGithubFilled className="sideBarIconRound" />
            </div>
          </div>
          <Reveal>
          <h6 className="projecth6Txt">
            Node - Express - Postgres - Kafka - Redis
          </h6>
          </Reveal>
          <Reveal>
          <p className="project6Txt">
            Think Zapier but for paint. Built with a team of four college
            friends and scaled to 1 billion requests per day. This was a fun
            one. <span className="green">Learn more</span>
          </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Project;
