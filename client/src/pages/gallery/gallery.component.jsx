import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllArtworks } from "../../redux/gallery/gallery.selectors";
import HelmetMetaData from '../../components/helmet-meta-data/helmet-meta-data';
import { fetchGalleryAsync } from "../../redux/gallery/gallery-thunks";
import Loader from "../../components/loader/loader.component";
import { getCategoryPreview, getCategoryArtworks } from "../../utils/gallery-utils.js";
import { resetGallery,setCurrentCategory } from "../../redux/gallery/gallery.actions";

const CollectionPreviewElement = React.lazy(() =>
  import(
    "../../components/collection-preview-element/collection-preview-element.component"
  )
);

const GalleryPage = ({ artworks,fetchGalleryAsync,resetGallery}) => {
  useEffect(() => {
    fetchGalleryAsync();
    return ()=>{
      // resetGallery();
    }
  }, []);

  return (
      <div className="gallery">
        <HelmetMetaData title='Art Gallery - Dulin Dís'></HelmetMetaData>
        <h2>GALLERY</h2>
        <Suspense fallback={<Loader/>}>
        <div className="gallery-container">
          {artworks ? Object.keys(artworks).map((category, index) => {
            const  collectionPreviewItem =getCategoryPreview(artworks, category);
            const currentCategoryArtworks=getCategoryArtworks(artworks,category);

            return (
                <CollectionPreviewElement
                  key={index}
                  category={category}
                  collectionPreviewItem={collectionPreviewItem}
                  currentCategoryArtworks={currentCategoryArtworks}
                  // onClick={()=>{setCurrentCategory({currentCategoryArtworks:currentCategoryArtworks})}}
                />
              
            );
          }) : 'nothing to display'
          
          }
        </div>
        </Suspense>

      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  artworks: selectAllArtworks,
});

const mapDispatchToProps = (dispatch,categoryData)=>({
  fetchGalleryAsync:()=>dispatch(fetchGalleryAsync()),
  setCurrentCategory:()=>dispatch(setCurrentCategory(categoryData)),
  resetGallery:()=>dispatch(resetGallery())
})

export default connect(mapStateToProps,mapDispatchToProps)(GalleryPage);
