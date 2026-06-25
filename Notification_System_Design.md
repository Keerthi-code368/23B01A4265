# Stage 1 – Priority Notification System

## Objective

Display the Top 10 unread notifications based on notification priority and recency.

## Priority Strategy

Each notification is assigned a priority score.

| Notification | Weight |
|--------------|--------|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

Notifications are first sorted by priority weight in descending order.

If two notifications belong to the same category, they are sorted by timestamp in descending order so that the newest notification appears first.

Finally, only the first 10 notifications are displayed.

## Algorithm

1. Fetch notifications from the Notification API.
2. Assign weights according to notification type.
3. Sort by:
   - Weight (Descending)
   - Timestamp (Descending)
4. Return the first 10 notifications.

## Time Complexity

Sorting requires:

```
O(n log n)
```

Selecting Top 10:

```
O(10)
```

Overall:

```
O(n log n)
```

## Handling Incoming Notifications

For continuous incoming notifications, an efficient approach is maintaining a Min Heap of size 10.

When a new notification arrives:

- Compare its priority with the minimum element.
- Replace the minimum element if the new notification has higher priority.
- Heap operations require:

```
O(log 10)
```

This avoids sorting the entire notification list repeatedly.