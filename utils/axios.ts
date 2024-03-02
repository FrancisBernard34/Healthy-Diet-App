import axios from "axios";

export const api = axios.create({
  // change this to your server's URL
  baseURL: "http://localhost:3000",
});
