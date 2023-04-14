import React, { useContext } from "react";
import HelmetMetaData from "../../components/helmet-meta-data/helmet-meta-data";
import Loader from "../../components/loader/loader.component";
import { getGalleryCategoriesPreview } from "../../utils/gallery-utils.js";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const CollectionPreviewElement = React.lazy(() =>
  import(
    "../../components/collection-preview-element/collection-preview-element.component"
  )
);

const GalleryPage = () => {
  const { data, isLoading, error } = useContext(DataContext);
  const navigate = useNavigate();
  const collectionPreviewItems = getGalleryCategoriesPreview(data);

  return (
    <div className="gallery">
      <HelmetMetaData title="Art Gallery - Dulin Dís"></HelmetMetaData>
      <h2>GALLERY</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        "Something went wrong. Please try again later."
      ) : (
        <div className="gallery-container">
          {collectionPreviewItems.length > 0
            ? collectionPreviewItems.map((previewItem, index) => {
                return (
                  <CollectionPreviewElement
                    key={index}
                    category={previewItem.category}
                    collectionPreviewItem={previewItem}
                    onClick={() => navigate(`/gallery/${previewItem.category}`)}
                  />
                );
              })
            : "No data."}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
