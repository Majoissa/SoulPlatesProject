import React, { useState, useEffect } from 'react';
import AboutUsCard from './AboutUsCards'; // Correct the import
import './AboutUsCards.css';

function AboutUsGrid() {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5550/aboutus', {
      credentials: 'include' 
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => setAboutUs(data))
    .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container mt-4 aboutus-container "  >
      <div className="row row-cols-sm-1 row-cols-md-3 g-2 aboutus-box">
        {aboutUs.map((aboutUsItem, index) => (
          <AboutUsCard
          key={aboutUsItem.id}
          image_src={aboutUsItem.image_src}
          profileimagesrc={aboutUsItem.profileimagesrc}
          fullname={aboutUsItem.fullname}
          linkedinlink={aboutUsItem.linkedinlink}
          twitterlink={aboutUsItem.twitterlink}
          facebooklink={aboutUsItem.facebooklink}
          
          className={index >= 3 ? 'second-row' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUsGrid;
