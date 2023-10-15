import React, { useState } from 'react';
import "./Job-apply-form.css";

function JobApplyForm () {
  
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectJob, setselectJob] = useState(""); 


    const handleSubmit = (e) => {
        
        e.preventDefault();
    };
    
    return  (

      <div className="job-apply-form-box" style={{width:'100%', height:'350px'}}>


        <form className='jobs-form' onSubmit={handleSubmit}>

           <lable htmlFor = "Fullname" style={{marginRight:'15px'}}>Fullname</lable>
           <input
             type="text"
             id="fullname"
             name="fullname"
             value={fullName}
             onChange={(e) => setfullName(e.target.value)}
             style={{marginBottom:'20px', fontFamily:'Montserrat sans-serif', marginRight:'15px'}}
             />
             <br />

             <lable htmlFor = "email" style={{marginRight:'40px'}}>Email</lable>
           <input
             type="text"
             id="email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             style={{marginBottom:'20px', fontFamily:'Montserrat sans-serif'}}
             />
             <br />


             <label htmlFor="selectJob" style={{marginRight:'15px'}}>Select Desired Position</label>
  
             <select style={{marginBottom:'20px',marginRight:'135px'}}
            id="selectJob"
            value={selectJob}
            onChange={(e) => setselectJob(e.target.value)}
            required
        
          >
            <option value="">Select an option</option>
            <option value="Program Manager/Coordinator">Program Manager/Coordinator</option>
            <option value="Education Coordinator">Education Coordinator</option>
            <option value="Fundraiser/Development Officer">Fundraiser/Development Officer</option>
            <option value="IT and Technology Specialist">IT and Technology Specialist</option>
            <option value="Healthcare Worker">Healthcare Worker</option>
            <option value="Social Worker">Social Worker</option> 
            </select>

            <br />

             <input type = "submit" value= "Submit" style={{backgroundColor:'#F7F5D2;', marginLeft:'80px', fontWeight:'bold'}} />

           </form>

        </div>


    )

}

export default JobApplyForm;
