
import "../Main_Form_MessageBox.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";



function LoginAdmin(){
  
  const {login} = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const loginData = {
        username: userName, 
        password: password
    };

    try {
        const response = await fetch('node-server-iota-six.vercel.app/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
            credentials: 'include'
        });
       
        const data = await response.json();
       

        if (response.status === 200 && data.message === "Login successful") {
          alert("Login exitoso!");
          login();
          navigate("/admin/page");
        
       

      }else {
            alert(data.message || "Error durante el inicio de sesión.");
        }
    } catch (error) {
        alert("Hubo un error al conectar con el servidor.");
    }
    
};


    return(
        <div>
            <div className="main-form">
      <Fade cascade damping={0.1}>
      <h2 className="formTittle">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username" style={{ marginRight: "355px" }}>
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
        </div>
    )
}

export default LoginAdmin;