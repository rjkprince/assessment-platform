import React, { Component } from 'react'
import classes from './Footer.module.css'
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
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        )
    }
}
