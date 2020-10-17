import React, { Component } from "react";
import classes from "./Curriculum.module.css";
export default class CurriculumPage extends Component {
  state = {
    ActiveLink: 1,
    ActiveCard: {
      id: 1,
      status: true,
    },
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  LinkChange = (id) => {
    this.setState({
      ActiveLink: id,
    });
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
          <div className={classes.SectionOne}>
            <div className={classes.Card}>
              <div className={classes.ImgSec}>
                <img
                  className={classes.SessionImg}
                  src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png"
                  alt="session-img"
                />
                <p className={classes.SessionTitle}>Intro to AWS</p>
              </div>
              <p className={classes.UserData}>
                Grade : <span className={classes.UserScore}>NA</span>
              </p>
              <p className={classes.UserData}>
                Total Attendance : <span className={classes.UserScore}>NA</span>
                <br />
                Last Week
              </p>
              <p className={classes.UserData}>
                Attendance : <span className={classes.UserScore}>NA</span>
              </p>
            </div>
            <div className={classes.Card}>
              <h1 className={classes.TitleModule}>Module Plan</h1>
              <p className={classes.Weeks}>Week - 1</p>
            </div>
          </div>
          <div className={classes.SectionTwo}>
            <div
              className={`${classes.Card} ${classes.SessionCard} ${
                this.state.ActiveCard.id === 1 &&
                this.state.ActiveCard.status === true
                  ? classes.ActiveCard
                  : null
              }`}
              onClick={() => this.changeActiveCard(1)}
            >
              <h1 className={classes.TitleSession}>Day-1 | Intro To Cloud</h1>
              <p className={classes.SessionLink}>Session Plan</p>
              <p className={classes.SessionLink}>Session Recording</p>
            </div>
            <div
              className={`${classes.Card} ${classes.SessionCard} ${
                this.state.ActiveCard.id === 2 &&
                this.state.ActiveCard.status === true
                  ? classes.ActiveCard
                  : null
              }`}
              onClick={() => this.changeActiveCard(2)}
            >
              <h1 className={classes.TitleSession}>Day-1 | Intro To Cloud</h1>
              <p className={classes.SessionLink}>Session Plan</p>
              <p className={classes.SessionLink}>Session Recording</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
