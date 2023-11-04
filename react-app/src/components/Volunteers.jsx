import React from 'react'
import Navbar from "./Navbar";
import Footer from "./footer";
import ContactForm from "./donation/volunteers/ContactForm";
import VolunteersGrid from './donation/volunteers/VolunteersGrid';
import Description from './Description';
import { Fade } from 'react-awesome-reveal';

function Volunteers() {
    return (
        <>
            <Navbar/>
            <Fade cascade damping={0.1}>
            <Description title="Welcome volunteer!" imagen="https://st2.depositphotos.com/1518767/6900/i/450/depositphotos_69004997-stock-photo-happy-volunteers-in-the-park.jpg" text ="Welcome to our Volunteering Section! Here, you will find detailed descriptions of various volunteering opportunities available to you. Browse through the listings to discover how you can contribute to our causes. For each opportunity, contact details are provided to make it easy for you to get involved and make a difference!" descripImg ="Welcome volunteer"/>
            <VolunteersGrid/>
            <ContactForm />
            </Fade>
            <Footer/>
        </>
    )
}

export default Volunteers;
