import React from "react";
import Footer from "./footer";
import BeneficiryContactForm from "./beneficiaries/BeneficiryContactForm";
import Navbar from "./Navbar"
import Description from "./Description";

function ContactPage() {
    return (
        <>
            <Navbar/>
            <Description title="Contact us!" text="If you are interested in work with us, don't hesitate to give us your information!" imagen="https://coedupia.com/wp-content/uploads/2020/10/pacto-educativo-global.jpg" descriptImg="contactate con nosotros"/>
            <BeneficiryContactForm/>
            <Footer/>
        </>
    )
}

export default ContactPage;
