import React from 'react'

const Introduction: React.FC = () => (
	<div className="introduction">
		<div className="introduction-container">
			<div className="introduction-left" >
        	<h2 className="introduction-left-title">Associations: register and receive donations from all over the world</h2>
        	<button className="display-form-add-cause-button" >Register your association</button>
      </div>
      <div className="introduction-right" >
        	<h2 className="introduction-right-title">Donors: give directly or subscribe to a monthly donations</h2>
        	<div className="introduction-right-button-container">
	        	<button className="introduction-button" >One time donation</button>
	        	<button className="introduction-button" >Monthly subscription</button>
        	</div>
    	</div>
    </div>
  </div>
)

export default Introduction