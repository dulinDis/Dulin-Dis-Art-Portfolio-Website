import React, { useRef, useEffect, useCallback } from "react";
import SocialFollow from "../social-follow/social-follow";
import HelmetMetaData from "../helmet-meta-data/helmet-meta-data";
import { AiOutlineCopy } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const SocialModal = ({ artwork, artworkPageUrl, toggleModal, showModal }) => {
  const { url, title, description } = artwork;
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
  const copy = () => {
    navigator.clipboard.writeText(artworkPageUrl);
  };
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div
      className="social-modal-background"
      ref={modalRef}
      onClick={closeModal}
    >
      {showModal && (
        <div className="social-modal">
          <HelmetMetaData
            title={title}
            currentUrl={artworkPageUrl}
            imageUrl={url}
          ></HelmetMetaData>
          <GrFormClose
            className="close-social-modal-button"
            aria-label="close modal"
            onClick={() => {
              toggleModal();
            }}
          />
          <SocialFollow
            currentUrl={artworkPageUrl}
            imageUrl={url}
            title={title}
            description={description}
          />
          <div className="copy-link-container">
            <input
              className="copy-input"
              type="text"
              defaultValue={`${artworkPageUrl}`}
              value={artworkPageUrl}
              readOnly
              id="myInput"
            />
            <button className="copy-button" onClick={copy}>
              <AiOutlineCopy />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialModal;
