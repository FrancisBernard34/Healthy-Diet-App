import axios from "axios";

export const api = axios.create({
  // change this to your server's URL
  baseURL: "https://healthy-diet-api.vercel.app",
});
