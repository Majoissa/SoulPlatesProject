import React, { useState, useEffect } from 'react';
import './Testimonials.css';


function Testimonials() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5550/testimonials', {
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => setCarouselItems(data))
    .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="d-flex justify-content-center">
              <div className="text-center" style={{ maxWidth: "600px" }}>
                <img 
                  src={item.imgsrc}
                  alt={item.name}
                  className="rounded-circle mb-4"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h5>{item.name}</h5>
                <p className="text-secondary">{item.role}</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  {item.quote}
                </p>
              </div>
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
