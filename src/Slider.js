import { useContext, useEffect, useCallback, memo } from "react";
import { btnContext } from "./App";
import AppBar from "./sections/AppBar";
import { sectionsAll } from "./data/sectionsData";

function Slider({ height, btnClick, selector, index, onClick }) {
  const { handleBtnChange, handleSectionScroll } = useContext(btnContext);
  window.location.hash = sectionsAll[index].id;

  const scrollHandler = useCallback(
    e => {
      if (btnClick) handleBtnChange("");
      if (e.deltaY === 100) {
        if (index === sectionsAll.length - 1) return;
        handleSectionScroll(index + 1);
      } else {
        if (index === 0) return;
        handleSectionScroll(index - 1);
      }
    },
    [btnClick, index],
  );

  useEffect(
    useCallback(() => {
      if (selector === -1) {
        handleBtnChange("support-ua-btn");
      } else {
        handleSectionScroll(selector);
      }
    }, [selector]),
    [selector],
  );
  useEffect(
    useCallback(() => {
      if (btnClick === "get-consult-btn") {
        handleSectionScroll(sectionsAll.length - 1);
      }
      if (btnClick === "support-ua-btn") {
        handleSectionScroll(1);
      }
    }, [btnClick]),
    [btnClick],
  );
  return (
    <div
      style={{ height: height }}
      onWheel={scrollHandler}
      className="slider-container"
    >
      <AppBar onClick={onClick} />
      {sectionsAll[index].section}
    </div>
  );
}

export default memo(Slider);
