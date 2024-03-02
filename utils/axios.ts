import axios from "axios";

export const api = axios.create({
  baseURL: "https://healthy-diet-app.vercel.app",
});
