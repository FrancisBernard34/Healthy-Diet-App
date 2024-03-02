import axios from "axios";

export const api = axios.create({
  // change this to your server's URL
  baseURL: "https://healthy-diet-app.vercel.app",
});
