import HeroSection from "../sections/HeroSection";
import SectionStepByStep from "../sections/SectionStepByStep";
import SectionGetFreeConsult from "../sections/SectionGetFreeConsult";
import SectionWorthyChoise from "../sections/SectionWorthyChoise";
import SectionDedicatedStaff from "../sections/SectionDedicatedStaff";
import SectionPrices from "../sections/SectionPrices";
import SectionCustomersSay from "../sections/SectionCustomersSay";
import SectionContactForm from "../sections/SectionContactForm";
import SectionSupportUA from "../sections/SectionSupportUA";
import Footer from "../sections/Footer";

export const sectionsAll = [
  {
    section: <HeroSection />,
    name: "HeroSection",
    id: "#home",
  },
  {
    section: <SectionSupportUA />,
    name: "SectionSupportUA",
    id: "#support-ua",
  },
  {
    section: <SectionStepByStep />,
    name: "SectionStepByStep",
    id: "#step-by-step",
  },
  {
    section: <SectionGetFreeConsult />,
    name: "SectionGetFreeConsult",
    id: "#get-consult",
  },
  {
    section: <SectionWorthyChoise />,
    name: "SectionWorthyChoise",
    id: "#worthy-choise",
  },
  {
    section: <SectionDedicatedStaff />,
    name: "SectionDedicatedStaff",
    id: "#dedicated-staff",
  },
  {
    section: <SectionPrices />,
    name: "SectionPrices",
    id: "#prices",
  },
  {
    section: <SectionCustomersSay />,
    name: "SectionCustomersSay",
    id: "#customers-say",
  },
  {
    section: (
      <>
        <SectionContactForm />
        <Footer />
      </>
    ),
    name: "SectionContactForm",
    id: "#contact-form",
  },
];
