import React, { useState } from "react";
import "./Main_Form_MessageBox.css";

function MainForm() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [registeredAs, setRegisteredAs] = useState(""); 



  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="First Name" style={{ marginRight: "355px" }}>
            First Name{" "}
          </label>
          <div className="labels-input">
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setfirstName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="Last Name" style={{ marginRight: "355px" }}>
            Last Name{" "}
          </label>
          <div className="labels-input">
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="email" style={{ marginRight: "400px" }}>
            Email{" "}
          </label>
          <div className="labels-input">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="phoneNum" style={{ marginRight: "330px" }}>
            Phone Number{" "}
          </label>
          <div className="labels-input">
            <input
              type="number"
              id="phoneNum"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              required
            />
          </div>
        </div>

        
        <div className="form-field">
          <label htmlFor="registeredAs" style={{ marginRight: '335px'}}>Registered as </label>
          <div className="labels-input">
          <select
            id="registeredAs"
            value={registeredAs}
            onChange={(e) => setRegisteredAs(e.target.value)}
            required
            style={{width:'30%'}}
          >
            <option value="" > Select an option</option>
            <option value="Donor">Donor</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Beneficiary">Beneficiary</option>
          </select>
          </div>
        </div>


        <div style={{ marginLeft: "45%" }}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default MainForm;
