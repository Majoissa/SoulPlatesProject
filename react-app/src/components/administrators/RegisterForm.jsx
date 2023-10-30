
import "../Main_Form_MessageBox.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

function RegisterForm(){
    
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
        username: userName,
        password: password,
        email: email
    };

    try {
        const response = await fetch('http://localhost:5550/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
            alert("User registered successfully!");
            // Aquí puedes redirigir al usuario a otra página o hacer alguna otra acción
        } else {
            alert(data.error || "Couldn't register user, try again");
        }
    } catch (error) {
        alert("There was an error with the server");
    }
    setUserName("");
    setPassword("");
    setEmail("");
};

    return(
        <div>
            <div className="main-form">
      <Fade cascade damping={0.1}>
      <h2 className="formTittle">Register</h2>
      <form onSubmit={handleSubmit}>
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