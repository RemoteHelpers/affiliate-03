import AppBar from "./components/AppBar";
import HeroSection from "./sections/HeroSection";
import SectionSupportUA from "./sections/SectionSupportUA";
import SectionStepByStep from "./sections/SectionStepByStep";
import SectionGetFreeConsult from "./sections/SectionGetFreeConsult";
import SectionWorthyChoise from "./sections/SectionWorthyChoise";
import SectionDedicatedStaff from "./sections/SectionDedicatedStaff";

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
    </>
  );
}

export default App;
