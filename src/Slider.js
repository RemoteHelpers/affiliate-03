import { useContext, useEffect, useCallback, memo } from "react";
import { btnContext } from "./App";
import AppBar from "./sections/AppBar";
import { sectionsAll } from "./data/sectionsData";

function Slider({ height, index }) {
  const { handleSectionScroll } = useContext(btnContext);
  window.location.hash = sectionsAll[index].id;

  const scrollHandler = useCallback(
    e => {
      if (e.deltaY === 100) {
        if (index === sectionsAll.length - 1) return;
        handleSectionScroll(index + 1);
      } else {
        if (index === 0) return;
        handleSectionScroll(index - 1);
      }
    },
    [index],
  );

  useEffect(
    useCallback(() => {
      handleSectionScroll(index);
    }, [index]),
    [index],
  );
  return (
    <div
      style={{ height: height }}
      onWheel={scrollHandler}
      className="slider-container"
    >
      <AppBar />
      {sectionsAll[index].section}
    </div>
  );
}

export default memo(Slider);
