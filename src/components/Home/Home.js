import React, { Component } from 'react'
import classes from './Home.module.css'
import Card from './Card/Card'


export default class Home extends Component {
     data = [
    {"id":1,"img":'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',"title":'Python',"unit":'101 Units '},
    {"id":2,"img":'https://assessments.edyoda.com/uploads/static/images/DBMS/database.png',"title":'Databases',"unit":'0 Units '},
    {"id":3,"img":'https://assessments.edyoda.com/uploads/static/images/DJANGO/DJ_Logo.png',"title":'Django',"unit":'0 Units '},
    {"id":4,"img":'https://assessments.edyoda.com/uploads/static/images/JAVASCRIPT/JS_Logo.png',"title":'JavaScript',"unit":'20 Units '},
    {"id":5,"img":'https://assessments.edyoda.com/uploads/static/images/DS/dsa.png',"title":'Data Structure',"unit":'37 Units '},
    {"id":6,"img":'https://assessments.edyoda.com/uploads/static/images/REACT/React_qmXOJwj.webp',"title":'React',"unit":'0 Units '},
    {"id":7,"img":'https://assessments.edyoda.com/uploads/static/images/ALGO/algorithm_2.png',"title":'Algoritms',"unit":'36 Units '},
    ];


    render() {   
        return (
            <div className={classes.MainBody}>
                <div className={classes.CoursePage}>
                    <p className={classes.Offering}>Practice Arena</p>
                    <p className={classes.SkillStatus}>All Skills</p>
                    <p></p>
                    <div className={classes.SkillCards}>
                        {this.data.map(sagar => {return(<Card key={sagar.id} {...sagar} />)})}
                    </div> 
                </div>
            </div>
        )
    }
}