import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Adjust the base URL as per your backend setup
});

export default axiosInstance;
