import { useEffect, useState } from "react";

function AdminVaccinations() {
  const [vaccinations, setVaccinations] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/vaccinations")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setVaccinations(data.data);
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <div>
      <h1>All Vaccinations</h1>

      <p>{message}</p>

      {vaccinations.length === 0 ? (
        <p>No vaccinations found</p>
      ) : (
        vaccinations.map((vaccination) => (
          <div key={vaccination.id}>
            <h3>Vaccination ID: {vaccination.id}</h3>

            <p>User: {vaccination.user_name}</p>
            <p>Email: {vaccination.email}</p>
            <p>Phone: {vaccination.phone}</p>

            <p>Center: {vaccination.center_name}</p>
            <p>Address: {vaccination.address}</p>
            <p>City: {vaccination.city}</p>

            <p>Vaccine: {vaccination.vaccine_name}</p>
            <p>Date: {vaccination.vaccination_date}</p>
            <p>Status: {vaccination.status}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default AdminVaccinations;