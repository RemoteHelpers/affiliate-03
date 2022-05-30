import { ReactComponent as ScrollArrow } from "../svg/scroll-arrow.svg";

function ScrollHint() {
  return (
    <div className="scroll-hint-container">
      <p className="scroll-hint">Scroll</p>
      <ScrollArrow className="scroll-arrow-svg" />
    </div>
  );
}

export default ScrollHint;
