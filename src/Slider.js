import { useState, useContext, useEffect } from "react";
import { btnContext } from "./App";
import HeroSection from "./sections/HeroSection";
import SectionStepByStep from "./sections/SectionStepByStep";
import SectionGetFreeConsult from "./sections/SectionGetFreeConsult";
import SectionWorthyChoise from "./sections/SectionWorthyChoise";
import SectionDedicatedStaff from "./sections/SectionDedicatedStaff";
import SectionPrices from "./sections/SectionPrices";
import SectionCustomersSay from "./sections/SectionCustomersSay";
import SectionContactForm from "./sections/SectionContactForm";
import SectionSupportUA from "./sections/SectionSupportUA";
import Footer from "./sections/Footer";

const items = [
  <HeroSection />,
  <SectionStepByStep />,
  <SectionGetFreeConsult />,
  <SectionWorthyChoise />,
  <SectionDedicatedStaff />,
  <SectionPrices />,
  <SectionCustomersSay />,
  <>
    <SectionContactForm />
    <Footer />
  </>,
];

function Slider({ height, btnClick, selector }) {
  const [index, setIndex] = useState(0);
  const { handleBtnChange } = useContext(btnContext);

  const scrollHandler = e => {
    if (btnClick) handleBtnChange("");
    if (e.deltaY === 100) {
      if (index === items.length - 1) return;
      setIndex(index + 1);
    } else {
      if (index === 0) return;
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    if (selector === -1) {
      handleBtnChange("support-ua-btn");
    } else {
      setIndex(selector);
    }
  }, [selector]);
  useEffect(() => {
    if (btnClick === "get-consult-btn") setIndex(items.length - 1);
  }, [btnClick]);

  if (btnClick === "support-ua-btn")
    return (
      <div style={{ height: height }} onWheel={scrollHandler}>
        {btnClick === "support-ua-btn" && <SectionSupportUA />}
      </div>
    );
  return (
    <div style={{ height: height }} onWheel={scrollHandler}>
      {items[index]}
    </div>
  );
}

export default Slider;
