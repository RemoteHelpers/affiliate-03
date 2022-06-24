import { createPortal } from "react-dom";
import { useContext } from "react";
import { btnContext } from "../App";
import { Link } from "react-scroll/modules";
import modalMenuData from "../data/modalMenuData.json";
import { ReactComponent as Logo } from "../svg/logo-hover.svg";
import { ReactComponent as CloseModal } from "../svg/close-modal.svg";

function ModalMenu({ className, width }) {
  const { handleToggleModal, handleSelector } = useContext(btnContext);

  const handleLinkClick = e => {
    const { index } = e.currentTarget.dataset;
    handleSelector(Number(index));
    handleToggleModal();
  };
  const handleBackdropClick = e => {
    if (e.target.className === "backdrop is-active") handleToggleModal();
  };
  return createPortal(
    <div className={className} onClick={handleBackdropClick}>
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
          {width <= 1200
            ? modalMenuData.map(({ className, link, linkTitle, dataIndex }) => (
                <li key={link} className="modal-link-item">
                  <Link
                    className={className}
                    onClick={handleLinkClick}
                    data-index={dataIndex}
                    to={link}
                    spy={true}
                    smooth={true}
                    duration={!dataIndex ? 300 : Number(`${dataIndex * 2}00`)}
                  >
                    {linkTitle}
                  </Link>
                </li>
              ))
            : modalMenuData.map(({ className, linkTitle, dataIndex }) => (
                <li key={linkTitle} className="modal-link-item">
                  <p
                    className={className}
                    onClick={handleLinkClick}
                    data-index={dataIndex}
                  >
                    {linkTitle}
                  </p>
                </li>
              ))}
        </ul>
      </div>
    </div>,
    document.querySelector("#modal-root"),
  );
}

export default ModalMenu;
