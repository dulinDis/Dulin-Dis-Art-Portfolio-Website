import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import Button from "../button/button.component";
import { generateBreakPoints } from "./lightGalleryBreakpoints";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { getCategoryArtworks } from "../../utils/gallery-utils";
import PageLoader from "../page-loader/page-loader.component";
import Loader from "../loader/loader.component";

const ArtworkPreviewElement = React.lazy(() =>
  import("../artwork-preview-element/artwork-preview-element.component")
);

const CollectionOverview = () => {
  const { data, isLoading, error } = useContext(DataContext);
  const { category } = useParams();
  console.log("overview: data, isLoading, error ", data, isLoading, error);

  const categoryArtworks = getCategoryArtworks(data, category);

  let navigate = useNavigate();

  return (
    <div className="collection-overview">
      <h2 className="medium-title">{category}</h2>

      {isLoading ? (
        <Loader />
      ) : error ? (
        "Something went wrong. Please try again later."
      ) : categoryArtworks.length === 0 ? (
        "No data to show."
      ) : (
        <React.Fragment>
          <Masonry
            breakpointCols={generateBreakPoints(categoryArtworks.length)}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {categoryArtworks.map((artwork, index) => (
              <ArtworkPreviewElement
                key={index}
                artwork={artwork}
                category={category}
              />
            ))}
          </Masonry>
          )
          <Button
            className="button"
            btnColor="rgb(95, 93, 90)"
            labelColor="rgb(240, 240, 240)"
            theme="commonStyles"
            onClick={() => navigate("/gallery")}
          >
            back to gallery
          </Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default CollectionOverview;
