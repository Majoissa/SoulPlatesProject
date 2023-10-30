import Navbar from "../Navbar";
import Footer from "../footer";
import UsersData from "./UsersData";
function AdminPage(){
    return(
        <div>
            <Navbar/>
            <UsersData/>
            <Footer/>
        </div>
    )
}

export default AdminPage;