const ROLE_POWER = {
  Viewer: 1,
  Editor: 2,
  Admin: 3
};

function ResourceItem({ resource, userRole }) {
  const isLocked =
    ROLE_POWER[userRole] < ROLE_POWER[resource.minRole];

  return (
    <li>
      {resource.name}
      {isLocked && <span> 🔒 Locked</span>}
    </li>
  );
}

export default ResourceItem;
