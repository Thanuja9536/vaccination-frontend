import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowAllUsers() {

  const [users, setUsers] = useState([]);

  // Get all users
  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/admin/users"
      );

      console.log(response.data);

      if (response.data.success === true) {

        setUsers(response.data.data);

      }

    } catch (error) {

      console.log(error);

      alert("Unable to fetch users");

    }
  };


  // Call API when component loads
  useEffect(() => {

    fetchUsers();

  }, []);


  return (
    <div>

      <h1>Registered Users</h1>

      <hr />

      <table border="1">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Pin Code</th>
            <th>Registered Date</th>

          </tr>

        </thead>


        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>
                {user.id}
              </td>

              <td>
                {user.name}
              </td>

              <td>
                {user.email}
              </td>

              <td>
                {user.phone}
              </td>

              <td>
                {user.pin_code}
              </td>

              <td>
                {user.created_at}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <Link to="/admin-dashboard">
        Back to Admin Dashboard
      </Link>

    </div>
  );
}

export default ShowAllUsers;