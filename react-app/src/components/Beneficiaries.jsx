import Navbar from "./Navbar";
import Footer from "./footer";
import BeneficiaryVideo from "./Beneficiary-video";
import TextCards from "./Beneficiary-text-cards";
import JobPosts from "./Job-posting";
import JobHeading from "./Job-posting-h1";
import JobApplyButton from "./Job-apply-button";

function Beneficiaries() {
  return (
    <div>
      <Navbar />
      <BeneficiaryVideo/>
      <TextCards />
      < JobHeading />
      <JobPosts />
      <JobApplyButton />
      <Footer />
    </div>
  );
}

export default Beneficiaries;
