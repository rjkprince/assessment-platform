import React, { Component } from "react";
import classes from "./ProblemList.module.css";
import axios from "axios";
import ProgressLoader from "../ProgressLoader/ProgressLoader";

export default class ProblemList extends Component {
  state = {
    problemsList: [],
    Title: "",
    Topic: "",
    topicList: {},
    loaderOne: true,
    loaderTwo: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    let TopicId = this.props.match.params.id;
    let TitleId = this.props.match.params.titleId;

    this.setState({ Title: this.props.match.params.title });

    //  Topics
    axios
      .get(
        "https://5ee2489c8b27f30016094881.mockapi.io/topicsDetails/" + TitleId
      )
      .then((response) => {
        this.setState({
          Topic: response.data.data[TopicId - 1].topic,
          loaderOne: false,
        });
        // console.log(this.state.Topic);
      })
      .catch((error) => {
        console.log("topics details fetch request failed", error);
      });

    //   Problems
    axios
      .get("https://5ee2489c8b27f30016094881.mockapi.io/ProblemList/" + TitleId)
      .then((response) => {
        let resData =
          response.data.data[TopicId] === undefined
            ? []
            : response.data.data[TopicId].data;
        this.setState({
          problemsList: resData,
          loaderTwo: false,
        });
      })
      .catch((error) => {
        console.log("problem details fetch request failed", error);
      });
  }

  render() {
    let count = 0;
    let problemsArr = this.state.problemsList.map((item) => {
      if ((item.id - 1) % 4 === 0) {
        count++;
      }
      return (
        <div
          key={item.id}
          className={`${classes.ProblemCard} ${
            count % 2 === 0 ? classes.BlueCard : classes.PurpleCard
          }`}
        >
          <p
            className={`${classes.SerialNo} ${
              count % 2 === 0
                ? classes.BlueBackGround
                : classes.PurpleBackGround
            }`}
          >
            Problem {item.id}
          </p>
          <div className={classes.ProblemStatementDiv}>
            <p className={classes.ProblemStatement}>{item.problem}</p>
            <p className={classes.Level}>Level : Easy, and Max score : 15</p>
          </div>
          <p className={classes.Todo}>Solve Problem</p>
        </div>
      );
    });
    return this.state.loaderOne || this.state.loaderTwo ? (
      <ProgressLoader />
    ) : (
      <div className={classes.ProblemList}>
        <p className={classes.ProblemTitle}>
          {this.state.Title} &#x3E; {this.state.Topic} &#x3E;
        </p>
        <h1 className={classes.StaticTitle}>Problems</h1>

        <div className={classes.ProblemsContainer}>{problemsArr}</div>
      </div>
    );
  }
}
