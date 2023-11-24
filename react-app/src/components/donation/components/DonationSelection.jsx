function DonationSelection({donationAmount, setDonationAmount}) {
    const donationSuggestions = [15, 25, 45, 100, 500];

    const getDonationButtons = () => {
        return donationSuggestions.map(suggestion => (
            <button
                key={suggestion}
                className='btn-money-selection'
                type='button'
                onClick={() => setDonationAmount(suggestion)}>€ {suggestion}</button>
        ))
    }

    return (
        <>
            <div className='payment-method-align-items-center'>
                <h5 className='donation-amount-title'>Donation Amount</h5>
                <div className='donation-amount'>
                    <input min={0} type='number'
                           placeholder='100€'
                           className='form-control donations'
                           value={donationAmount}
                           onChange={(e) =>
                               setDonationAmount(e.target.value)}
                    />
                </div>
                <ul className='unOrderList'>
                    {getDonationButtons()}
                </ul>
            </div>
        </>
    )
}

export default DonationSelection