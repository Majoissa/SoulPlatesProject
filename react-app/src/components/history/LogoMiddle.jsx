import React from "react";
import "./History.css";
import { Fade } from "react-awesome-reveal";

function Logo(props) {
  return (
    <div className="MissionBackground" 
    style={{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '500px',
      paddingTop: '25px',
      paddingBottom: '0px',
      paddingRight: '110px',
    }}>
      <Fade cascade damping={0.1}>
        <h2 className="missionTitle">{props.title}</h2>
        <div
          className="History-and-Place-sr"
          style={{ backgroundColor: " white" }}
        >
          <div className="History-sr">
            <p>{props.text}</p>
          </div>

          <div className="mission-image">
            <img src={props.imagen} alt={props.descripImg} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Logo;
/*test*/
