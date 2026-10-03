import { Link, useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Welcome User</h2>

      <nav>
        <Link to="/search-centers">Search Centers</Link>{" | "}

        <Link to="/book-slot">Book Slot</Link>{" | "}

        <Link to="/profile">Profile</Link>{" | "}

        <Link to="/my-bookings">My Bookings</Link>

        <br />
        <br />

        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default UserDashboard;