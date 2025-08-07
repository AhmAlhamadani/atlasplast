import Breadcrumb from "../components/common/Breadcrumb";
import PrivacyPolicyInfo from "../components/sections/privacyPolicyInfo/PrivacyPolicyInfo";

const PrivacyPolicy = () => {
  return (
    <section>
      {/* ************* Breadcrumb section start here ************* */}
      <Breadcrumb
        title="Privacy Policy"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />

     {/* ************* Privacy Policy Info section start here ************* */}
     <PrivacyPolicyInfo/>
     
    </section>
  );
};

export default PrivacyPolicy;
