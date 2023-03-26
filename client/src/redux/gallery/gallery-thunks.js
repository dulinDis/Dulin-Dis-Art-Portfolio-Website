// import { axiosInstance, configs } from "../../config";

// import axios from "axios";
import { convertGallery } from "../../utils/gallery-utils";
import {
  fetchGalleryFailure,
  fetchGalleryRequest,
  fetchGallerySuccess,
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
