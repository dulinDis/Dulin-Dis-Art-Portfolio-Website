import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export default axios.create({
  // baseURL: "http://localhost:5000",

  baseURL: `${REACT_APP_API_URL}`,
});
