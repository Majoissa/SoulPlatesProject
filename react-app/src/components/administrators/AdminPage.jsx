import Navbar from "../Navbar";
import Footer from "../footer";
import LogOut from "./Logout";
import UsersData from "./UsersData";

function AdminPage(){
    return(
        <div>
            <Navbar/>
            <UsersData/>
            <LogOut />
            <Footer/>
        </div>
    )
}

export default AdminPage;