import axios from "axios";

// withCredentials is required so the browser sends/receives the
// backend's session cookie on every request.
const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
