import "./DonationHeroSectionImg.css";

function DonationHeroSectionImg() {
    return (
        <>
            <div className='hero-container'>
                <div className='overlay-donation-hero-text'>
                    <h1 className='inner ok'>DONATION</h1>
                    <p className='overlay-text-p'>We are a group that belives in giving back and the followers</p>
                    <p className='overlay-text-p'> and We are a group that belives in giving back</p>
                </div>

                <img className="hero-image"
                     src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
                     alt="descriptive"/>
            </div>
        </>
    )
}


export default DonationHeroSectionImg