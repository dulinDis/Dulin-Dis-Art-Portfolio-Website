import React, { useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/button/button.component";
import ArtworkModal from "../../components/modal/modal.component";
import HelmetMetaData from "../../components/helmet-meta-data/helmet-meta-data";
import DataContext from "../../context/DataContext";
import { getArtworkById } from "../../utils/gallery-utils";
import PageLoader from "../../components/page-loader/page-loader.component";

function ArtworkComponent() {
  const { data, isLoading, error } = useContext(DataContext);
  const { category, artworkId } = useParams();
  const currentArtwork = getArtworkById(data, category, artworkId) || {};
  const { title, url, technique, size, description } = currentArtwork;

  const [wideClass, setWideClass] = useState(false);

  let navigate = useNavigate();
  let { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    if (offsetWidth >= offsetHeight) {
      setWideClass(true);
    }
  };

  const getCurrentPathWithoutLastPart = () =>
    pathname.slice(0, pathname.lastIndexOf("/"));

  return (
    <div className="artwork-page">
      <HelmetMetaData
        title={`${title} - Dulin Dís`}
        currentUrl={pathname}
        imageUrl={url}
      ></HelmetMetaData>
      {isLoading ? (
        <PageLoader />
      ) : error ? (
        error.message
      ) : Object.keys(currentArtwork).length !== 0 ? (
        <React.Fragment>
          <HelmetMetaData
            title={`${title} - Dulin Dís`}
            currentUrl={pathname}
            imageUrl={url}
          ></HelmetMetaData>
          <div className="artwork-container">
            <div className="artwork-image" onClick={toggleModal}>
              <img
                crossOrigin={`anonymous`}
                onLoad={onImgLoad}
                className={`${wideClass ? "wide" : ""}`}
                src={url}
                alt={title}
              />
            </div>

            <div className="artwork-description">
              <h3 className="artwork-title">"{title}"</h3>
              <h4 className="artwork-parameter">{size}</h4>
              <h5 className="artwork-parameter">{technique}</h5>
              <p className={`artwork-parameter description`}>{description}</p>
            </div>
            <Button
              className="button"
              btnColor="rgb(95, 93, 90)"
              labelColor="rgb(240, 240, 240)"
              theme="commonStyles"
              onClick={() => {
                navigate(`${getCurrentPathWithoutLastPart()}`);
              }}
            >
              {" "}
              back to {category}
            </Button>
          </div>
          <ArtworkModal
            showModal={showModal}
            className={`${wideClass ? "wide" : ""}`}
            toggleModal={toggleModal}
            src={url}
            alt={title}
          />
        </React.Fragment>
      ) : (
        "artwork with this id doesnt exist"
      )}
    </div>
  );
}

export default ArtworkComponent;
