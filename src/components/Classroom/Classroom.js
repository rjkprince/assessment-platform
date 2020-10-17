import React, { Component } from "react";
import classes from "./Classroom.module.css";
import { Link } from "react-router-dom";
class Classroom extends Component {
  render() {
    return (
      <div className={classes.MainBody}>
        <div className={classes.CoursePage}>
          <p className={classes.Offering}>Classroom</p>
          <p className={classes.SkillStatus}>Your Enrolled Courses</p>
          <div className={classes.CardsWrapper}>
            <div className={classes.Card}>
              <img
                src="https://assessments.edyoda.com/uploads/static/images/RB020420/MicrosoftTeams-image.png"
                className={classes.CourseImg}
                alt="course-img"
              />
              <h1 className={classes.CourseTitle}>
                RB-020420 - React Developer Program
              </h1>
              <p className={classes.Units}>9 Units</p>
            </div>
            <Link to="/dashboard/DSA-130720#130720">
              <div className={classes.Card}>
                <img
                  src="https://assessments.edyoda.com/uploads/static/images/DSA130720/MicrosoftTeams-image_1.png"
                  className={classes.CourseImg}
                  alt="course-img"
                />
                <h1 className={classes.CourseTitle}>
                  DSA-130720 - Data Structures and Algorithms
                </h1>
                <p className={classes.Units}>9 Units</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Classroom;
