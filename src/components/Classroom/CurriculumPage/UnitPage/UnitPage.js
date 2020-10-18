import React, { Component } from "react";
import classes from "./UnitPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
export default class UnitPage extends Component {
  state = {
    ActiveCard: {
      id: 1,
      status: true,
    },
    ActiveWeek: 1,
  };

  changeActiveCard = (id) => {
    if (id === this.state.ActiveCard.id) {
      this.setState({
        ActiveCard: {
          ...this.state.ActiveCard,
          status: !this.state.ActiveCard.status,
        },
      });
    } else {
      this.setState({
        ActiveCard: {
          id: id,
          status: true,
        },
      });
    }
  };
  changeActiveWeek = (id) => {
    this.setState({
      ActiveWeek: id,
    });
  };
  render() {
    return (
      <div className={classes.MainContainer}>
        <div className={classes.SectionOne}>
          <div className={classes.Card}>
            <div className={classes.ImgSec}>
              <img
                className={classes.SessionImg}
                src={this.props.courseLogo}
                alt="session-img"
              />
              <p className={classes.SessionTitle}>{this.props.courseTitle}</p>
            </div>
            <p className={classes.UserData}>
              Grade :{" "}
              <span className={classes.UserScore}>
                {this.props.unitData.grades}
              </span>
            </p>
            <p className={classes.UserData}>
              Total Attendance :{" "}
              <span className={classes.UserScore}>
                {this.props.unitData.totalAttendance}
              </span>
              <br />
              Last Week
            </p>
            <p className={classes.UserData}>
              Attendance :{" "}
              <span className={classes.UserScore}>
                {this.props.unitData.lastWeekAttendance}
              </span>
            </p>
          </div>
          <div className={classes.Card}>
            <h1 className={classes.TitleModule}>Module Plan</h1>
            {this.props.unitData.modulePlan.map((item) => (
              <p
                key={item.id}
                className={`${classes.Weeks} ${
                  this.state.ActiveWeek === item.id ? classes.BlueWeek : null
                }`}
                onClick={() => this.changeActiveWeek(item.id)}
              >
                Week - {item.id}
              </p>
            ))}
          </div>
        </div>
        <div className={classes.SectionTwo}>
          {this.props.unitData.modulePlan[this.state.ActiveWeek - 1]
            .weekPlan === undefined ? (
            <div className={`${classes.Card} ${classes.NoData}`}>
              Sorry No Data Scheduled At The Moment :(
            </div>
          ) : (
            this.props.unitData.modulePlan[
              this.state.ActiveWeek - 1
            ].weekPlan.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${classes.Card} ${classes.SessionCard} ${
                    this.state.ActiveCard.id === item.id &&
                    this.state.ActiveCard.status === true
                      ? classes.ActiveCard
                      : null
                  }`}
                >
                  <h1
                    className={classes.TitleSession}
                    onClick={() => this.changeActiveCard(item.id)}
                  >
                    <div className={classes.TitleWrapper}>
                      <div>{item.name}</div>{" "}
                      <FontAwesomeIcon
                        className={`${classes.AngleDown} ${
                          this.state.ActiveCard.id === item.id &&
                          this.state.ActiveCard.status === true
                            ? classes.AngleUp
                            : null
                        }`}
                        icon={faAngleDown}
                      />{" "}
                    </div>
                  </h1>

                  {item.dayPlan.sessionLink === undefined ? null : (
                   <Link to={{pathname:"/sessionpage/"+item.id,state:{dayPlan:this.props.unitData.modulePlan[this.state.ActiveWeek - 1]
                    .weekPlan[item.id-1]}}} className={classes.SessionLink}>Session Plan</Link> 
                  )}
                  {item.dayPlan.assignPlan === undefined ? null : (
                    <p className={classes.SessionLink}>
                      {item.dayPlan.assignPlan}
                    </p>
                  )}
                  {item.dayPlan.quiz === undefined ? null : (
                    <p className={classes.SessionLink}>{item.dayPlan.quiz}</p>
                  )}
                  {item.dayRecording === undefined ? null : (
                    <p className={classes.SessionLink}>Session Recording</p>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
