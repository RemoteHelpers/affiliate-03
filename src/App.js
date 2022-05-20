import AppBar from "./sections/AppBar";
import HeroSection from "./sections/HeroSection";
import SectionSupportUA from "./sections/SectionSupportUA";
import SectionStepByStep from "./sections/SectionStepByStep";
import SectionGetFreeConsult from "./sections/SectionGetFreeConsult";
import SectionWorthyChoise from "./sections/SectionWorthyChoise";
import SectionDedicatedStaff from "./sections/SectionDedicatedStaff";
import SectionPrices from "./sections/SectionPrices";
import SectionCustomersSay from "./sections/SectionCustomersSay";

function App() {
  return (
    <>
      <AppBar />
      <HeroSection />
      <SectionSupportUA />
      <SectionStepByStep />
      <SectionGetFreeConsult />
      <SectionWorthyChoise />
      <SectionDedicatedStaff />
      <SectionPrices />
      <SectionCustomersSay />
    </>
  );
}

export default App;
