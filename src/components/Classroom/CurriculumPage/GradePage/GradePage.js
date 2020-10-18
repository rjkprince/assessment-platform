import React, { Component } from 'react'
import classes from './GradePage.module.css'



export default class GradePage extends Component {
    state={
        topicData:[1,2,3,4]
    }

   



    render() {

        let TopicsArray = this.state.topicData.map((item) => {
            return (
              <div className={classes.Problem} key={item.id}>
                {/* <Link
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
                </Link> */}
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
                src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png"
                className={classes.TopicImg}
              />
              <div>
                <p className={classes.Title}>AWS</p>
               
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
        )
    }
}
