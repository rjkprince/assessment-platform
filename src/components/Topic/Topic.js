import React, { Component } from "react";
import classes from "./Topic.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
class Topic extends Component {
  state = {
    topicData: {
      data: [],
    },
    cardData: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    let hashKey = this.props.location.hash.split("#")[1];

    axios
      .get(
        "https://5f564c7b32f56200168bd3af.mockapi.io/practice_arena/" + hashKey
      )
      .then((res) => {
        this.setState({
          cardData: res.data,
        });
      })
      .catch((err) => {
        console.log("error while get request to practice_arena");
        console.log(err.toString().split(": ")[1] === "Network Error");
      });
    axios
      .get(
        "https://5ee2489c8b27f30016094881.mockapi.io/topicsDetails/" + hashKey
      )
      .then((response) => {
        this.setState({
          topicData: response.data,
        });
      })
      .catch((error) => {
        console.log("topics details fetch request failed", error);
      });
  }
  render() {
    let TopicsArray = this.state.topicData.data.map((item) => {
      return (
        <div className={classes.Problem} key={item.id}>
          <Link
            to={`/courses/${this.state.cardData.title}/${
              this.props.location.hash.split("#")[1]
            }/${item.id}`}
          >
            <p className={classes.ProblemStatement}>
              {item.topic}
              <br />
              <p className={classes.Date}>
                {item.date === undefined
                  ? null
                  : "Submission Date: " + item.date}
              </p>
            </p>
          </Link>
          <p
            className={`${
              item.status === "Pending"
                ? classes.ProblemStatus
                : classes.ScoreStatus
            }`}
          >
            {item.status}
          </p>
        </div>
      );
    });

    return (
      <div className={classes.Topic}>
        <div className={classes.TitleSection}>
          <img
            src={this.state.cardData.thumbnail}
            className={`${classes.TopicImg} ${
              this.props.location.hash.split("#")[1] === "130720"
                ? classes.ClassroomImg
                : null
            }`}
            alt="topic-img"
          />
          <div>
            <p className={classes.Title}>{this.state.cardData.title}</p>
            {this.props.location.hash.split("#")[1] === "130720" ? (
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
            ) : (
              <div className={classes.ScoreData}>
                <p className={classes.Score}>0.0%</p>
                <p className={classes.ScoreTitle}>Avg Score</p>
              </div>
            )}
          </div>
        </div>
        <div className={classes.ProblemSection}>{TopicsArray}</div>
      </div>
    );
  }
}

export default Topic;
