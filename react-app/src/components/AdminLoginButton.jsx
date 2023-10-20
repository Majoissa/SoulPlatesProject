import "./AdminLoginButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function AdminLoginButton(){
    return(
        <div>
            <button type="button" className="adminBtn" title="Click here to Log in as Admin!">
            <FontAwesomeIcon className="iconAdmin" icon={faUsers}/>    
            </button>   
        </div>
    )
}

export default AdminLoginButton;