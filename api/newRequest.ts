// services/api.ts
import axios from "axios";

const API_URL = "https://67d5fbcf286fdac89bc0e550.mockapi.io/api";
const SECONDARY_API_URL = "https://api.mockapi.com/api";

// Create axios instances with base URLs
const primaryRequest = axios.create({
  baseURL: API_URL,
});

const secondaryRequest = axios.create({
  baseURL: SECONDARY_API_URL,
});

secondaryRequest.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer c81109a0d3be4fb1926034a01cce4eb5";
  return config;
});

export { primaryRequest, secondaryRequest };
