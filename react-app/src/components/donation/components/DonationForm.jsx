//import PaymentOption from "./PaymentOption";
import {useState} from "react";
import Button from "../General-Components/Button";
import Message from "../General-Components/Message";
import InputFiled from "../General-Components/InputFiled";
import DonationSelection from "./DonationSelection";

function DonationForm() {
    const [donationAmount, setDonationAmount] = useState(0);
    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");


    async function createNewDonor(formData) {
        /*console.log(formData)*/
        try {
            const response = await fetch("http://localhost:5550/donors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            /* console.log(response)*/
            return await response.json()
        } catch (error) {
            console.error(error);
            alert('request could not created');
        }
    }


    const handleOnClick = (event) => {
        event.preventDefault();

        const formData = {
            full_name: userFullName,
            email: userEmail,
            message: userMessage,
            donation_amount: donationAmount,
        };
        return createNewDonor(formData)
    }


    /* console.log(donationAmount, userFullName, userEmail, userMessage);*/
    //alert(JSON.stringify({userFullName, userEmail, donationAmount}));


    const handleOnChange = (event, name,) => {
        if (name === "email") {
            setUserEmail(event.target.value)
        }
        if (name === "name") {
            setUserFullName(event.target.value)
        }
        if (name === "message") {
            setUserMessage(event.target.value)
        }

    }

    return (
        <div className='general'>
            <form className='donation-form' aria-required="true">
                <div className='donation-form-body'>
                    <DonationSelection donationAmount={donationAmount} setDonationAmount={setDonationAmount}/>
                    <div className='donor-details'>
                        <h5>Donor Details</h5>
                        <div className="donor-input">
                            <InputFiled type="text" placeholder='Full name' value={userFullName}
                                        onChange={(e) => handleOnChange(e, "name")}/>
                            <InputFiled type="email" placeholder='Email Address' value={userEmail}
                                        onChange={(e) => handleOnChange(e, "email")}/>
                        </div>
                    </div>
                </div>
                <Message value={userMessage}
                         onChange={(e) => handleOnChange(e, "message")}/>

                <Button type="submit" text='DONATE NOW' onClick={handleOnClick}/>
            </form>
        </div>
    )
}

export default DonationForm;