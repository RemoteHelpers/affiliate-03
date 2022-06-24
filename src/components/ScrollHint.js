import { ReactComponent as ScrollArrow } from "../svg/scroll-arrow.svg";

function ScrollHint() {
  return (
    <div className="scroll-hint-container">
      <p className="scroll-hint">Grab And Drag</p>
      <ScrollArrow className="scroll-arrow-svg" />
    </div>
  );
}

export default ScrollHint;
