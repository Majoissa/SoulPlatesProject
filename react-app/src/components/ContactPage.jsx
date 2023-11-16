import React from "react";
import Footer from "./footer";
import BeneficiryContactForm from "./beneficiaries/BeneficiryContactForm";
import Navbar from "./Navbar"

function ContactPage() {
    return (
        <>
            <Navbar/>
            <BeneficiryContactForm/>
            <Footer/>
        </>
    )
}

export default ContactPage;
