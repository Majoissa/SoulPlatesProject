import React from 'react';
import "./Job-posting.css";

function JobPosts() {


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

    <div className='main-job-box'>
       
        <div className='job-box-1 reveal' >

           <div className='job-post' style={{marginBottom:'30px'}}>

               <h1 style={{fontSize:'2rem'}}>Program Manager/Coordinator</h1>
              
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold', paddingTop:'20px' }}>
               Responsible for planning, implementing, and managing specific programs or projects run by the Soul Plates. This role involves setting objectives, defining strategies, coordinating with staff and partners, monitoring progress, and ensuring that the program's goals align with the organization's mission. 
               </p>

          
          </div>
          </div>

          <div className='job-box-2 reveal' >

          <div className='job-post '  style={{marginBottom:'30px'}}>

              <h1 style={{fontSize:'2rem'}}>Fundraiser/Development Officer</h1>
              
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold', paddingTop:'20px', }}>
               Focuses on fundraising activities, donor relations, and grant writing to secure funding for the organization. This role involves to focused on securing the financial resources necessary to support the soul Plates's mission, activities and expanding the NGO's efforts to make a positive impact on the community or cause they serve.
               </p>

          </div>
       
        </div>
  
        <div className='job-box-3 reveal'>
          <div className='job-post' >

             <h1 style={{fontSize:'2rem'}}>IT and Technology Specialist</h1>
            
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold', paddingTop:'20px' }}>
               Manage and maintain the organization's IT infrastructure, including hardware, software, and networks. Develop and implement technology strategies to support the NGO's programs and operations. Research and recommend innovative technology solutions to enhance our work and data protection.
               </p>


          </div>
          </div>
          <div className='job-box-4 reveal'>
          <div className='job-post'>

             <h1 style={{fontSize:'2rem'}}>Social Worker</h1>
             
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold', paddingTop:'20px' }}>
               Assess the social and emotional needs of individuals and communities. Provide counseling, emotional support, and crisis intervention. Develop and implement social service programs and initiatives. Assist in connecting individuals to resources, including healthcare, education, and employment opportunities. 
               </p>


          </div>
       
        </div>
     
      </div>
       
    );
  }
  
  
  export default JobPosts;
  
