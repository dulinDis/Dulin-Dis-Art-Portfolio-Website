import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const CollectionPreviewElement = ({ collectionPreviewItem }) => {
  const [wideClass, setWideClass] = useState(false);
  const navigate = useNavigate();
  const { category } = collectionPreviewItem;

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    if (offsetWidth >= offsetHeight) {
      setWideClass(true);
    }
  };

  return (
    <div className="collection-preview-element">
      <div key={collectionPreviewItem.id} className="category-preview-box">
        <div
          className={`collection-preview-img `}
          onClick={() => {
            navigate(`/gallery/${collectionPreviewItem.category}`);
          }}
        >
          <img
            crossOrigin={`anonymous`}
            alt={collectionPreviewItem.id}
            onLoad={onImgLoad}
            className={`${wideClass ? "wide" : ""}`}
            src={collectionPreviewItem.url}
          />
          <div className="cover"></div>
          <p className="small-title category-title" id="category-title">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionPreviewElement;
