import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import Log from "../services/logger";

export function useNotifications(filters = {}) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotifications = async () => {
      setLoading(true);

      try {
        const response = await fetchNotifications(filters);

        const data = response.notifications || [];

        setNotifications(data);

        await Log(
          "frontend",
          "info",
          "hook",
          `Fetched ${data.length} notifications`
        );
      } catch (err) {
        setError("Unable to fetch notifications.");

        await Log(
          "frontend",
          "error",
          "hook",
          "Failed while loading notifications"
        );
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  return {
    notifications,
    loading,
    error,
  };
}