import React, { Component } from "react";
import classes from "./Home.module.css";
import Card from "./Card/Card";
import axios from "axios";
import ProgressLoader from "../ProgressLoader/ProgressLoader";

export default class Home extends Component {
  state = {
    cardData: [],
    loading: true,
  };

  componentDidMount = () => {
    axios
      .get("https://5f564c7b32f56200168bd3af.mockapi.io/practice_arena")
      .then((res) => {
        this.setState({
          cardData: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log("error while get request to practice_arena");
        console.log(err.toString().split(": ")[1] === "Network Error");
      });
  };

  render() {
    return this.state.loading ? (
      <ProgressLoader />
    ) : (
      <div className={classes.MainBody}>
        <div className={classes.CoursePage}>
          <p className={classes.Offering}>Practice Arena</p>
          <p className={classes.SkillStatus}>All Skills</p>
          <p></p>
          <div className={classes.SkillCards}>
            {this.state.cardData.map((item) => {
              if (item.id !== "130720") {
                return <Card key={item.id} {...item} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
