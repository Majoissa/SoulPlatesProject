import React , {useState} from'react';
import "./Job-apply-button.css";
import JobApplyForm from "./Job-apply-form";

function JobApplyButton() {

  const [showForm, setShowForm] = useState(false)

     return (

        <div className="job-apply-button">
          {
            showForm? (
            <JobApplyForm />
            
            ):(

             <button onClick={() => setShowForm (true)} style={{height:'50px'}}>Apply For Job</button>
      
            )}
      
        </div>
   );
}

export default JobApplyButton;