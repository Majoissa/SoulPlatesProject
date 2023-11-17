import React, { useState, useEffect } from 'react';
import VolunteersCard from './VolunteersCard'; 
function VolunteersGrid() {
  const [volunteerings, setVolunteerings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5550/volunteering', {
      credentials: 'include' 
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => setVolunteerings(data))
    .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  

  return (
    <div className="container mt-4" style={{paddingRight: "18vw",paddingLeft: "18vw", paddingTop: "12vw", paddingBottom: "12vw", background:"white"}}>
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        {volunteerings.map((volunteering) => (
          <VolunteersCard
            key={volunteering.id}
            imageSrc={volunteering.image_src}
            title={volunteering.title}
            description={volunteering.description}
          />
        ))}
      </div>
    </div>
  );
}

export default VolunteersGrid;
