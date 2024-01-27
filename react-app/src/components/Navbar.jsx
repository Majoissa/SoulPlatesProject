import React, {useRef} from 'react'
import NavBrand from "./Navbrand";
import NavLinks from "./Navlinks";
import logoimg from "./Logoo.png";
import "./Navbar.css";
import Hero from './Hero'
import "bootstrap/dist/css/bootstrap.min.css";



function Navbar() {

    const refDownload = useRef(null)

    const handleClickHeaderScrollToDownload = () => {
        refDownload.current?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <nav className="nav navbar navbar-expand-lg bg-dark">
            <div className="container-fluid" >
                <NavBrand imglogo={logoimg}/>
                <button  style={{color:"#eae8c8"}}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLinks
                        link1="home"
                        link2="about us"
                        link3="beneficiaries"
                        link4="volunteers"
                        link5="donors"
                        link6="contact"
                    />
                </div>
                <div className="translate">
                    <Hero handleClickHeader={handleClickHeaderScrollToDownload}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
