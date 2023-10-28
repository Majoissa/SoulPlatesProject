import {useState} from "react";
import Title from "../General-Components/Title";
import InputFiled from "../General-Components/InputFiled";
import Button from "../General-Components/Button";
import "./ContactForm.css"
import Message from "../General-Components/Message";
//this is just test


function ContactForm() {
    const [userFullName, setFullName] = useState("");
    const [userEmail, setEmail] = useState("");

    const handleOnClick = () => {
        console.log(userFullName, userEmail,);
        //alert(JSON.stringify({userFullName,userEmail, donationAmount}))
    }


    return (
        <>
            <Title title="Please contact us!"/>

            <div className="contact-form-main">
                <form className="contact-form-control">
                    <div className= "contact-input">
                        <h5>Full Name</h5>
                        <InputFiled type="text" id="name" myPlaceholder='Full name' value={userFullName}
                                    handleChange={e => setFullName(e.target.value)} className='form-control'/>
                    </div>

                    <div className= "contact-input">
                        <h5> Email address </h5>
                        <InputFiled type="email" id="email" myPlaceholder='Email Address' value={userEmail}
                                    handleChange={e => setEmail(e.target.value)} className='form-control'/>
                    </div>
                    <Message/>
                    <Button text='Submit' onClick={handleOnClick} className='form-control-submit'/>
                </form>
            </div>
        </>
    )
}

export default ContactForm;