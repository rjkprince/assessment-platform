import React, { Component } from "react";
import LoaderGif from "../../assets/ProgressLoader.gif";
import classes from "./ProgressLoader.module.css";
class ProgressLoader extends Component {
  render() {
    return (
      <div className={classes.ProgressLoader}>
        <img src={LoaderGif} alt="Loader" />
      </div>
    );
  }
}

export default ProgressLoader;
