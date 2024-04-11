import React, { useState } from "react";
import "./Project.css";
import Reveal from "../utils/Reveal";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import carlos from "../img/carlos.jpeg";
import pablo from "../img/pablo.png";
import bentraco from "../img/bentraco.png";
import metaBnb from "../img/metabnb.png";
import { LuExternalLink } from "react-icons/lu";

const Project = () => {
  const [expand, setExpand] = useState(true);
  const [expand1, setExpand1] = useState(true);
  const [expand2, setExpand2] = useState(true);
  const [expand3, setExpand3] = useState(true);

  function Handler() {
    setExpand(!expand);
  }
  function Handler1() {
    setExpand1(!expand1);
  }
  function Handler2() {
    setExpand2(!expand);
  }
  function Handler3() {
    setExpand3(!expand3);
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
            <h1 className="projectName">Pablo Dimensions</h1>
            <hr className="hrLine" />
            <div className="liveLink">
              <Reveal>
                <a
                  href="https://github.com/Kudatee007/Pablo-dimensions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithubFilled className="sideBarIconRound" />
                </a>
                <a
                  href="https://superlative-liger-5cd1f3.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink className="sideBarIconRound" />
                </a>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <h6 className="projecth6Txt">
              React.js - Express - React-Redux - Node.js
            </h6>
          </Reveal>
          <Reveal>
            <p className="project6Txt">
              Pablo Dimensions: Where style meets innovation. Explore our
              curated collection of fashion-forward pieces that empower
              self-expression.
              <span className="green cursor" onClick={Handler}>
                Learn more
              </span>
            </p>
          </Reveal>
          <div className={expand ? "learnMore" : "learnMore learnMore-open"}>
            <MdCancel className="learnMoreham" onClick={Handler} />
            <div className="learnMoreWidth">
              <img src={pablo} alt="" className="learnMoreImg" />
              <div className="learn_More">
                <h1 className="learnMoreh1Txt">Pablo Dimensions</h1>
                <h6 className="learnMoreh6Txt">React - React-Redux - Node</h6>
                <p className="learnMorepTxt">
                  Pablo Dimensions is more than just a clothing brand; it's a
                  fusion of style and innovation, where every garment tells a
                  unique story. As the creator of this digital masterpiece, I
                  poured my creativity and expertise into crafting an immersive
                  online experience that mirrors the brand's ethos. <br />
                  <br />
                  In this project, I spearheaded the development of the website
                  from concept to execution. I designed sleek interfaces,
                  implemented seamless navigation, and ensured a user-friendly
                  experience. <br />
                  <br />
                  My contributions didn't stop there; I also integrated
                  e-commerce functionality, allowing customers to browse and
                  purchase our curated collections with ease. <br />
                  <br />
                  Ready to step into the world of Pablo Dimensions? Click below
                  and embark on a journey of style and creativity like no other.
                </p>
                <h4 className="learnMoreh4Txt">
                  Project Links<span className="green">.</span>
                </h4>
                <div className="projectLinkDiv">
                  <div className="projectIconDiv">
                    <a
                      href="https://github.com/Kudatee007/Pablo-dimensions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandGithubFilled className="sideBarIconRound" />
                    </a>
                    <a
                      href="https://github.com/Kudatee007/Pablo-dimensions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="srcCode">source code</p>
                    </a>
                  </div>
                  <div className="projectIconDiv">
                    <a
                      href="https://superlative-liger-5cd1f3.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="sideBarIconRound" />
                    </a>
                    <a
                      href="https://superlative-liger-5cd1f3.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="srcCode">live project</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={carlos} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Carlos Construction</h1>
            <hr className="hrLine" />
            <div className="liveLink">
              <Reveal>
                <a
                  href="https://github.com/Kudatee007/carlosconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithubFilled className="sideBarIconRound" />
                </a>
                <a
                  href="https://carlosconstructions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink className="sideBarIconRound" />
                </a>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <h6 className="projecth6Txt">Css - Javascript - React.Js</h6>
          </Reveal>
          <Reveal>
            <p className="project6Txt">
              Carlos Construction is more than just a company; it's a symbol of
              excellence and innovation in the construction industry.
              <span className="green cursor" onClick={Handler1}>
                Learn more
              </span>
            </p>
          </Reveal>
          <div className={expand1 ? "learnMore" : "learnMore learnMore-open"}>
            <MdCancel className="learnMoreham" onClick={Handler1} />
            <div className="learnMoreWidth">
              <img src={carlos} alt="" className="learnMoreImg" />
              <div className="learn_More">
                <h1 className="learnMoreh1Txt">Carlos Construction</h1>
                <h6 className="learnMoreh6Txt">Css - Javascript - React.Js</h6>
                <p className="learnMorepTxt">
                  Welcome to Carlos Construction: where vision meets reality in
                  the world of construction. <br />
                  <br />
                  Carlos Construction is a beacon of excellence and innovation
                  in the construction industry, known for its commitment to
                  quality craftsmanship and ambitious projects. As a software
                  developer, I had the privilege of collaborating with Carlos
                  Construction to bring their vision to life online. <br />
                  <br />
                  In this project, I and my team played a key role in developing
                  a robust online platform for Carlos Construction, showcasing
                  their impressive portfolio of completed projects and the wide
                  range of services they offer.. <br />
                  <br />
                  Through seamless functionality and intuitive design, the
                  website serves as a digital showcase of Carlos Construction's
                  capabilities, inviting potential clients and partners to
                  explore the art of construction done right.
                </p>
                <h4 className="learnMoreh4Txt">
                  Project Links<span className="green">.</span>
                </h4>
                <div className="projectLinkDiv">
                  <div className="projectIconDiv">
                    <a
                      href="https://github.com/Kudatee007/carlosconstruction"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandGithubFilled className="sideBarIconRound" />
                    </a>
                    <p className="srcCode">source code</p>
                  </div>
                  <div className="projectIconDiv">
                    <a
                      href="https://carlosconstructions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="sideBarIconRound" />
                    </a>
                    <p className="srcCode">live project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={bentraco} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Bentraco</h1>
            <hr className="hrLine" />
            <div className="liveLink">
              <Reveal>
                <a
                  href="https://github.com/Kudatee007/Sundown-log"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithubFilled className="sideBarIconRound" />
                </a>
                <a
                  href="https://lighthearted-sopapillas-310476.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink className="sideBarIconRound" />
                </a>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <h6 className="projecth6Txt">Css - Javascript - React</h6>
          </Reveal>
          <Reveal>
            <p className="project6Txt">
              Bentraco stands as a hallmark of American luxury, offering
              unparalleled limousine and trucking services that redefine
              sophistication and reliability.
              <span className="green cursor" onClick={Handler2}>
                Learn more
              </span>
            </p>
          </Reveal>
          <div className={expand2 ? "learnMore" : "learnMore learnMore-open"}>
            <MdCancel className="learnMoreham" onClick={Handler2} />
            <div className="learnMoreWidth">
              <img src={bentraco} alt="" className="learnMoreImg" />
              <div className="learn_More">
                <h1 className="learnMoreh1Txt">Bentaco</h1>
                <h6 className="learnMoreh6Txt">Css - Javascript - React</h6>
                <p className="learnMorepTxt">
                  Welcome to Bentraco: Where Luxury Meets Excellence in American
                  Limousine and Trucking Services. <br />
                  <br /> Bentraco stands as a hallmark of American luxury,
                  offering unparalleled limousine and trucking services that
                  redefine sophistication and reliability. <br />
                  <br />
                  As a software developer, I had the privilege of collaborating
                  with Bentraco to enhance their online presence and streamline
                  their operations. <br />
                  <br />
                  In this project, I contributed to the development of a
                  cutting-edge website for Bentraco, showcasing their fleet of
                  luxurious limousines and top-of-the-line trucks. From sleek
                  sedans to spacious trucks, every vehicle in the Bentraco
                  lineup embodies the epitome of style and performance.
                  <br />
                  <br />
                  Through seamless integration of booking systems, intuitive
                  navigation, and captivating visuals, the website offers a
                  seamless experience for clients seeking luxury transportation
                  or efficient trucking solutions. Whether it's a special
                  occasion or a crucial delivery, Bentraco delivers excellence
                  every time.
                </p>
                <h4 className="learnMoreh4Txt">
                  Project Links<span className="green">.</span>
                </h4>
                <div className="projectLinkDiv">
                  <div className="projectIconDiv">
                    <a
                      href="https://github.com/Kudatee007/Sundown-log"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandGithubFilled className="sideBarIconRound" />
                    </a>
                    <a
                      href="https://github.com/Kudatee007/Sundown-log"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>source code</p>
                    </a>
                  </div>
                  <div className="projectIconDiv">
                    <a
                      href="https://lighthearted-sopapillas-310476.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="sideBarIconRound" />
                    </a>
                    <a
                      href="https://lighthearted-sopapillas-310476.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>live project</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 4 */}
        <div className="projectDivBox">
          <div className="projectImg">
            <img src={metaBnb} alt="" className="yourProject" />
          </div>
          <div className="projectNameBox">
            <h1 className="projectName">Metabnb</h1>

            <hr className="hrLine" />
            <div className="liveLink">
              <Reveal>
                <a
                  href="https://github.com/Kudatee007/MetaB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandGithubFilled className="sideBarIconRound" />
                </a>
                <a
                  href="https://dancing-pothos-a57103.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink className="sideBarIconRound" />
                </a>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <h6 className="projecth6Txt">Css - Javascript - React</h6>
          </Reveal>
          <Reveal>
            <p className="project6Txt">
              Metabnb redefines the concept of home away from home in the
              digital realm, offering access to luxury and affordable houses in
              the metaverse.
              <span className="green cursor" onClick={Handler3}>
                Learn more
              </span>
            </p>
          </Reveal>
          <div className={expand3 ? "learnMore" : "learnMore learnMore-open"}>
            <MdCancel className="learnMoreham" onClick={Handler3} />
            <div className="learnMoreWidth">
              <img src={metaBnb} alt="" className="learnMoreImg" />
              <div className="learn_More">
                <h1 className="learnMoreh1Txt">Paint Reference 4</h1>
                <h6 className="learnMoreh6Txt">Css - Javascript - React</h6>
                <p className="learnMorepTxt">
                  Welcome to Metabnb: Your Gateway to Luxury Living in the
                  Metaverse. <br />
                  <br />
                  Metabnb redefines the concept of home away from home in the
                  digital realm, offering access to luxury and affordable houses
                  in the metaverse.
                  <br />
                  <br />
                  In this project, I played a pivotal role in developing a
                  user-friendly website for Metabnb, showcasing a diverse range
                  of virtual properties that cater to every taste and budget.
                  From sleek penthouses to cozy cottages, each house in the
                  Metabnb collection promises an immersive and unforgettable
                  experience. <br />
                  <br />
                  Whether you're seeking a luxurious retreat or a cozy hideaway,
                  Metabnb invites you to step into a world where the
                  possibilities are limitless.
                </p>
                <h4 className="learnMoreh4Txt">
                  Project Links<span className="green">.</span>
                </h4>
                <div className="projectLinkDiv">
                  <div className="projectIconDiv">
                    <a
                      href="https://github.com/Kudatee007/MetaB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandGithubFilled className="sideBarIconRound" />
                    </a>
                    <a
                      href="https://github.com/Kudatee007/MetaB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="srcCode">source code</p>
                    </a>
                  </div>
                  <div className="projectIconDiv">
                    <a
                      href="https://dancing-pothos-a57103.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="sideBarIconRound" />
                    </a>
                    <a
                      href="https://dancing-pothos-a57103.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="srcCode">live project</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
