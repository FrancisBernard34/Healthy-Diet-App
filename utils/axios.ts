import axios from "axios";

const url =
  process.env.NODE_ENV === "production"
    ? "https://healthy-diet-app.vercel.app"
    : "http://localhost:3000";

export const api = axios.create({
  baseURL: url,
});
