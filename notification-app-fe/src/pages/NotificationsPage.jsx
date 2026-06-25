import { useMemo } from "react";
import {
  Alert,
  Badge,
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { NotificationCard } from "../components/NotificationCard";
import { useNotifications } from "../hooks/useNotifications";
import { getPriorityNotifications } from "../utils/priorityUtils";

export function NotificationsPage() {
  const { notifications, loading, error } = useNotifications();

  const priorityNotifications = useMemo(() => {
    return getPriorityNotifications(notifications, 10);
  }, [notifications]);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <Badge
          badgeContent={priorityNotifications.length}
          color="primary"
        >
          <NotificationsIcon />
        </Badge>

        <Typography variant="h4" fontWeight={700}>
          Priority Notifications
        </Typography>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      {loading && (
        <Box textAlign="center" mt={5}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {!loading &&
        !error &&
        priorityNotifications.length === 0 && (
          <Alert severity="info">
            No notifications available.
          </Alert>
        )}

      {!loading &&
        !error &&
        priorityNotifications.length > 0 && (
          <Stack spacing={2}>
            {priorityNotifications.map((item) => (
              <NotificationCard
                key={item.ID}
                notification={item}
              />
            ))}
          </Stack>
        )}
    </Box>
  );
}