import React, { Component } from "react";
import classes from "./GradePage.module.css";

export default class GradePage extends Component {
  render() {
    let TopicsArray = this.props.gradeData.map((item, index) => {
      return (
        <div className={classes.Problem} key={index}>
          <div>
            <p className={classes.ProblemStatement}>
              {item.topic}
              <br />
              <p className={classes.Date}>
                {item.date === undefined
                  ? null
                  : "Submission Date: " + item.date}
              </p>
            </p>
          </div>
          <p
            className={`${
              item.marks === "Pending"
                ? classes.ProblemStatus
                : classes.ScoreStatus
            }`}
          >
            {item.marks}
          </p>
        </div>
      );
    });

    return (
      <div className={classes.Topic}>
        <div className={classes.TitleSection}>
          <img src={this.props.courseLogo} className={classes.TopicImg} />
          <div>
            <p className={classes.Title}>{this.props.courseTitle}</p>

            <div className={classes.ScoreContainer}>
              <div className={classes.ScoreData}>
                <p className={classes.Score}>18</p>
                <p className={classes.ScoreTitle}>Class Rank</p>
              </div>
              <div className={classes.ScoreData}>
                <p className={classes.Score}>0.0%</p>
                <p className={classes.ScoreTitle}>Avg Score</p>
              </div>
              <div className={classes.ScoreData}>
                <p className={classes.Score}>0.0</p>
                <p className={classes.ScoreTitle}>SHS</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ProblemSection}>{TopicsArray}</div>
      </div>
    );
  }
}
