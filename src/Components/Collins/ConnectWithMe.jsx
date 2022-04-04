import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function ConnectWithMe(props) {
  return (
    <div className="row" id="connectSection">
      <div className="col-md-12">
        <div className="connectContainer">
          <h4>Connect with me</h4>
          <div className="socials">
            <a href={props.twitterAddress} className={props.twitterDisplay}>
              <img
                className="img-fluid icon"
                src="media/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href={props.whatsappAddress}>
              <img
                className="img-fluid icon"
                src="media/whatsapp.png"
                alt="Whatsapp"
              />
            </a>
            <a href={props.githubAddress}>
              <img
                className="img-fluid icon"
                src="media/github.png"
                alt="Github"
              />
            </a>
            <a href={props.linkedInAddress} className={props.linkedInDisplay}>
              <img
                className="img-fluid icon"
                src="media/linkedin.png"
                alt="Linkedin"
              />
            </a>
            <a href={props.email} className={props.emailDisplay}>
              <AiOutlineMail size="32px" className="emailIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithMe;
