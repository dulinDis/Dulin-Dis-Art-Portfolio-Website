import React from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-css";
import Button from "../button/button.component";
import { generateBreakPoints } from "./lightGalleryBreakpoints";
import { useNavigate } from "react-router-dom";
import { selectCurrentCategory } from "../../redux/gallery/gallery.selectors";
import { createStructuredSelector } from "reselect";
const ArtworkPreviewElement = React.lazy(() =>
  import("../artwork-preview-element/artwork-preview-element.component")
);

const CollectionOverview = ({ currentCategory }) => {
  const { currentCategoryArtworks, category } = currentCategory;
  let navigate = useNavigate();

  return (
    <div className="collection-overview">
      <h2 className="medium-title">{category}</h2>
      <Masonry
        breakpointCols={generateBreakPoints(currentCategoryArtworks.length)}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {currentCategoryArtworks.map((artwork, index) => (
          <ArtworkPreviewElement
            key={index}
            artwork={artwork}
            category={category}
          />
        ))}
      </Masonry>
      <Button
        className="button"
        btnColor="rgb(95, 93, 90)"
        labelColor="rgb(240, 240, 240)"
        theme="commonStyles"
        onClick={() => navigate("/gallery")}
      >
        back to gallery
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategory: selectCurrentCategory,
});

export default connect(mapStateToProps)(CollectionOverview);
