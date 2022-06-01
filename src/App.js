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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleSelector = selector => setCurrentSection(selector);
  const handleSectionScroll = section => setCurrentSection(section);
  const handleToggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

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
        handleSelector,
        handleSectionScroll,
        handleToggleModal,
      }}
    >
      {1200 > width ? (
        <MobileSite sections={sectionsAll} />
      ) : (
        <Slider height={height} index={currentSection} />
      )}
      {modalOpen && <ModalMenu />}
    </btnContext.Provider>
  );
}

export default App;
