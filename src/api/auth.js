import apiClient from "./client";

/**
 * POST /api/auth/login
 * body: { username, password }
 * expected response body: { username, name, role }
 * The backend is expected to set the session cookie itself
 * (e.g. via Set-Cookie on this response).
 */
export async function loginRequest(username, password) {
  const { data } = await apiClient.post("/auth/login", { username, password });
  return data;
}

/**
 * POST /api/auth/logout
 * Expected to clear/expire the session cookie.
 */
export async function logoutRequest() {
  await apiClient.post("/auth/logout");
}

/**
 * GET /api/auth/me
 * Used on app load / refresh to restore the session from the cookie.
 * Expected response body: { username, name, role }
 * NOTE: if your backend doesn't have this endpoint yet, tell me and
 * I'll switch the app to store the user in memory only (meaning a
 * page refresh would require logging in again).
 */
export async function meRequest() {
  const { data } = await apiClient.get("/auth/me");
  return data;
}
