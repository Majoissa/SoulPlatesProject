import "./UsersData.css";
import { useEffect, useState } from "react";

function VolunteersData(){
      
      //to show beneficiaries information
    const [volunteers, setVolunteers] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5550/volunteers/info').then(response => response.json()).then(data => setVolunteers(data)).catch(error => console.error('Error fetching volunteers', error));
    }, []);
      
    
    return(
        <div className="users">
            <h2 className="tableTitle">Volunteers</h2>
            <table className="table beneficiariesTable">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(b =>(
                        <tr key ={b.volunteers_id}>
                            <td>{b.volunteers_id}</td>
                            <td>{b.first_name}</td>
                            <td>{b.last_name}</td>
                            <td>{b.email}</td>
                            <td>{b.phone_number}</td>
                            <td>{b.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default VolunteersData;