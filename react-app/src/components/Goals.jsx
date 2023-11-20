import React from "react";
import "./Mission-Goals.css";
import {Fade} from "react-awesome-reveal";

function Goals() {
    return (
        <div className="main-goal-box" style={{backgroundColor: " white"}}>
            <Fade cascade damping={0.1}>
                <div className="Goals-div">
                    <h2 className="goalsTitle">Our goals</h2>
                    <div className="Goals">
                        <p>
                            We aim to provide comprehensive, holistic support to all vulnerable
                            persons, addressing not only their immediate needs for shelter and
                            sustenance but also facilitating access to education and skills
                            development, creating a foundation for a brighter future. Our
                            primary goal is to empower all beneficiaries including immigrants
                            through education.
                        </p>

                        <img
                            src="https://achev.ca/wp-content/uploads/2023/07/Volunteering-as-a-Newcomer.png"
                            alt="description component img"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Goals;
