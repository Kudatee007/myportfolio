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
            Feel free to reach out via email if you'd like to connect!
            Alternatively, you can connect with me on LinkedIn or Twitter if
            that suits you better.
          </p>
        </Reveal>
        <div className="contactBox">
          <img src={mail} alt="" className="mailIcon" />
          <Reveal>
            <p className="contactppTxt">Timilehinkudaisi@gmail.com</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
