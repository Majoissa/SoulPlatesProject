import React from "react";
import "./Mission-Goals.css";
import { Fade } from "react-awesome-reveal";

function Mission() {
  return (
    <div className="MissionBackground">
      <Fade cascade damping={0.1}>
      <h2 className="missionTitle" >Our Mission</h2>
    <div className="Mission-and-Goals" style={{ backgroundColor: " white" }}>
      <div className="Mission">
        <p>
          At Soul Plates, our mission is deeply rooted in the belief that every
          individual, regardless of their background, deserves the opportunity
          to thrive and build a better future. We are dedicated to providing
          shelter, food, and education to all people who are in vulnerable
          situations, offering them a safe heaven where they can rebuild their
          lives. 
        </p>
      </div>

      <div className="mission-image">
        <img
          src="https://www.score.org/sites/default/files/styles/responsive_16_9_1000w/public/GettyImages-621904294_1.jpg"
          alt="description component img"
        />
      </div>
    </div>
    </Fade>
    </div>
  );
}

export default Mission;
