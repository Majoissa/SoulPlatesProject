import React from 'react';
import "./Job-posting.css";

function JobPosts() {
   
    return (

    <div className='main-job-box'>
       
        <div className='job-box-1'>

           <div className='job-post' style={{marginBottom:'30px'}}>

               <h1 style={{fontSize:'2rem', textAlign:'center', paddingTop:'20px'}}>Program Manager/Coordinator</h1>
               <h1 style={{fontSize:'1.5rem', textAlign:'left', paddingTop:'10px', paddingLeft:'20px'}}>Job Desciption:</h1>
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold' }}>
               Responsible for planning, implementing, and managing specific programs or projects run by the Soul Plates. This role involves setting objectives, defining strategies, coordinating with staff and partners, monitoring progress, and ensuring that the program's goals align with the organization's mission. 
               </p>

          </div>
          <div className='job-post'  style={{marginBottom:'30px'}}>

              <h1 style={{fontSize:'2rem', textAlign:'center', paddingTop:'20px'}}>Fundraiser/Development Officer</h1>
              <h1 style={{fontSize:'1.5rem', textAlign:'left', paddingTop:'10px', paddingLeft:'20px'}}>Job Desciption:</h1>
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold' }}>
               Focuses on fundraising activities, donor relations, and grant writing to secure funding for the organization. This role involves to focused on securing the financial resources necessary to support the soul Plates's mission, activities and expanding the NGO's efforts to make a positive impact on the community or cause they serve.
               </p>

          </div>
          <div className='job-post' style={{marginBottom:'30px'}}>

              <h1 style={{fontSize:'2rem', textAlign:'center', paddingTop:'20px'}}>Healthcare Worker</h1>
              <h1 style={{fontSize:'1.5rem', textAlign:'left', paddingTop:'10px', paddingLeft:'20px'}}>Job Desciption:</h1>
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold' }}>
               Provide essential healthcare services, including medical examinations, treatment, and preventive care, to individuals and communities. Respond to health emergencies and crises, ensuring rapid and effective healthcare interventions. Collaborate with a multidisciplinary team to plan and execute healthcare initiatives.
               </p>


          </div>
       
        </div>
  
        <div className='job-box-2'>
          <div className='job-post'  style={{marginBottom:'30px'}}>

             <h1 style={{fontSize:'2rem', textAlign:'center', paddingTop:'20px'}}>Education Coordinator</h1>
             <h1 style={{fontSize:'1.5rem', textAlign:'left', paddingTop:'10px', paddingLeft:'20px'}}>Job Desciption:</h1>
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold' }}>
               Develop and implement educational programs and projects to improve access to quality education. Coordinate and manage educational resources, including materials, facilities, and teaching staff. Identify and assess the educational needs of the target communities and tailor programs accordingly.
               </p>


          </div>
          <div className='job-post'  style={{marginBottom:'30px'}}>

             <h1 style={{fontSize:'2rem', textAlign:'center', paddingTop:'20px'}}>IT and Technology Specialist</h1>
             <h1 style={{fontSize:'1.5rem', textAlign:'left', paddingTop:'10px', paddingLeft:'20px'}}>Job Desciption:</h1>
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold' }}>
               Manage and maintain the organization's IT infrastructure, including hardware, software, and networks. Develop and implement technology strategies to support the NGO's programs and operations. Research and recommend innovative technology solutions to enhance our work and data protection.
               </p>


          </div>
          <div className='job-post'  style={{marginBottom:'30px'}}>

             <h1 style={{fontSize:'2rem', textAlign:'center', paddingTop:'20px'}}>Social Worker</h1>
             <h1 style={{fontSize:'1.5rem', textAlign:'left', paddingTop:'10px', paddingLeft:'20px'}}>Job Desciption:</h1> 
               <p style={{fontSize:'1rem',textAlign:'left', paddingLeft:'20px',fontWeight:'bold' }}>
               Assess the social and emotional needs of individuals and communities. Provide counseling, emotional support, and crisis intervention. Develop and implement social service programs and initiatives. Assist in connecting individuals to resources, including healthcare, education, and employment opportunities. 
               </p>


          </div>
       
        </div>
     
      </div>
       
    );
  }
  
  export default JobPosts;
  