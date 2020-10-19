import React, { Component } from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
export default class Footer extends Component {
  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.FooterNav}>
          <h1>EDYODA</h1>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
        </div>
        <div className={classes.FooterNav}>
          <h1>RESOURCES</h1>
          <p>Courses</p>
          <p>Learning Videos</p>
          <p>EdYoda Stories</p>
          <p>University</p>
        </div>
        <div className={classes.FooterNav}>
          <h1>FOR ENTERPRISES</h1>
          <p>Hire EdYoda Graduates</p>
          <h1>QUICK LINKS</h1>
          <p>Learn and Earn</p>
          <p>Become a Learning-Enabler</p>
          <p>Tips for Learning-Enabler</p>
          <p>Request New Topic</p>
        </div>
        <div className={classes.FooterNav}>
          <h1>CONNECT</h1>
          <p className={classes.Address}>
            2nd Floor #188, Survey No. - 123/1,
            <br /> Incubes Building Next to McDonalds,
            <br />
            ITPL Main Rd, Brookefield, Bengaluru,
            <br /> Karnataka-560037, India
          </p>
          <div className={classes.ConnectDiv}>
            <FontAwesomeIcon className={classes.Envelope} icon={faEnvelope} />
            <p className={classes.ConnectOption}> hello@edyoda.com</p>
          </div>
          <div className={classes.ConnectDiv}>
            <FontAwesomeIcon className={classes.Phone} icon={faPhone} />
            <p className={classes.ConnectOption}> +91 8971554184</p>
          </div>
          {/* 4 Icons */}
          <div className={classes.ConnectDiv}>
            <div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={classes.BrandIcon}
              />

              <FontAwesomeIcon icon={faTwitter} className={classes.BrandIcon} />

              <FontAwesomeIcon
                icon={faFacebookF}
                className={classes.BrandIcon}
              />

              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={classes.BrandIcon}
              />
            </div>
          </div>
          <div className={classes.CopyRightIcon}>
            <p>
              <FontAwesomeIcon icon={faCopyright} />
              <span>2020 </span>
              <br />
              zekeLabs Technologies Private Limited
            </p>
          </div>
        </div>
      </div>
    );
  }
}
