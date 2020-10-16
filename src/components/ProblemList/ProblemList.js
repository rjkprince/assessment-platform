import React, { Component } from 'react'
import classes from './ProblemList.module.css'

export default class ProblemList extends Component {
    render() {
        return (
            <div className={classes.ProblemList}>
                <p className={classes.ProblemTitle}>Python &#x3E; Operators and Conditional Statements &#x3E;</p>
                <h1 className={classes.StaticTitle}>Problems</h1>

                <div className={classes.ProblemsContainer}>
                    <div className={classes.ProblemCard}>
                        <p className={classes.SerialNo}>Problem 1</p>
                        <div className={classes.ProblemStatementDiv}>
                            <p className={classes.ProblemStatement}>Find area and check if it is sqaure or not</p>
                            <p className={classes.Level}>Level : Easy, and Max score : 15</p>
                        </div>
                        <p className={classes.Todo}>Solve Problem</p>
                    </div>
                </div>
            </div>
        )
    }
}
