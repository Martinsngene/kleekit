import React from "react";

function ConnectWithMe(props) {
  return (
    <div className="row" id="connectSection">
      <div className="col-md-12">
        <div className="connectContainer">
          <h4>Connect with me</h4>
          <div className="socials">
            <a href={props.instagramAddress} className={props.InstagramDisplay}>
              <img
                className="img-fluid icon"
                src="media/instagram.png"
                alt="Instagram"
              />
            </a>
            <a href={props.twitterAddress} className={props.twitterDisplay}>
              <img
                className="img-fluid icon"
                src="media/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href={props.behanceAddress} className={props.behanceDisplay}>
              <img
                className="img-fluid icon"
                src="media/behance.png"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithMe;