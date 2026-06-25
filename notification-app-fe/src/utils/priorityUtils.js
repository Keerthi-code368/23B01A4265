const PRIORITY_SCORE = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(notificationList, limit = 10) {
  if (!Array.isArray(notificationList)) {
    return [];
  }

  const prioritized = [...notificationList];

  prioritized.sort((first, second) => {
    const firstWeight = PRIORITY_SCORE[first.Type] ?? 0;
    const secondWeight = PRIORITY_SCORE[second.Type] ?? 0;

    if (firstWeight !== secondWeight) {
      return secondWeight - firstWeight;
    }

    return (
      new Date(second.Timestamp).getTime() -
      new Date(first.Timestamp).getTime()
    );
  });

  return prioritized.slice(0, limit);
}