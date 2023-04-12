import GalleryActionTypes from "./gallery.types.js";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  loading: true,
  allArtworks: {},
  currentCategory: {},
  currentArtwork: "",
  error: "",
};

export const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalleryActionTypes.FETCH_GALLERY_REQUEST ||
      GalleryActionTypes.FETCH_CATEGORY_REQUEST ||
      GalleryActionTypes.FETCH_ARTWORK_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case GalleryActionTypes.FETCH_GALLERY_FAILURE ||
      GalleryActionTypes.FETCH_CATEGORY_FAILURE ||
      GalleryActionTypes.FETCH_ARTWORK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        allArtworks: {},
      };

    case GalleryActionTypes.FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        allArtworks: action.payload,
      };

    case GalleryActionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        currentCategory: action.payload,
      };

    case GalleryActionTypes.FETCH_ARTWORK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        currentArtwork: action.payload,
      };


    case GalleryActionTypes.RESET_GALLERY:
      storage.removeItem("persist:root");
      return {
        loading: true,
        allArtworks: {},
        categories: [],
        currentCategory: {},
        currentArtwork: "",
        error: "",
      };

    default:
      return state;
  }
};

export default galleryReducer;
