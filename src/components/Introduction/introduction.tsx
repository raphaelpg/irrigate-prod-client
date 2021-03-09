import React from 'react'
import Fade from 'react-reveal/Fade'

const Introduction: React.FC = () => (
	<div className="introduction">
		<div className="introduction-container">
			<div className="introduction-left">
				<Fade bottom duration={1000} distance="20px">
        	<h2 className="introduction-left-title">Associations: register and receive donations from all over the world</h2>
        	<button className="display-form-add-cause-button" >Register your association</button>
				</Fade>
      </div>
      <div className="introduction-right">
				<Fade bottom duration={2000} distance="20px">
        	<h2 className="introduction-right-title">Donors: give directly or subscribe to a monthly donations</h2>
        	<div className="introduction-right-button-container">
	        	<button className="introduction-button" >One time donation</button>
	        	<button className="introduction-button" >Monthly subscription</button>
        	</div>
				</Fade>
    	</div>
    </div>
  </div>
)

export default Introduction