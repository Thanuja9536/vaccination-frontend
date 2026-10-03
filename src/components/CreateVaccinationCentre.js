import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateVaccinationCentre() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [vaccineName, setVaccineName] = useState("");
  const [availableSlots, setAvailableSlots] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/admin/centers",
        {
          name: name,
          address: address,
          city: city,
          state: state,
          pinCode: pinCode,
          contactNumber: contactNumber,
          vaccineName: vaccineName,
          availableSlots: Number(availableSlots),
          status: status
        }
      );

      console.log(response.data);

      if (response.data.success === true) {

        alert("Vaccination centre created successfully");

        // Go back to dashboard
        navigate("/admin-dashboard");

      }

    } catch (error) {

      console.log(error);

      alert("Unable to create vaccination centre");

    }
  };

  return (
    <div>

      <h1>Create Vaccination Centre</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Address: </label>

          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>City: </label>

          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>State: </label>

          <input
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Pin Code: </label>

          <input
            type="text"
            value={pinCode}
            onChange={(event) => setPinCode(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Contact Number: </label>

          <input
            type="text"
            value={contactNumber}
            onChange={(event) =>
              setContactNumber(event.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Vaccine Name: </label>

          <input
            type="text"
            value={vaccineName}
            onChange={(event) =>
              setVaccineName(event.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Available Slots: </label>

          <input
            type="number"
            value={availableSlots}
            onChange={(event) =>
              setAvailableSlots(event.target.value)
            }
          />
        </div>

        <br />

        <div>
          <label>Status: </label>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Create Centre
        </button>

      </form>

      <br />

      <Link to="/admin-dashboard">
        Back to Dashboard
      </Link>

    </div>
  );
}

export default CreateVaccinationCentre;