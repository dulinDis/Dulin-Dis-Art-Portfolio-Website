import React from "react";
import { useRef, useEffect, useCallback } from "react";
import { GrFormClose } from "react-icons/gr";

export const ArtworkModal = ({
  showModal,
  setShowModal,
  toggleModal,
  src,
  alt,
  className,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal === true) {
        toggleModal();
      }
    },
    [showModal, toggleModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <div className="background" ref={modalRef} onClick={closeModal}>
          <GrFormClose
            className="close-media-btn"
            aria-label="close modal"
            onClick={() => {
              toggleModal();
            }}
          />
          <div className={`modal-container ${className}`} showModal={showModal}>
            <img
              crossOrigin={`anonymous`}
              className="modal-img"
              src={src}
              alt={alt}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ArtworkModal;
