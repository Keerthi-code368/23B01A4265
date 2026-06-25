import axios from "axios";
import ACCESS_TOKEN from "../config/auth";
import Log from "../services/logger";

const API_URL = "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications(params = {}) {
  try {
    const response = await axios.get(API_URL, {
      params,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    await Log(
      "frontend",
      "info",
      "api",
      "Notification list fetched successfully"
    );

    return response.data;
  } catch (err) {
    await Log(
      "frontend",
      "error",
      "api",
      err.response?.data?.message || "Unable to fetch notifications"
    );

    throw err;
  }
}