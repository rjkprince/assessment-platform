import React, { Component } from "react";
import classes from "./Curriculum.module.css";
import GradePage from "./GradePage/GradePage";
import UnitPage from "./UnitPage/UnitPage";
export default class CurriculumPage extends Component {
  state = {
    ActiveLink: 1
   
  };
  componentDidMount() {
    window.scrollTo(0, 0);
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
           {
             this.state.ActiveLink === 1 ? <UnitPage/> : <GradePage/>
           }
           
         </div>
      </div>
    );
  }
}
