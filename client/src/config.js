import axios from "axios";
export const configs = {
    development: 'http://localhost:5000',
    production:  'https://bucolic-figolla-438b28.netlify.app/'
  };
  

export const axiosInstance = axios.create({
  baseURL:configs[process.env.NODE_ENV]
})

