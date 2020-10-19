import React, { Component } from "react";
import classes from "./SessionRecord.module.css";
export default class SessionRecord extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <div class="iframeBorder">
          <iframe
            src={this.props.location.state.dayPlan.dayRecording}
            title="session recording"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}
