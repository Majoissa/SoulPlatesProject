import "./UsersData.css";
import { useEffect, useState } from "react";

function UsersData(){
    const [beneficiaries, setBeneficiaries] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5550/beneficiaries').then(response => response.json()).then(data => setBeneficiaries(data)).catch(error => console.error('Error fetching beneficiaries', error));
    }, []);

    return(
        <div className="users">
            <h2 className="tableTitle">Beneficiaries</h2>
            <table className="table beneficiariesTable">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficiaries.map(b =>(
                        <tr key ={b.beneficiary_id}>
                            <td>{b.beneficiary_id}</td>
                            <td>{b.full_name}</td>
                            <td>{b.email}</td>
                            <td>{b.phone}</td>
                            <td>{b.address}</td>
                            <td>{b.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersData;