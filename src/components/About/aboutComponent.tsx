import React from 'react';
const images = require.context('../../images', true);

const About: React.FC = () => {
  return(
    <div className="about-container">
      <div className="about-section">
        <h2 className="about-title">The Project</h2>
        <p className="about-paragraphe">
          Irrigate is a platform that aims to gather NGOs and associatons with donors from around the world.
          NGOs and associations can apply to appear in the main page after going through a validation process.
          Donors can register and see all the NGOs and associations available for donations.<br></br>
          Because its purpose is to provide global visibility, the donations are meant to be sent via crypto currencies to reduce international transfer costs and intermediaries issues.
          Irrigate retains 1% of the donations to support the costs of activities.<br></br>
          The project was first published during a hackathon, and is now a prototype for a real case application.
        </p>
      </div> 
      <div className="about-section">
        <h2 className="about-title">Road Map</h2>
        <p className="about-paragraphe">
          <input type="checkbox" id="0" disabled checked></input>
          <label htmlFor="0"> Deploy server and database: NodeJS server and NOSQL MongoDB Atlas database</label><br></br>
          <input type="checkbox" id="1" disabled checked></input>
          <label htmlFor="1"> Deploy client: Gatsby React framework</label><br></br>
          <input type="checkbox" id="2" disabled checked></input>
          <label htmlFor="3"> Add DAI payment module: Solidity Smart Contract deployed on Polygon testnet (Mumbai)</label><br></br>
          <input type="checkbox" id="4" disabled></input>
          <label htmlFor="3"> Add DAI monthly redistribution function (Polygon)</label><br></br>
          <input type="checkbox" id="4" disabled></input>
          <label htmlFor="4"> Add onboarding module for associations</label><br></br>
          <input type="checkbox" id="7" disabled></input>
          <label htmlFor="7"> Start registering associations campaign</label><br></br>
        </p>
      </div> 
      <div className="about-section">
        <h2 className="about-title">The Team</h2>
        <p className="about-paragraphe">
          <div className="about-person-container">
            <img className="about-person-picture" src={images(`./Raphael_Pinto_small.png`)} alt="Raphael Pinto"></img>
            <div className="about-person-name">Raphael Pinto Gregorio</div>
            <div className="about-person-role">Full Stack Developer</div>
          </div>
        </p>
      </div> 
    </div>
  );
};

export default About;