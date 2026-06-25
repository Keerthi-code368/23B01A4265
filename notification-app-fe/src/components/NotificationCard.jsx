import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

const chipColor = {
  Placement: "success",
  Result: "warning",
  Event: "primary",
};

export function NotificationCard({ notification }) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">
            {notification.Message}
          </Typography>

          <Chip
            label={notification.Type}
            color={chipColor[notification.Type]}
          />
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}