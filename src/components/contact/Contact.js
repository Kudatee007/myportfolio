import React from "react";
import "./Contact.css";
import mail from "../img/gmail.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div>
        <h1 className="contact1Txt">
          Contact<span className="green">.</span>
        </h1>
        <p className="contactpTxt">
          Shoot me an email if you want to connect! You can also find me on
          Linkedin or Twitter if that's more your speed.
        </p>
        <div className="contactBox">
          <img src={mail} alt="" className="mailIcon" />
          <p className="contactppTxt">Timilehinkudaisi01</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
