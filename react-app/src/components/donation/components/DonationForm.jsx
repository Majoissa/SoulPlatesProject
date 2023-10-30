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
    //const [message, setMessage] = useState("");

    const handleOnClick = () => {
        console.log(donationAmount, userFullName, userEmail,);
        //alert(JSON.stringify({userFullName,userEmail, donationAmount}))
    }

    return (
        <div className='general'>
            <form className='donation-form' aria-required="true">
                <div className='donation-form-body'>
                    <DonationSelection donationAmount={donationAmount} setDonationAmount={setDonationAmount}/>
                    <div className='donor-details'>
                        <h5>Donor Details</h5>
                        <div className="donor-input">
                            <InputFiled type="text" id="name" placeholder='Full name' value={userFullName}
                                        handleChange={e => setUserFullName(e.target.value)}/>
                            <InputFiled type="email" id="email" placeholder='Email Address' value={userEmail}
                                        handleChange={e => setUserEmail(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <Message/>
                <Button text='DONATE NOW' onClick={handleOnClick}/>
            </form>
        </div>
    )
}

export default DonationForm;