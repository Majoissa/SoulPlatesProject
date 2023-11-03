import React from 'react';

function VolunteersCard(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.imageSrc} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VolunteersCard;
