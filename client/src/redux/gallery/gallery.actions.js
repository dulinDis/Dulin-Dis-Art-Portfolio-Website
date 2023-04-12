import GalleryActionTypes from "./gallery.types";

export const fetchGalleryRequest = () => {
  return {
    type: GalleryActionTypes.FETCH_GALLERY_REQUEST,
  };
};

export const fetchGallerySuccess = (gallery) => {
  return {
    type: GalleryActionTypes.FETCH_GALLERY_SUCCESS,
    payload: gallery,
  };
};

export const fetchGalleryFailure = (error) => {
  return {
    type: GalleryActionTypes.FETCH_GALLERY_FAILURE,
    payload: error,
  };
};

export const fetchCategoryRequest = () => {
  return {
    type: GalleryActionTypes.FETCH_CATEGORY_REQUEST,
  };
};

export const fetchCategorySuccess = (category) => {
  return {
    type: GalleryActionTypes.FETCH_CATEGORY_SUCCESS,
    payload: category,
  };
};

export const fetchCategoryFailure = (error) => {
  return {
    type: GalleryActionTypes.FETCH_CATEGORY_FAILURE,
    payload: error,
  };
};

export const fetchArtworkRequest = () => {
  return {
    type: GalleryActionTypes.FETCH_CATEGORY_REQUEST,
  };
};

export const fetchArtworkSuccess = (artwork) => {
  return {
    type: GalleryActionTypes.FETCH_CATEGORY_SUCCESS,
    payload: artwork,
  };
};

export const fetchArtworkFailure = (error) => {
  return {
    type: GalleryActionTypes.FETCH_CATEGORY_FAILURE,
    payload: error,
  };
};

export const resetGallery = () => {
  return {
    type: GalleryActionTypes.RESET_GALLERY,
  };
};
