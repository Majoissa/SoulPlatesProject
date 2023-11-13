import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const [carouselItems, setCarouselItems] = useState([]);
  function chunkArray(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i += size) {
      chunked_arr.push(array.slice(i, i + size));
    }
    return chunked_arr;
  }
  

  useEffect(() => {
    fetch('http://localhost:5550/testimonials', {
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => setCarouselItems(data))
    .catch(error => console.error("Error fetching data: ", error));
  }, []);

  // Divide carouselItems en subarrays de tres elementos
  const itemsPerSlide = 3;
  const testimonialChunks = chunkArray(carouselItems, itemsPerSlide);

  return (
    <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {testimonialChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className={`carousel-item ${chunkIndex === 0 ? "active" : ""}`}>
            <div className="d-flex justify-content-center">
              {chunk.map(item => (
                <div key={item.id} className="text-center" style={{ maxWidth: "600px" }}>
                  <img 
                    src={item.imgsrc}
                    alt={item.name}
                    className="rounded-circle mb-4"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h5>{item.name}</h5>
                  <p className="text-secondary">{item.role}</p>
                  <p className="text-muted" style={{width:'250px', margin:'20px'}}>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    {item.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Testimonials;
