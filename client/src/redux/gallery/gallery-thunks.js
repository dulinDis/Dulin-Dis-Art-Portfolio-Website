import { convertGallery } from "../../utils/gallery-utils";
import {
  fetchGalleryFailure,
  fetchGalleryRequest,
  fetchGallerySuccess,
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryFailure,
  fetchArtworkRequest,
  fetchArtworkSuccess,
  fetchArtworkFailure,
} from "./gallery.actions";
import axios from "../../axiosConfig";

export const fetchGalleryAsync = () => async (dispatch) => {
  dispatch(fetchGalleryRequest());
  try {
    const galleryData = await axios.get(`/api/artwork`);
    // const galleryData = await axios.get(`${process.env.NODE_ENV}/api/artwork`);
    const convertedData = await convertGallery(galleryData.data);
    dispatch(fetchGallerySuccess(convertedData));
  } catch (error) {
    console.log("error", error);
    dispatch(fetchGalleryFailure(error));
  }
};

export const fetchCategoryAsync = (category) => async (dispatch) => {
  dispatch(fetchCategoryRequest());
  try {
    const galleryData = await axios.get(`/api/artwork/${category}`);
    const convertedData = await convertGallery(galleryData.data);
    dispatch(fetchCategorySuccess(convertedData));
  } catch (error) {
    dispatch(fetchCategoryFailure(error));
  }
};

export const fetchArtworkAsync = (artwork) => async (dispatch) => {
  dispatch(fetchArtworkRequest());
  try {
    const galleryData = await axios.get(
      `/api/artwork/${artwork.category}/${artwork}`
    );
    // const convertedData = await convertGallery(galleryData.data);
    dispatch(fetchArtworkSuccess(galleryData));
  } catch (error) {
    dispatch(fetchArtworkFailure(error));
  }
};
