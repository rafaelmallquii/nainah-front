import Axios from "axios";

const LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

const api = Axios.create({
  baseURL: LOCAL_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
