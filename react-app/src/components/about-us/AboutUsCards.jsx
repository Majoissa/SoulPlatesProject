import React from 'react';
import './AboutUsCards.css';
import 'font-awesome/css/font-awesome.min.css';


function AboutUsCard(props) {
  console.log("Props in AboutUsCard:", props);
  return (
    <div className="col-md-4 aboutus">
      <div className="card profile-card-1 aboutus-card">
        <img src={props.image_src} className="background-img-about" alt={props.title} />
        <img src={props.profileimagesrc} className="profile-img-about"/>
        <div className="card-body aboutus-body">
          <h5 className="card-title aboutus-title" style={{ textAlign: 'center' }}>{props.fullname}</h5>
          <div className="icon-block-personell">
            <a href={props.linkedinlink} target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href={props.twitterlink} target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
            <a href={props.facebooklink} target="_blank" rel="noreferrer" ><i className="fa fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;
