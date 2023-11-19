import React from "react";
import "./Mission-Goals.css";
import {Fade} from "react-awesome-reveal";

function Description(props) {
    return (
        <div className="MissionBackground">
            <Fade cascade damping={0.1}>
                <h2 className="missionTitle">{props.title}</h2>

                <div className="Mission-and-Goals" style={{backgroundColor: " white"}}>
                    <div className="Mission">
                        <p>
                            {props.text}
                        </p>
                    </div>

                    <div className="mission-image">
                        <img
                            src={props.imagen}
                            alt={props.descripImg}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Description;
