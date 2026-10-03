import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  //data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //method
  const handleLogin = async (event) => {

    event.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username: username,
          password: password
        }
      );

      console.log(response.data);

      if (response.data.success === true) {
        //Login successful
        navigate("/admin-dashboard");

      } else {
        //login failed
        navigate("/admin-login-error");

      }

    } catch (error) {

      console.log(error);

      navigate("/admin-login-error");

    }
  };
  //presentation
  return (
    <div>

      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>

        <div>
          <label>Username: </label>

          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password: </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;