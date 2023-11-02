
import "../Main_Form_MessageBox.css";
import RegisterForm from "./RegisterForm";
import Navbar from "../Navbar";
import Footer from "../footer";

function RegisterAdmin(){
    
    return(
        <div>
           <Navbar/>
           <RegisterForm/>
           <Footer/>
        </div>
    )
}

export default RegisterAdmin;