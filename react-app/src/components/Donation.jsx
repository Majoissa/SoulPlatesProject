import Title from "./donation/General-Components/Title";
import DonationForm from "./donation/components/DonationForm";
import "./donation/General-Components/Donation.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import DonationHeroSectionImg from "./donation/components/DonationHeroSectionImg";
import UpcomingProjectStories from "./donation/components/UpcomingProjectStories";

function Donation() {
    return (
        <>
            <Navbar/>
            <DonationHeroSectionImg />

            <div className={'container'}>
                {/* <Title title="Donate to help others!"/>
                Only for title. The second title has title and subtitle option!*/}
                <Title title="Make a donation to help us!" subtitle="DONATE TO HELP"/>
                <DonationForm/>
            </div>

            <UpcomingProjectStories/>
            <Footer/>
        </>
    )
}

export default Donation;





