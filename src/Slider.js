import { useContext, useEffect, useCallback, memo } from "react";
import { btnContext } from "./App";
import AppBar from "./sections/AppBar";

function Slider({ height, index, sections }) {
  const { handleSectionScroll } = useContext(btnContext);
  window.location.hash = sections[index].id;

  const scrollHandler = useCallback(
    e => {
      if (e.deltaY === 100) {
        if (index === sections.length - 1) return;
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
      {sections[index].section}
    </div>
  );
}

export default memo(Slider);
