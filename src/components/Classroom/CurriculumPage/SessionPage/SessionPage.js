import React, { Component } from 'react'
import classes from './SessionPage.module.css'

export default class SessionPage extends Component {
    state={
        
    }
    render() {
let topicArr=this.props.location.state.dayPlan.dayPlan.topics.map(item=>{
return (<p className={classes.Topics}>&nbsp;- {item}</p>)
})

        return (
            <div className={classes.SessionSection}>
<h1 className={classes.PageTitle}>Session Plan</h1>

<div className={classes.TopicsDiv}>
 <p><strong classNAme={classes.Strong}>Topics:</strong></p>
 {topicArr}


<div className={classes.TopicsDiv}>
    <p className={classes.ClickHere}><strong classNAme={classes.Strong}>Session Link:</strong></p>
        <p>{this.props.location.state.dayPlan.dayPlan.sessionLink}</p>
</div>


<div className={classes.TopicsDiv}>
    <p className={classes.ClickHere}><strong classNAme={classes.Strong}>Meeting Password:</strong></p>
    <p>{this.props.location.state.dayPlan.dayPlan.meetingPassword}</p>
</div>
</div>
</div>
        )
    }
}
