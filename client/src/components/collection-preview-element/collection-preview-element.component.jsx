import React, {useState} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import {selectAllArtworks} from '../../redux/gallery/gallery.selectors';
import { Link, useLocation } from "react-router-dom";
import {
  setCurrentCategory,
} from "../../redux/gallery/gallery.actions";


const CollectionPreviewElement = ({category, artworks, setCurrentCategory,currentCategoryArtworks, collectionPreviewItem}) => {
  const [wideClass, setWideClass] =useState(false);
  let { pathname } = useLocation();
  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    if (offsetWidth>=offsetHeight) {
      setWideClass(true)
    }
  };
  
  return (
    <div className="collection-preview-element">
           <div key={collectionPreviewItem.id} className='category-preview-box'>
            <Link
              to={`${pathname}/${category}`}
              category={category}
            >
              <div className={`collection-preview-img `} onClick={()=>{setCurrentCategory({category:category,currentCategoryArtworks:currentCategoryArtworks})}}>
                <img  crossOrigin={`anonymous`}  alt={collectionPreviewItem.id}       
                onLoad={onImgLoad} 
                className={`${wideClass? 'wide' : ""}`}
                src={collectionPreviewItem.url}/>
                <div className="cover"></div>
                <p className="small-title category-title" id="category-title">{category}</p>
              </div>
            </Link>
          </div>

    </div>
  );
};



const mapStateToProps = createStructuredSelector({
  artworks:selectAllArtworks,
});

const mapDispatchToProps = (dispatch,categoryData) => ({
  setCurrentCategory:()=>dispatch(setCurrentCategory(categoryData))
})
export default connect(mapStateToProps,mapDispatchToProps)(CollectionPreviewElement)
