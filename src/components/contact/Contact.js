import React from "react";
import "./Contact.css";
import mail from "../img/gmail.png";
import Reveal from "../utils/Reveal";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div>
        {/* <Reveal> */}
          <h1 className="contact1Txt">
            Contact<span className="green">.</span>
          </h1>
        {/* </Reveal> */}
        <Reveal>
          <p className="contactpTxt">
            Shoot me an email if you want to connect! You can also find me on
            Linkedin or Twitter if that's more your speed.
          </p>
        </Reveal>
        <div className="contactBox">
          <img src={mail} alt="" className="mailIcon" />
          <Reveal>
            <p className="contactppTxt">Timilehinkudaisi01</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
