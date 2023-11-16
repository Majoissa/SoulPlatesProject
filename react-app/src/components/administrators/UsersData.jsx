import "./UsersData.css";
import { useEffect, useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import "./Edit.css";

function UsersData(){

    //to manage the users update
    function EditBeneficiaryForm({ beneficiary, onUpdate }) {
        const [formData, setFormData] = useState({ ...beneficiary });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          onUpdate(formData);
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            
            <button className="editButton" type="submit">Save</button>
          </form>
        );
      }
      
      //to show beneficiaries information
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [editingBeneficiary, setEditingBeneficiary] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:5550/beneficiaries').then(response => response.json()).then(data => setBeneficiaries(data)).catch(error => console.error('Error fetching beneficiaries', error));
    }, []);

    const handleEdit = (beneficiary) => {
        setEditingBeneficiary(beneficiary);
      };
    
      const handleUpdate = (updatedBeneficiary) => {
        const payload = {
          newFirstName: updatedBeneficiary.first_name,
          newLastName: updatedBeneficiary.last_name,
          newAge: updatedBeneficiary.age,
          newGender: updatedBeneficiary.gender,
          newEmail: updatedBeneficiary.email,
          newPhone_number: updatedBeneficiary.phone_number,
          newAddress: updatedBeneficiary.address,
          newMessage: updatedBeneficiary.message,
        }
        fetch(`http://localhost:5550/beneficiaries/${updatedBeneficiary.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then((updatedData) => {
          setBeneficiaries(beneficiaries.map(b => b.id === updatedBeneficiary.id ? updatedData : b));
          setEditingBeneficiary(null);
      })
        .catch(error => console.error('Error updating beneficiary', error));
      };
      
      //Function to delete user
      const handleDelete = (id) => {
        if (window.confirm("Sure that you want to delete the user?")) {
          fetch(`http://localhost:5550/beneficiaries/${id}`, {
            method: 'DELETE',
          })
          .then(response => {
            if (response.ok) {
              setBeneficiaries(beneficiaries.filter(b => b.id !== id));
            } else {
              throw new Error('Error al eliminar el beneficiario');
            }
          })
          .catch(error => console.error('Error:', error));
        }
      };
      
    
    return(
        <div className="users">
            <h2 className="tableTitle">Beneficiaries</h2>
            <table className="table beneficiariesTable">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Message</th>
                    <th scope="col">Edit user</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficiaries.map(b =>(
                        <tr key ={b.id}>
                            <td>{b.id}</td>
                            <td>{b.first_name}</td>
                            <td>{b.last_name}</td>
                            <td>{b.age}</td>
                            <td>{b.gender}</td>
                            <td>{b.email}</td>
                            <td>{b.phone_number}</td>
                            <td>{b.address}</td>
                            <td>{b.message}</td>
                            <td className="btnDisplay"><EditButton onClick={() => handleEdit(b)} /><DeleteButton onClick={handleDelete} id={b.id} />
</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingBeneficiary && (
        <EditBeneficiaryForm
          beneficiary={editingBeneficiary}
          onUpdate={handleUpdate}
        />
      )}
        </div>
    )
}

export default UsersData;