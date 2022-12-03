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

export const setCurrentCategory = (categoryContent) => ({
  type: GalleryActionTypes.SET_CURRENT_CATEGORY,
  payload: categoryContent,
});

export const resetGallery = () => {
  return {
    type: GalleryActionTypes.RESET_GALLERY,
  };
};
