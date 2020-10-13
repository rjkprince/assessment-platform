import React, { Component } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import classes from './Layout.module.css'
export default class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Header />
                <div className={classes.Children}>{this.props.children}</div>
                <Footer />
            </div>
        )
    }
}
