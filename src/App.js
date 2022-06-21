import React, { useEffect, useState, useCallback, memo } from "react";
import debounce from "lodash/debounce";
import classNames from "classnames";
import { sectionsAll } from "./data/sectionsData";
import ModalMenu from "./components/ModalMenu";
import ModalThankYou from "./components/ModalThankYou";
import Slider from "./Slider";
import MobileSite from "./MobileSite";

export const btnContext = React.createContext();

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [statusForm, setStatusForm] = useState(-1);

  const handleSelector = selector => setCurrentSection(selector);
  const handleSectionScroll = section => setCurrentSection(section);
  const handleToggleModal = () => setModalOpen(!modalOpen);
  const handleStatusForm = status => setStatusForm(status);

  const modalClassName = classNames({
    backdrop: !modalOpen && statusForm === -1,
    "backdrop is-active": modalOpen && statusForm === -1,
  });
  const thankYouClass = classNames({
    "thank-you-backdrop": !modalOpen && statusForm === -1,
    "thank-you-backdrop is-active": modalOpen && statusForm >= 0,
  });

  useEffect(
    useCallback(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener(
        "resize",
        debounce(e => {
          setWidth(e.target.innerWidth);
          setHeight(e.target.innerHeight);
        }, 1000),
      );
    }, []),
    [],
  );
  return (
    <btnContext.Provider
      value={{
        handleSelector,
        handleSectionScroll,
        handleToggleModal,
        handleStatusForm,
        width,
      }}
    >
      {1200 > width ? (
        <MobileSite sections={sectionsAll} />
      ) : (
        <Slider height={height} index={currentSection} sections={sectionsAll} />
      )}
      {<ModalMenu className={modalClassName} width={width} />}
      {<ModalThankYou className={thankYouClass} statusForm={statusForm} />}
    </btnContext.Provider>
  );
}

export default memo(App);
