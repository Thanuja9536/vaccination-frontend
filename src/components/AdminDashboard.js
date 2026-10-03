import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Welcome Admin</h2>

      <nav>
        <Link to="/create-vaccination-centre">
          Create Vaccination Centre
        </Link>
        {" | "}

        <Link to="/show-all-users">
          Show All Users
        </Link>
        {" | "}

        <Link to="/edit-vaccination-centre/1">
          Edit Vaccination Centre
        </Link>
        {" | "}

        <Link to="/admin-vaccinations">
          View All Vaccinations
        </Link>
      </nav>
    </div>
  );
}

export default AdminDashboard;