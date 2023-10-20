import React from 'react';
import './Beneficiary-video.css';

function BeneficiaryVideo() {
    return (
        <div className='video-container'>
        <video autoPlay loop muted className="back-video" >
          <source src="https://nextgenerationdev.com/demos/html/donate/donate/assets/images/banner-video/banner-video.mp4" type="video/mp4"  />
        </video>

        <div className='overlay'>

          <div className='inner'>

          <h1>Help the poor in need</h1>
          <p>
          This all means that giving is a much more important element of happiness than receiving. 
          </p>

          </div>
        </div>

      </div>
    );
  }

  export default BeneficiaryVideo;