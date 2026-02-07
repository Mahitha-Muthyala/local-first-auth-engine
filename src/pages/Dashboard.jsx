import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { resources } from "../data/resources";
import ResourceList from "../components/ResourceList";
import { useAuthorizedResources } from "../hooks/useAuthorizedResources";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const authorizedResources = useAuthorizedResources(resources, user);

  return (
    <div>
      <h1>Resource Dashboard</h1>
      <h3>Logged in as: {user.role}</h3>

      <ResourceList
        resources={authorizedResources}
        userRole={user.role}
      />
    </div>
  );
}

export default Dashboard;
