import Navbar from "./Navbar";
import Footer from "./footer";
import BeneficiaryVideo from "./Beneficiary-video";
import TextCards from "./Beneficiary-text-cards";
import AdminLoginButton from "./AdminLoginButton";
import SocialMedia from "./SocialMedia";
function Beneficiaries() {
  return (
    <div>
      <Navbar />
      <BeneficiaryVideo/>
      <SocialMedia/>
      <TextCards />
      <Footer />
      <AdminLoginButton/>
    </div>
  );
}

export default Beneficiaries;