import React, { Component } from 'react'
import classes from './Card.module.css'
import {Link} from 'react-router-dom'
export default class Card extends Component {

	 render() {
        return (
			<div className={classes.CardContainer}>
				<Link to={`/dashboard/${this.props.title.replace(/\s/g,'')+'#'+this.props.id}`}>
			
					<div className={classes.CardWrapper}>
						<div className={classes.CardContent}>
							<div className={classes.CardThumbnail}>
								<img src={this.props.img} alt="edyoda_img"/>
							</div>
						</div>
						<div className={classes.CardContent}>
							<div className={classes.SkillCardName}>
                            {this.props.title}
                        </div>
                        <div className={classes.Amount}>
                        	{this.props.unit}
                    	</div>
                    </div>
					</div>
		
				</Link>
			</div>
    	)
	}
}