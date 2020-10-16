import React, { Component } from 'react'
import classes from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope,faPhone,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {  faTwitter,faFacebookF,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {  faCopyright } from '@fortawesome/free-regular-svg-icons'
export default class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>
                <div className={classes.FooterNav}>
                    <h1>EDYODA</h1>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className={classes.FooterNav}>
                    <h1>RESOURCES</h1>
                    <a href="#">Courses</a>
                    <a href="#">Learning Videos</a>
                    <a href="#">EdYoda Stories</a>
                    <a href="#">University</a>
                </div>
                <div className={classes.FooterNav}>
                    <h1>FOR ENTERPRISES</h1>
                    <a href="#">Hire EdYoda Graduates</a>
                    <h1>QUICK LINKS</h1>
                    <a href="#">Learn and Earn</a>
                    <a href="#">Become a Learning-Enabler</a>
                    <a href="#">Tips for Learning-Enabler</a>
                    <a href="#">Request New Topic</a>
                </div>
                <div className={classes.FooterNav}>
                    <h1>CONNECT</h1>
                    <p>2nd Floor #188, Survey No. - 123/1,<br/> Incubes Building Next to McDonalds,<br/>
                     ITPL Main Rd, Brookefield, Bengaluru,<br/> Karnataka-560037, India</p>
                    <div className={classes.ConnectDiv}>
                    <FontAwesomeIcon className={classes.Envelope} icon={faEnvelope}/>
                    <a href="#" className={classes.ConnectOption}> hello@edyoda.com</a>
                    </div>
                    <div className={classes.ConnectDiv}>
                    <FontAwesomeIcon className={classes.Phone} icon={faPhone}/>
                    <a href="#" className={classes.ConnectOption}> +91 8971554184</a>
                    </div>
                    {/* 4 Icons */}
                    <div className={classes.ConnectDiv}>
                        <div>
                            <a href="#"><FontAwesomeIcon icon={faMapMarkerAlt} className={classes.BrandIcon} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} className={classes.BrandIcon}/></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} className={classes.BrandIcon}/></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className={classes.BrandIcon}/></a>
                        </div>
                    </div>
                    <div className={classes.CopyRightIcon}><p>
                        <FontAwesomeIcon  icon={faCopyright}/>
                        <span>2020 </span><br/>zekeLabs Technologies Private Limited
                        </p>
                       </div>
                </div>
            </div>
        )
    }
}
