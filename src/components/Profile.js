import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setMessage("Please login first");
      return;
    }

    fetch(`http://localhost:5000/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUser(data.data);
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend connection failed");
      });
  }, []);

  if (message) {
    return <p>{message}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>PIN Code: {user.pinCode}</p>
    </div>
  );
}

export default Profile;
