import Navbar from "./Navbar";
import Footer from "./footer";
import BeneficiaryVideo from "./Beneficiary-video";
import TextCards from "./Beneficiary-text-cards";
import JobPosts from "./Job-posting";
import JobHeading from "./Job-posting-h1";
import AdminLoginButton from "./AdminLoginButton";
import SocialMedia from "./SocialMedia";
import TextCardHeading from "./Beneficiary-text-card-head";

function Beneficiaries() {
  return (
    <div>
      <Navbar />
      <BeneficiaryVideo/>
      <SocialMedia/>
      <TextCardHeading />
      <TextCards />
      < JobHeading />
      <JobPosts />
      <Footer />
      <AdminLoginButton/>
    </div>
  );
}

export default Beneficiaries;