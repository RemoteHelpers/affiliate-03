import React, { useEffect, useState, createContext } from "react";
import debounce from "lodash/debounce";
import AppBar from "./sections/AppBar";
import HeroSection from "./sections/HeroSection";
import SectionSupportUA from "./sections/SectionSupportUA";
import SectionStepByStep from "./sections/SectionStepByStep";
import SectionGetFreeConsult from "./sections/SectionGetFreeConsult";
import SectionWorthyChoise from "./sections/SectionWorthyChoise";
import SectionDedicatedStaff from "./sections/SectionDedicatedStaff";
import SectionPrices from "./sections/SectionPrices";
import SectionCustomersSay from "./sections/SectionCustomersSay";
import SectionContactForm from "./sections/SectionContactForm";
import Footer from "./sections/Footer";
import ModalMenu from "./components/ModalMenu";
import Slider from "./Slider";

export const btnContext = createContext();

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [btnClick, setBtnClick] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selector, setSelector] = useState(0);

  const handleBtnClick = e => {
    switch (e.currentTarget.classList[0]) {
      case "support-ua-btn":
        setBtnClick("support-ua-btn");
        break;
      case "burger-menu-btn":
        setBtnClick("burger-menu-btn");
        break;
      default:
        setBtnClick("get-consult-btn");
    }
  };
  const handleBtnChange = query => setBtnClick(query);
  const handleSelector = selector => setSelector(selector);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  useEffect(() => {
    if (btnClick === "burger-menu-btn") setModalOpen(true);
    if (btnClick === "close-modal-btn") setModalOpen(false);
  }, [btnClick]);
  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(e => {
        setWidth(e.target.innerWidth);
        setHeight(e.target.innerHeight);
      }, 1000),
    );
  }, [width]);
  return (
    <btnContext.Provider value={{ handleBtnChange, handleSelector }}>
      <AppBar onClick={handleBtnClick} />
      {1200 > width ? (
        <>
          <HeroSection />
          <SectionSupportUA />
          <SectionStepByStep />
          <SectionGetFreeConsult />
          <SectionWorthyChoise />
          <SectionDedicatedStaff />
          <SectionPrices />
          <SectionCustomersSay />
          <SectionContactForm />
          <Footer />
        </>
      ) : (
        <Slider height={height} btnClick={btnClick} selector={selector} />
      )}
      {modalOpen && <ModalMenu />}
    </btnContext.Provider>
  );
}

export default App;
