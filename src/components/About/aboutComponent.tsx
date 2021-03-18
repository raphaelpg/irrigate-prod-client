import React from 'react';

const About: React.FC = () => {
  return(
    <div className="about-container">
      <div className="about-section">
        <h2 className="about-title">The Project</h2>
        <p className="about-paragraphe">
          Irrigate is a platform that aims to gather NGOs and associatons with donors from around the world.
          NGOs and associations can apply to appear in the main page after going through a validation process.
          Donors can register and see all the NGOs and associations available for donations.</p>
      </div> 
      <div className="about-section">
        <h2 className="about-title">Road Map</h2>
        <p className="about-paragraphe">To be completed</p>
      </div> 
      <div className="about-section">
        <h2 className="about-title">The Team</h2>
        <p className="about-paragraphe">To be completed</p>
      </div> 
    </div>
  )
}

export default About;