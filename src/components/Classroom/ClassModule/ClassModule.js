import React, { Component } from 'react'
import classes from './ClassModule.module.css'
import axios from 'axios';
import { Link } from "react-router-dom"


export default class classModule extends Component {
    state={
        moduleData:[]
    }

    componentDidMount(){
   axios.get("https://5f8724ee49ccbb00161770a7.mockapi.io/modules")
   .then(response=>{
       this.setState({moduleData:[...response.data]})
       console.log(this.state.moduleData)
   })
    }
    render() {

        let moduleArr = this.state.moduleData.map(item=>{
          return (  <Link to={`/${this.props.match.params.id}/weekly-curriculum/${item.id}`} key={item.id} className={classes.ModuleCard}>
            <img className={classes.ModImg} src={item.thumbnail} alt="Module Image"/>
            <p className={classes.ModTopic}>{item.title}</p>
            <div className={classes.AvatarSection}>
                <img className={classes.Avatar} src={item.avatar} alt="avatar"/>
                <p className={classes.Lecturer}>{item.name}</p>       
            </div>
            <p className={classes.Week}>{item.duration}</p>
        </Link>)
        }) 
        return (
            <div className={classes.MainBody}>
                <div className={classes.ImgDetailsRelative}>
                <img className={classes.ModuleImg} src="https://assessments.edyoda.com/static/images/Only-Image.jpg" alt="module Image"/>
                <div className={classes.ImgDataAbs}>
                    <h2 className={classes.ModuleName}>RB-020420 - React Developer <br/> Program</h2>
                    < p className={classes.BatchName}>RB020420</p>
                    <div className={classes.IconContainer}>
                      <div className={classes.IconDiv}>
                          <img className={classes.Icon} src="https://assessments.edyoda.com/static/images/Playlist%20Icon.png"/>
                           <p className={classes.IconDes}>5 <br/> modules</p>                     
                      </div>
                      <div className={classes.IconDiv}>
                          <img className={classes.Icon} src="https://assessments.edyoda.com/static/images/Clock%20Icon.png"/>
                           <p className={classes.IconDes}>20 <br/> weeks</p>                     
                      </div>
                    </div>
                </div>
                </div>

             {/* body */}
             <div className={classes.ProgressContainer}>
             <div className={classes.ProgressScore}>
             <p className={classes.Title}>Program Progress</p>
             <div className={classes.ScoreContainer}>
                <div className={classes.ScoreData}>
                  <p className={classes.Score}>18</p>
                  <p className={classes.ScoreTitle}>Class Rank</p>
                </div>
                <div className={classes.ScoreData}>
                  <p className={classes.Score}>80.0%</p>
                  <p className={classes.ScoreTitle}>Avg Score</p>
                </div>
                <div className={classes.ScoreData}>
                  <p className={classes.Score}>75.0</p>
                  <p className={classes.ScoreTitle}>SHS</p>
                </div>
              </div>
              </div>

{/* modules division */}

<div className={classes.ModuleSection}>
<p className={classes.TitleMod}>Modules</p>
</div>


<div className={classes.ModuleDiv}>
   
{moduleArr}

</div>
          </div>
          {/* progressContainer */}
            </div>
        )
    }
}
