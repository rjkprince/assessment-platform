import React, { Component } from 'react'
import classes from './Header.module.css'
import Logo from '../../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import {faSortDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
export default class Header extends Component {

    render() {
    
        return (
            <div className={classes.Header}>
                <div className={classes.NavSection}>
                    <Link to='/'><img src={Logo} className={classes.Logo} alt="Logo"/></Link>
                    <Link to='/' className={classes.Nav}>Practice Arena</Link>
                    <Link to='/Classroom' className={classes.Nav}>Classroom</Link>
                    <a href="https://recruitcrm.io/jobs/EdYoda_jobs" className={classes.Nav}>View Jobs</a>
                </div>
                <div className={classes.UserSection}>
                    <div className={classes.Notification}>
                        <FontAwesomeIcon className={classes.Bell} icon={faBell} />
                        <div className={classes.Count}>10</div>
                    </div>
                     <p><span className={classes.User}>Username</span> <FontAwesomeIcon className={classes.Arrow} icon={faSortDown} /></p>
                     
                </div>
            </div>
        )
    }
}
