import Navbar from "../Navbar";
import Footer from "../footer";
import AdminDescription from "./AdminDescription";
import LoginAdmin from "./LoginAdmin";
function Administrators(){

    

    return (
        <div>
            <Navbar />
            <AdminDescription />
            <LoginAdmin /> 
            <Footer />
        </div>
    )
}
export default Administrators;