import {useState} from "react";
import Title from "../donation/General-Components/Title";
import InputFiled from "../donation/General-Components/InputFiled";
import Button from "../donation/General-Components/Button";
import "../donation/volunteers/ContactForm.css"
import Message from "../donation/General-Components/Message";

function ContactBeneficiaries() {
    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [address, setAddress] = useState ("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");


    const handleOnClick = (event) => {
        event.preventDefault();
        
        // form data
        const formData = {
          full_name: userFullName,
          email: userEmail,
          address: address,
          phone: userPhoneNumber,
          message: userMessage
        };
    
        // we call the server endpoint
        fetch("http://localhost:5550/contact/beneficiaries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if(data.success) {
            alert("Data inserted successfully!");
            
            setAddress("");
            setUserEmail("");
            setUserFullName("");
            setUserMessage("");
            setUserPhoneNumber("");

          } else {
            alert(data.error || "An error occurred.");
          }
        })
        .catch(err => {
          console.error(err);
          alert("An error occurred while submitting the form.");
        });
    }
    

    const handleOnChange = (event, name) => {
        if (name === "email") {
            setUserEmail(event.target.value);
        } else if (name === "name") {
            setUserFullName(event.target.value);
        } else if (name === "message") {
            setUserMessage(event.target.value);
        } else if (name === "tel") {
            setUserPhoneNumber(event.target.value);
        } else if (name === "address") { 
            setAddress(event.target.value);  
        }
    };

    return (
        <>
            <Title title="Please contact us!"/>

            <div className="contact-form-main">
                <form className="contact-form-control">
                    <div className="contact-input">
                        <h5>Full Name</h5>
                        <InputFiled type="text" placeholder='Full name' value={userFullName}
                                    onChange={(e) => handleOnChange(e, "name")}/>
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
                    <div className="contact-input">
                        <h5>Address</h5>
                        <InputFiled type="text" placeholder='Address' value={address}
                                    onChange={(e) => handleOnChange(e, "address")}/>
                    </div>

                    <Message type="message" value={userMessage}
                             onChange={(e) => handleOnChange(e, "message")} />

                    <Button type="submit" text='Submit' onClick={handleOnClick} className='form-control-submit-now'/>
                </form>
            </div>
        </>
    )
}

export default ContactBeneficiaries;