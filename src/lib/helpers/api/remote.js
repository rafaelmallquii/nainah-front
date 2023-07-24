import Axios from "axios";

const REMOTE_URL = process.env.NEXT_PUBLIC_REMOTE_URL;

const api = Axios.create({
  baseURL: REMOTE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
