import ResourceItem from "./ResourceItem";

function ResourceList({ resources, userRole }) {
  return (
    <ul>
      {resources.map(resource => (
        <ResourceItem
          key={resource.id}
          resource={resource}
          userRole={userRole}
        />
      ))}
    </ul>
  );
}

export default ResourceList;
