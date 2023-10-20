import PaymentOption from "./PaymentOption";
import {useState} from "react";
import Button from "../General-Components/Button";
import Message from "../General-Components/Message";
import DonationCampaign from "./DonationCampain";
import InputFiled from "../General-Components/InputFiled";
import DonationSelection from "./DonationSelection";

function DonationForm() {
    const [donationAmount, setDonationAmount] = useState(0);
    const [userFullName, setFullName] = useState("");
    const [userEmail, setEmail] = useState("");

    const handleOnClick = () => {
       console.log(donationAmount,userFullName, userEmail, );
        //alert(JSON.stringify({userFullName,userEmail, donationAmount}))
    }

    return (
        <div className='general'>
            <form className='donation-form'>
                <div className='donation-form-body'>
                    <DonationSelection donationAmount={donationAmount} setDonationAmount={setDonationAmount}/>
                    <div className='donor-details'>
                        <h5>Donor Details</h5>
                        <div className="donor-input">
                            <InputFiled myPlaceholder ='Full name' value={userFullName}  handleChange={e => setFullName(e.target.value)}/>
                            <InputFiled myPlaceholder='Email Address' value={userEmail}  handleChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='campaign'>
                    <PaymentOption/>
                    <DonationCampaign/>
                </div>
                <Message/>
                <Button text='DONATE NOW' onClick={handleOnClick}/>
            </form>
        </div>
    )
}

export default DonationForm;