import axios from "axios";

const serverUrl = "https://aircall-backend.onrender.com";
if (!serverUrl) {
  throw new Error("SERVER_URL not set");
}

export const client = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
  validateStatus: () => true,
});
