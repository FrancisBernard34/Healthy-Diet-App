import axios from "axios";

export const api = axios.create({
  // change this to your server's URL
  // https://healthy-diet-app.vercel.app
  baseURL: "http://localhost:3000",
});
