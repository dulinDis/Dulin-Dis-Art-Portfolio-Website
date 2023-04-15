import React from "react";
import CollectionPreviewElement from "../collection-preview-element/collection-preview-element.component";
import { useNavigate } from "react-router-dom";

const GalleryContainerComponent = ({ collectionPreviewItems }) => {
  const navigate = useNavigate();

  return (
    <div className="gallery-container">
      {collectionPreviewItems.map((previewItem, index) => {
        return (
          <CollectionPreviewElement
            key={index}
            category={previewItem.category}
            collectionPreviewItem={previewItem}
            onClick={() => navigate(`/gallery/${previewItem.category}`)}
          />
        );
      })}
    </div>
  );
};

export default GalleryContainerComponent;
