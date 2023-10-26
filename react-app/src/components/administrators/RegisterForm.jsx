
import "../Main_Form_MessageBox.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

function RegisterForm(){
    
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
    return(
        <div>
            <div className="main-form">
      <Fade cascade damping={0.1}>
      <h2 className="formTittle">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="User Name" style={{ marginRight: "355px" }}>
            Username{" "}
          </label>
          <div className="labels-input">
            <input className="inputForm"
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="password" style={{ marginRight: "370px" }}>
            {" "}
            Create password{" "}
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
        </div>
    )
}

export default RegisterForm;