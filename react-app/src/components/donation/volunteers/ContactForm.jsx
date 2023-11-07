import {useState} from "react";
import Title from "../General-Components/Title";
import InputFiled from "../General-Components/InputFiled";
import Button from "../General-Components/Button";
import "./ContactForm.css"
import Message from "../General-Components/Message";

function ContactForm() {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");

    async function createNewVolunteer(formData) {
        try {
            const response = await fetch("http://localhost:5550/volunteers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            console.log(response)
            return response.json()
        } catch (error) {
            alert('Could not create a new volunteer')
            console.error(error);
        }

    }

    const handleOnClick = (event) => {
        //update validation form with z.form!
        if (!userFirstName || !userLastName || !userEmail || !userPhoneNumber) {
            alert("Please fill in all of the required fields.");
            return;
        }
        if (userFirstName.length === 0 || userFirstName.length > 20) {
            //back to the code again about equality
            alert("Full name should be between 1 and 20 character")
            return;
        }
        if (userLastName.length === 0 || userLastName.length > 20) {
            //back to the code again about equality
            alert("Last Name should be between 1 and 20 character")
            return;
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail) === false) {
            alert("Email is not valid");
            return;
        }
        /* if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(userPhoneNumber)) {
             alert("Phone number is not valid");
             console.log(userPhoneNumber)
             return;
         }*/

        event.preventDefault();
        // form data
        const formData = {
            first_name: userFirstName,
            last_name: userLastName,
            email: userEmail,
            phone: userPhoneNumber,
            message: userMessage
        };
        console.log(formData)
        createNewVolunteer(formData)
    }


    const handleOnChange = (event, name,) => {
        if (name === "email") {
            setUserEmail(event.target.value)
        }
        if (name === "firstName") {
            setUserFirstName(event.target.value)
        }
        if (name === "lastName") {
            setUserLastName(event.target.value)
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
                                    onChange={(e) => handleOnChange(e, "firstName")}/>
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
                             onChange={(e) => handleOnChange(e, "message")}/>

                    <Button type="submit" text='Submit' onClick={handleOnClick} className='form-control-submit-now'/>
                </form>
            </div>
        </>
    )
}

export default ContactForm;