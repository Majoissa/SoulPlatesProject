//import PaymentOption from "./PaymentOption";
import {useState} from "react";
import Button from "../General-Components/Button";
import Message from "../General-Components/Message";
import InputFiled from "../General-Components/InputFiled";
import DonationSelection from "./DonationSelection";

//working on strip payment detail
/*import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        // Trigger form validation and wallet collection
        const {error: submitError} = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch('/create-intent', {
            method: 'POST',
        });

        const {client_secret: clientSecret} = {client_secret: "pi_3OAefIC2obKjPWHz1aPhiBAg_secret_qf7Yn7yZAFpvhAPYLJ5ZM0tFq"}
        //await res.json();
        //"pi_3OAefIC2obKjPWHz1aPhiBAg_secret_qf7Yn7yZAFpvhAPYLJ5ZM0tFq" that one is our response


        const {error} = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement/>
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {/!* Show error message to your customers *!/}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

const stripePromise = loadStripe('pk_test_51OAdfZC2obKjPWHzOKLRxOQCQbzenanwJNcvfj8GEUCJS3GEdqZUapfX4WxT3cABrbiTZT6bywb0PX0svoFjj7qY00dfAGpfQY');

const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
        /!*...*!/
    },
};

const App = () => (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm/>
    </Elements>
);

ReactDOM.render(<App/>, document.body);*/


function DonationForm() {
    const [donationAmount, setDonationAmount] = useState(0);
    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleOnClick = (event) => {
        event.preventDefault();
        console.log(donationAmount, userFullName, userEmail, userMessage);
        //alert(JSON.stringify({userFullName, userEmail, donationAmount}));
    }


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

//test
export default DonationForm;