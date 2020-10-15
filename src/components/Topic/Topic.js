import React, {Component} from 'react';
import classes from './Topic.module.css'
class Topic extends Component {
    render() {
        return (
            <div className={classes.Topic}>
                <div className={classes.TitleSection}>
                    <img src="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png" className={classes.TopicImg} alt="topic-img"/>
                    <div>
                        <p className={classes.Title}>Python</p>
                        <p className={classes.Score}>0.0%</p>
                        <p className={classes.ScoreTitle}>Avg Score</p>
                    </div>
                </div>
                <div className={classes.ProblemSection}>
                    <div className={classes.Problem}>
                        <p className={classes.ProblemStatement}>1). Operators and Conditional Statement</p>
                        <p className={classes.ProblemStatus}>Pending</p>
                    </div>
                    <div className={classes.Problem}>
                        <p className={classes.ProblemStatement}>1). Operators and Conditional Statement</p>
                        <p className={classes.ProblemStatus}>Pending</p>
                    </div>
                    <div className={classes.Problem}>
                        <p className={classes.ProblemStatement}>1). Operators and Conditional Statement</p>
                        <p className={classes.ProblemStatus}>Pending</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;