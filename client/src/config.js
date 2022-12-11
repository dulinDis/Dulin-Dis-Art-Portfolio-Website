import axios from "axios";
export const configs = {
    // development: `http://localhost:5000`,
    // // production:  'https://bucolic-figolla-438b28.netlify.app/'
    // production:'http://localhost:5000'
    development: `${process.env.REACT_APP_API_URL}`,
    production:`${process.env.PUBLIC_URL}`,
    // TODO:put final url
  };
  

export const axiosInstance = axios.create({
  baseURL:configs[process.env.NODE_ENV]
})

