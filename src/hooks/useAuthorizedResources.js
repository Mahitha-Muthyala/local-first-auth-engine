const ROLE_POWER = {
  Viewer: 1,
  Editor: 2,
  Admin: 3
};

export function useAuthorizedResources(resources, user) {
  if (!user) return [];

  return resources.filter(
    resource =>
      ROLE_POWER[user.role] >= ROLE_POWER[resource.minRole]
  );
}
