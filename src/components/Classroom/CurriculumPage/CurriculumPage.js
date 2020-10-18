import React, { Component } from "react";
import classes from "./Curriculum.module.css";
import GradePage from "./GradePage/GradePage";
import UnitPage from "./UnitPage/UnitPage";
import axios from "axios";
export default class CurriculumPage extends Component {
  state = {
    ActiveLink: 1,
    gradeData: [],
    unitData: null,
    courseTitle: "",
    courseLogo: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(
        "https://5f8724ee49ccbb00161770a7.mockapi.io/moduleTopicsPage/" +
          this.props.match.params.batchId
      )
      .then((response) => {
        console.log(response.data.data[this.props.match.params.weekId - 1]);
        let responseData =
          response.data.data[this.props.match.params.weekId - 1];
        this.setState({
          courseTitle: responseData.title,
          courseLogo: responseData.courseLogo,
          gradeData: responseData.gradePage,
          unitData: responseData.unitPage,
        });
      });
  }
  LinkChange = (id) => {
    this.setState({
      ActiveLink: id,
    });
  };

  render() {
    return (
      <div className={classes.Curriculum}>
        <div className={classes.Navigation}>
          <div
            className={`${classes.Link} ${
              this.state.ActiveLink === 1 ? classes.ActiveLink : null
            }`}
            onClick={() => this.LinkChange(1)}
          >
            Unit
          </div>
          <div
            className={`${classes.Link} ${
              this.state.ActiveLink === 2 ? classes.ActiveLink : null
            }`}
            onClick={() => this.LinkChange(2)}
          >
            Grade
          </div>
          <div className={classes.Extra}></div>
        </div>
        <div className={classes.MainContainer}>
          {this.state.ActiveLink === 1 ? (
            this.state.unitData === null ? null : (
              <UnitPage
                courseLogo={this.state.courseLogo}
                courseTitle={this.state.courseTitle}
                unitData={this.state.unitData}
              />
            )
          ) : (
            <GradePage
              courseLogo={this.state.courseLogo}
              courseTitle={this.state.courseTitle}
              gradeData={this.state.gradeData}
            />
          )}
        </div>
      </div>
    );
  }
}
