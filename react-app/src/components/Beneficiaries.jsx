import Navbar from "./Navbar";
import Footer from "./footer";
import BeneficiaryVideo from "./Beneficiary-video";
import TextCards from "./Beneficiary-text-cards";
import JobPosts from "./Job-posting";
import JobHeading from "./Job-posting-h1";
import TextCardHeading from "./Beneficiary-text-card-head";
import ContactBeneficiaries from "./beneficiaries/contactBeneficiaries";

function Beneficiaries() {
  return (
    <div>
      <Navbar />
      <BeneficiaryVideo/>
      <TextCardHeading />
      <TextCards />
      < JobHeading />
      <JobPosts />
      <ContactBeneficiaries/>
      <Footer />
    </div>
  );
}

export default Beneficiaries;