/*import PaymentOption from "./PaymentOption";
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
        try {
            const response = await fetch("https://node-server-iota-six.vercel.app/donors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            console.log(response)
            //return await response.json()

            const reply = await response.json()
            alert(JSON.stringify({reply}))
            alert("success")
            return reply

        } catch (error) {
            console.error(error);
            alert('Request could not created');
        }
    }


    const handleOnClick = (event) => {
        event.preventDefault();
        console.log('You clicked submit.');

        if (!userFullName || !userEmail || !userMessage) {
            alert("Please fill in all of the required fields.");
            return;
        }
        if (userFullName.length === 0 || userFullName.length > 30) {
            alert("Full name should be between 1 and 30 character")
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail) === false) {
            alert("Email is not valid");
        }

        const formData = {
            full_name: userFullName,
            email: userEmail,
            message: userMessage,
        };

        return createNewDonor(formData)
    }


    console.log( userFullName, userEmail, userMessage);
    alert(JSON.stringify({userFullName, userEmail, donationAmount}));

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
            <form className='donation-form' aria-required="true" onClick={(e) => handleOnClick(e)}>
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
                <Button type="submit" text='DONATE NOW'/>
            </form>
        </div>
    )
}

export default DonationForm;*/


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

    const handleOnChange = (event, name) => {
        if (name === "email") {
            setUserEmail(event.target.value);
        }
        if (name === "name") {
            setUserFullName(event.target.value);
        }
        if (name === "message") {
            setUserMessage(event.target.value);
        }
    };

    const handleOnClick = (event) => {
        event.preventDefault();

        let validationErrors = [];

        if (!userFullName || userFullName.length === 0 || userFullName.length > 30) {
            validationErrors.push("Full name should be between 1 and 30 characters.");
        }

        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail)) {
            validationErrors.push("Email is not valid.");
        }

        if (!userMessage) {
            validationErrors.push("Message is required.");
        }

        if (donationAmount <= 0) {
            validationErrors.push("Please select a donation amount.");
        }

        if (validationErrors.length > 0) {
            alert(validationErrors.join("\n"));
            return;
        }

        const formData = {
            full_name: userFullName,
            email: userEmail,
            message: userMessage,
            donation_amount: donationAmount,
        };

        return createNewDonor(formData);
    };

    async function createNewDonor(formData) {
        try {
            const response = await fetch("https://node-server-iota-six.vercel.app/donors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const reply = await response.json();
            alert("Thank you for your donation");
            return reply;
        } catch (error) {
            console.error(error);
            alert("Request could not be created.");
        }
    }

    return (
        <div className="general">
            <form className="donation-form" aria-required="true">
                <div className="donation-form-body">
                    <DonationSelection donationAmount={donationAmount} setDonationAmount={setDonationAmount}/>
                    <div className="donor-details">
                        <h5>Donor Details</h5>
                        <div className="donor-input">
                            <InputFiled
                                type="text"
                                placeholder="Full name"
                                value={userFullName}
                                onChange={(e) => handleOnChange(e, "name")}
                            />
                            <InputFiled
                                type="email"
                                placeholder="Email Address"
                                value={userEmail}
                                onChange={(e) => handleOnChange(e, "email")}
                            />
                        </div>
                    </div>
                </div>
                <Message value={userMessage} onChange={(e) => handleOnChange(e, "message")}/>
                <Button type="submit" text="DONATE NOW" onClick={handleOnClick}/>
            </form>
        </div>
    );
}

export default DonationForm;

