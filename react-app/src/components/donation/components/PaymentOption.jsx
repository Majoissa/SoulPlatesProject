import "../General-Components/Donation.css"

function PaymentOption() {
    return (
        <div className={'payment-method'}>
            <div className={'payment-methode-body'}>
                <h5>Payment Method</h5>
                <div className={'payment-methode-option'}>
                    <div className="label">
                        <input  className='radio' type="radio" value={"online"}/>
                        <label htmlFor="radio">Online Payment</label>
                    </div>

                    <div className="label">
                        <input className='radio' type="radio" value={"offline"}/>
                        <label htmlFor="radio">Offline Payment</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOption