import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.success) {

        // Save logged-in user ID
        localStorage.setItem("userId", data.data.id);

        // Save user details
        localStorage.setItem(
          "user",
          JSON.stringify(data.data)
        );

        setMessage("Login successful!");

        // Go to User Dashboard
        navigate("/user-dashboard");

      } else {

        setMessage(data.message);

      }

    } catch (error) {

      console.error(error);

      setMessage("Backend connection failed");

    }
  };

  return (
    <div>

      <h2>User Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>{message}</p>

    </div>
  );
}

export default UserLogin;