import { createPortal } from "react-dom";
import { useContext } from "react";
import { btnContext } from "../App";
import modalMenuData from "../data/modalMenuData.json";
import { ReactComponent as Logo } from "../svg/logo-hover.svg";
import { ReactComponent as CloseModal } from "../svg/close-modal.svg";
import "../styles/modal.css";

function ModalMenu() {
  const { handleToggleModal, handleSelector } = useContext(btnContext);

  const handleLinkClick = e => {
    const { index } = e.currentTarget.dataset;
    handleSelector(Number(index));
    handleToggleModal();
  };
  const handleBackdropClick = e => {
    if (e.target.className === "backdrop") handleToggleModal();
  };
  return createPortal(
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="modal-content-container" id="modal">
        <div className="toolbar-container">
          <div className="logo-container" onClick={() => handleToggleModal()}>
            <Logo className="logo" width={97} height={23} />
          </div>
          <button
            className="close-modal-btn"
            onClick={() => handleToggleModal()}
          >
            <CloseModal className="close-modal-icon" />
          </button>
        </div>
        <ul className="modal-link-list">
          {modalMenuData.map(({ className, link, linkTitle, dataIndex }) => (
            <li key={link} className="modal-link-item">
              <a
                href={link}
                className={className}
                onClick={handleLinkClick}
                data-index={dataIndex}
              >
                {linkTitle}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.querySelector("#modal-root"),
  );
}

export default ModalMenu;
