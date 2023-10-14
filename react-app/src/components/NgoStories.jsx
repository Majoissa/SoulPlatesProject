import React from "react";
import "./NgoStories.css";

function NgoStories(props) {
  return (
    // <div className="">
    <div>
      <h1>NGO Stories</h1>
      <div className="row">
        <div className="card" style={{padding:'10px'}}>
          <img
            src={props.imageStory}
            className="card-img-top"
            alt="Description of the story"
          />
          <div className="card-body">
            <h5 className="card-title">{props.titleStory}</h5>
            <p className="card-text">{props.descriptionStory}</p>
            <a href="www.google.com" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default NgoStories;