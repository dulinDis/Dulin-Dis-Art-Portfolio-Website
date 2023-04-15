import React, { useContext } from "react";
import HelmetMetaData from "../../components/helmet-meta-data/helmet-meta-data";
import Loader from "../../components/loader/loader.component";
import { getGalleryCategoriesPreview } from "../../utils/gallery-utils.js";
import DataContext from "../../context/DataContext";
import GalleryContainerComponent from "../../components/gallery-container/gallery-container-component";

const GalleryPage = () => {
  const { data, isLoading, error } = useContext(DataContext);
  const collectionPreviewItems = getGalleryCategoriesPreview(data);

  return (
    <div className="gallery">
      <HelmetMetaData title="Art Gallery - Dulin Dís"></HelmetMetaData>
      <h2>GALLERY</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        "Something went wrong. Please try again later."
      ) : collectionPreviewItems.length === 0 ? (
        "No data to show."
      ) : (
        <GalleryContainerComponent
          collectionPreviewItems={collectionPreviewItems}
        />
      )}
    </div>
  );
};

export default GalleryPage;
