import Navbar from "./Navbar";
import Footer from "./footer";
import BeneficiaryVideo from "./Beneficiary-video";
import TextCards from "./Beneficiary-text-cards";
function Beneficiaries() {
  return (
    <div>
      <Navbar />
      <BeneficiaryVideo/>
      <TextCards />
      <Footer />
    </div>
  );
}

export default Beneficiaries;
