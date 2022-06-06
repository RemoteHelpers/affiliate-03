import { createPortal } from "react-dom";
import { useContext } from "react";
import { btnContext } from "../App";
import Spinner from "./Loader";
import "../styles/modal.css";

function ModalThankYou({ className, statusForm }) {
  const { handleToggleModal, handleStatusForm } = useContext(btnContext);

  const handleCloseAndReset = () => {
    handleToggleModal();
    handleStatusForm(-1);
    document.querySelector(".contact-form").reset();
  };
  const handleBackdropClick = e => {
    if (
      e.target.className === "thank-you-backdrop is-active" &&
      statusForm === 1
    )
      handleCloseAndReset();
  };

  return createPortal(
    <div className={className} onClick={handleBackdropClick}>
      <div className="modal-content-container" id="modal">
        {statusForm === 0 && <Spinner />}
        {statusForm === 1 && (
          <>
            <h3 className="success-title">Success</h3>
            <p className="description">Your data has already submited</p>
            <button className="ok-btn" onClick={handleCloseAndReset}>
              OK
            </button>
          </>
        )}
        {statusForm === 2 && (
          <>
            <h3 className="error-title">Error...</h3>
            <p className="description">Something go wrong, try later</p>
            <button className="back-btn" onClick={handleCloseAndReset}>
              Back
            </button>
          </>
        )}
      </div>
    </div>,
    document.querySelector("#thank-you-modal-root"),
  );
}

export default ModalThankYou;
