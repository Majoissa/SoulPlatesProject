import React, { useState } from "react";
import "./Main_Form_MessageBox.css";
import { Fade } from "react-awesome-reveal";

function MainForm() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="main-form">
      <Fade cascade damping={0.1}>
      <h2 className="formTittle">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="First Name" style={{ marginRight: "355px" }}>
            First Name{" "}
          </label>
          <div className="labels-input">
            <input className="inputForm"
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
            <input className="inputForm"
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
            <input className="inputForm"
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
            <input className="inputForm"
              type="number"
              id="phoneNum"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="password" style={{ marginRight: "370px" }}>
            {" "}
            Password{" "}
          </label>
          <div className="labels-input">
            <input className="inputForm"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={{ marginLeft: "45%" }}>
          <button className="formBtn" type="submit">Submit</button>
        </div>
      </form>
      </Fade>
    </div>
  );
}

export default MainForm;
