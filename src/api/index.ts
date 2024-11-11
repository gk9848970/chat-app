import axios from "axios";

export const api = axios.create({
  // Backend server
  baseURL: "http://localhost:3001",
});
