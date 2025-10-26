import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api", // our backend base URL
  baseURL: "https://department-social-backend-code.onrender.com/api", // our backend base URL
});

export default api;
