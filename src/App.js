import React, { useEffect, useState, useCallback, createContext } from "react";
import debounce from "lodash/debounce";
import { sectionsAll } from "./data/sectionsData";
import ModalMenu from "./components/ModalMenu";
import Slider from "./Slider";
import MobileSite from "./MobileSite";

export const btnContext = createContext();

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [btnClick, setBtnClick] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selector, setSelector] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const handleBtnClick = e => {
    e.preventDefault();
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
  const handleSectionScroll = section => setCurrentSection(section);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    if (btnClick === "burger-menu-btn") setModalOpen(true);
    if (btnClick === "close-modal-btn") setModalOpen(false);
  }, [btnClick]);

  useEffect(
    useCallback(() => {
      window.addEventListener(
        "resize",
        debounce(e => {
          setWidth(e.target.innerWidth);
          setHeight(e.target.innerHeight);
        }, 1000),
      );
    }, [width, height]),
    [],
  );
  return (
    <btnContext.Provider
      value={{
        handleBtnChange,
        handleSelector,
        handleSectionScroll,
      }}
    >
      {1200 > width ? (
        <MobileSite sections={sectionsAll} />
      ) : (
        <Slider
          height={height}
          btnClick={btnClick}
          selector={selector}
          index={currentSection}
          onClick={handleBtnClick}
        />
      )}
      {modalOpen && <ModalMenu width={width} />}
    </btnContext.Provider>
  );
}

export default App;
