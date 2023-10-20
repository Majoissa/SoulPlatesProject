import React from 'react';
import "./Job-posting-h1.css";

function JobHeading() {


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
 
        <div className='job-post-pic'>
          
          <div className='image-slider reveal'>
           
           <img src='https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img1.png' /> 

           <img src='https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-1.jpg' /> 

           <img src='https://bootstrapmade.com/demo/templates/Nova/assets/img/blog/blog-4.jpg' /> 
           
            </div> 
           

           <div className='hiring reveal'>

          <h3 className='heading-careers' style={{fontSize:'2rem', fontWeight:'bold', textAlign:'center',  display:'inline'}}> Jobs And Careers  </h3>
           
         <p className='scrolling text' style={{fontSize:'1.1rem', fontWeight:'bold', paddingTop:'20px', paddingRight:'20px', fontFamily: 'Montserrat'}}>
          
         <marquee behavior='scroll' direction='up' scrollamount='2'>
         Discover endless opportunities in the world of careers. Join us and unlock your potential.
         </marquee>      
   
         </p>


        

           </div>
           
        </div>

    )

}
export default JobHeading;

