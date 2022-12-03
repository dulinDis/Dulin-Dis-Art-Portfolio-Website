import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HelmetMetaData from "../helmet-meta-data/helmet-meta-data";
import SocialModal from "../social-modal/social-modal";
import { RiShareForwardLine } from "react-icons/ri";

const ArtworkPreviewElement = ({ artwork, category }) => {
  const { url, title, id, description } = artwork;
  const [showModal, setShowModal] = useState(false);
  let { pathname } = useLocation();
  let navigate = useNavigate();

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  return (
    <div className="masonry_tile">
      <HelmetMetaData
        title={`${
          category.charAt(0).toUpperCase() + category.slice(1)
        } - Dulin Dís`}
        currentUrl={`${pathname}/${id}`}
        imageUrl={url}
        description={description}
      ></HelmetMetaData>

      <div
        key={id}
        className="figure"
        onClick={(e) => {
          if (e.target.classList.contains("cover")) {
            navigate(`${pathname}/${id}`);
          }
        }}
      >
        <img crossOrigin={`anonymous`} src={url} alt={title} />
        <div className="cover">
          <p className="artwork-title">"{title}"</p>
          <RiShareForwardLine className="share-icon" onClick={toggleModal} />
        </div>
      </div>

      {showModal ? (
        <SocialModal
          artwork={artwork}
          artworkPageUrl={`${pathname}/${id}`}
          toggleModal={toggleModal}
          showModal={showModal}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ArtworkPreviewElement;
