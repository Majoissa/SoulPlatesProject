import React from "react";
import './Beneficiary-text-card-head.css';


function TextCardHeading()  {


    window.addEventListener('scroll', reveal) ;

    function reveal (){

        var reveals = document.querySelectorAll('.reveal');

        for (var i =0; i < reveals.length; i ++) {

          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if(revealtop < windowheight - revealpoint) {

            reveals[i].classList.add('active');
          }

          else {
 
            reveals[i].classList.remove('active');

          }
        }
      
    }


 return (

    <div className="text-cards-head" >

      <h1 className="reveal">
          Discover Your Benefits
      </h1>

    </div>

 )

}

export default TextCardHeading;