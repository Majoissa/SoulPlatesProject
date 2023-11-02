import React from 'react';
import "./Logout.css";
import { useNavigate } from 'react-router-dom';

function LogOut () {

    const navigate = useNavigate();
  

    function handleLogout() {
        
        fetch('http://localhost:5550/admin/page', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.status === 200) {
            
              alert('Logged out successfully');
              
              navigate('/admin');
            } else {
              alert('Logout failed');
            }
          })
          .catch((error) => {
            alert('An error occurred while logging out', error);
          });
      }
      

  return (

       <div className='logout-box'>
        <button className='logout-button' type='submit'
        onClick={handleLogout}
        >
          Logout
        </button>
        </div>
  )

}
export default LogOut;