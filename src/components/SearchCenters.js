import { useState } from "react";

function SearchCenters() {
  const [pinCode, setPinCode] = useState("");
  const [centers, setCenters] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vaccinations/centers?pinCode=${pinCode}`
      );

      const data = await response.json();

      if (data.success) {
        setCenters(data.data);
        setMessage("");
      } else {
        setCenters([]);
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Backend connection failed");
    }
  };

  return (
    <div>
      <h1>Search Vaccination Centers</h1>

      <input
        type="text"
        placeholder="Enter PIN Code"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <p>{message}</p>

      {centers.map((center) => (
        <div key={center.id}>
          <h3>{center.name}</h3>
          <p>Address: {center.address}</p>
          <p>City: {center.city}</p>
          <p>PIN Code: {center.pin_code}</p>
          <p>Vaccine: {center.vaccine_name}</p>
          <p>Available Slots: {center.available_slots}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default SearchCenters;