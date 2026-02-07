import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function loginAs(role) {
    setUser({ role });
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login</h2>

      <button onClick={() => loginAs("Viewer")}>Login as Viewer</button>
      <br />

      <button onClick={() => loginAs("Editor")}>Login as Editor</button>
      <br />

      <button onClick={() => loginAs("Admin")}>Login as Admin</button>
    </div>
  );
}

export default Login;
