// services/api.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_PRIMARY_API_URL;
const SECONDARY_API_URL = process.env.NEXT_PUBLIC_SECONDARY_API_URL;

// Create axios instances with base URLs
const primaryRequest = axios.create({
  baseURL: API_URL,
});

const secondaryRequest = axios.create({
  baseURL: SECONDARY_API_URL,
});

// Use environment variable for the API key
secondaryRequest.interceptors.request.use((config) => {
  config.headers[
    "Authorization"
  ] = `Bearer ${process.env.NEXT_PUBLIC_SECONDARY_API_KEY}`;
  return config;
});

export { primaryRequest, secondaryRequest };
