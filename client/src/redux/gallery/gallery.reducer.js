import GalleryActionTypes from "./gallery.types.js";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  loading: true,
  allArtworks: {},
  categories: [],
  currentCategory: {},
  error: "",
};

export const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalleryActionTypes.FETCH_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GalleryActionTypes.FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        allArtworks: action.payload,
      };
    case GalleryActionTypes.FETCH_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        allArtworks: {},
      };
    case GalleryActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GalleryActionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case GalleryActionTypes.RESET_GALLERY:
      storage.removeItem("persist:root");
      return {
        loading: true,
        allArtworks: {},
        categories: [],
        currentCategory: {},
        error: "",
      };

    default:
      return state;
  }
};

export default galleryReducer;
