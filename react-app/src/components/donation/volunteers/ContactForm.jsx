import {useState} from "react";
import Title from "../General-Components/Title";
import InputFiled from "../General-Components/InputFiled";
import Button from "../General-Components/Button";
import "./ContactForm.css"
import Message from "../General-Components/Message";

function ContactForm() {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUseLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");


    const handleOnClick = (event) => {
        event.preventDefault();
        console.log(userFirstName, userLastName, userEmail, userMessage, userPhoneNumber);
        //alert(JSON.stringify({userFullName, userEmail, donationAmount}));
    }

    const handleOnChange = (event, name,) => {
        if (name === "email") {
            setUserEmail(event.target.value)
        }
        if (name === "name") {
            setUserFirstName(event.target.value)
        }
        if (name === "lastName") {
            setUseLastName(event.target.value)
        }
        if (name === "message") {
            setUserMessage(event.target.value)
        }
        if (name === "tel") {
            setUserPhoneNumber(event.target.value)
        }
    }

    return (
        <>
            <Title title="Please contact us!"/>

            <div className="contact-form-main">
                <form className="contact-form-control">
                    <div className="contact-input">
                        <h5>First Name</h5>
                        <InputFiled type="text" placeholder='First name' value={userFirstName}
                                    onChange={(e) => handleOnChange(e, "name")}/>
                    </div>

                    <div className="contact-input">
                        <h5>Last Name</h5>
                        <InputFiled type="text" placeholder='Last name' value={userLastName}
                                    onChange={(e) => handleOnChange(e, "lastName")}/>
                    </div>

                    <div className="contact-input">
                        <h5> Email address </h5>
                        <InputFiled type="email" placeholder='Email Address' value={userEmail}
                                    onChange={(e) => handleOnChange(e, "email")}/>
                    </div>

                    <div className="contact-input">
                        <h5>Phone Number </h5>
                        <InputFiled type="tel" placeholder='Phone Number' value={userPhoneNumber}
                                    onChange={(e) => handleOnChange(e, "tel")}/>
                    </div>

                    <Message type="message" value={userMessage}
                             onChange={(e) => handleOnChange(e, "message")} />

                    <Button type="submit" text='Submit' onClick={handleOnClick} className='form-control-submit-now'/>
                </form>
            </div>
        </>
    )
}

export default ContactForm;