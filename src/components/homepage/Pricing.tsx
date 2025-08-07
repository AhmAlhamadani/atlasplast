
import { useState } from "react";
import { pricingPlans } from "../../data/pricingData";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  const getPrice = (monthlyPrice: number) => {
    if (activeTab === "monthly") return `$${monthlyPrice}`;
    const yearly = monthlyPrice * 12 * 0.8;
    return `$${yearly.toFixed(0)}`;
  };

  return (
    <section className="section-gap">
    <Container>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
  <SectionTitle
    label="Pricing Plan"
    title="Our Pricing Plan"
    align="left"
  />

  {/* Toggle Tabs */}
  <div className="w-full md:w-auto flex justify-end">
    <div className="inline-flex bg-sectionBg rounded-full">
      {["monthly", "yearly"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as "monthly" | "yearly")}
          className={`px-6 py-2.5 font-medium rounded-full text-[18px] transition ${
            activeTab === tab
              ? "bg-primaryBlue text-white"
              : "text-secondaryColor"
          }`}
        >
          {tab === "monthly" ? "Month" : "Yearly"}
        </button>
      ))}
    </div>
  </div>
</div>


       {/* Pricing Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:mt-[60px] mt-12">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="border border-primaryBorder rounded-[10px] md:p-10 p-8 group hover:border-secondaryColor duration-300 ease-in-out"
          >
            <div className="flex items-end gap-2">
            <h2>{getPrice(plan.price)}</h2>
            <p>
              /{activeTab === "monthly" ? "Month" : "Year"}
            </p>
            </div>
            <h3 className="mt-5">{plan.title}</h3>
            <hr className="my-[30px] border-primaryBorder group-hover:border-secondaryColor duration-300 ease-in-out" />

            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[16px] font-normal text-textColor leading-7 font-secondary">
                  <BsFillCheckCircleFill className="w-5 h-5 text-secondaryColor" />
                  {feature}
                </li>
              ))}
            </ul>

           <div className="mt-10">
           <Button className="bg-[#F2F4F8] w-full text-black px-7 py-2.5 rounded-full hover:bg-secondaryColor hover:text-white duration-300 ease-in-out cursor-pointer">
              Get Started Now
            </Button>
           </div>
          </div>
        ))}
      </div>
    </Container>

      

     
    </section>
  );
};

export default Pricing;
