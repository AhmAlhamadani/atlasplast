import Breadcrumb from "../components/common/Breadcrumb";
import TermsAndConditionsInfo from "../components/sections/termsAndConditionsInfo/TermsAndConditionsInfo";

const TermsAndConditions = () => {
  return (
    <section>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Trems & Condition"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Trems & Condition" },
        ]}
      />

      {/************* Terms And Conditions Info section start here **************/}
      <TermsAndConditionsInfo />
    </section>
  );
};

export default TermsAndConditions;
