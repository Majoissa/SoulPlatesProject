import Navbar from "../Navbar";
import Footer from "../footer";
import LogOut from "./Logout";
import UsersData from "./UsersData";
import VolunteersData from "./VolunteersData";


function AdminPage(){
    return(
        <div>
            <Navbar/>
            <UsersData/>
            <VolunteersData/>
            <LogOut />
            <Footer/>
        </div>
    )
}

export default AdminPage;