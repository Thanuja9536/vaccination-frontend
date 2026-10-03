import { useEffect, useState } from "react";
import axios from "axios";
import {
  useNavigate,
  useParams,
  Link
} from "react-router-dom";

function EditVaccinationCentre() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [availableSlots, setAvailableSlots] = useState("");
  const [status, setStatus] = useState("");

  // Get centre by ID
  const fetchCentre = async () => {

    try {

      const response = await axios.get(
        `http://localhost:5000/api/admin/centers/${id}`
      );

      console.log(response.data);

      if (response.data.success === true) {

        const centre = response.data.data;

        setAvailableSlots(centre.available_slots);
        setStatus(centre.status);

      }

    } catch (error) {

      console.log(error);

      alert("Unable to fetch vaccination centre");

    }
  };

  useEffect(() => {

    fetchCentre();

  }, [id]);

  // Update centre
  const handleUpdate = async (event) => {

    event.preventDefault();

    try {

      const response = await axios.put(
        `http://localhost:5000/api/admin/centers/${id}`,
        {
          availableSlots: Number(availableSlots),
          status: status
        }
      );

      console.log(response.data);

      alert("Vaccination centre updated successfully");

      navigate("/admin-dashboard");

    } catch (error) {

      console.log(error);

      alert("Unable to update vaccination centre");

    }
  };

  // Delete centre
  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vaccination centre?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      const response = await axios.delete(
        `http://localhost:5000/api/admin/centers/${id}`
      );

      console.log(response.data);

      alert("Vaccination centre deleted successfully");

      navigate("/admin-dashboard");

    } catch (error) {

      console.log(error);

      alert("Unable to delete vaccination centre");

    }
  };

  return (
    <div>

      <h1>Edit Vaccination Centre</h1>

      <p>
        Centre ID: {id}
      </p>

      <form onSubmit={handleUpdate}>

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
            onChange={(event) =>
              setStatus(event.target.value)
            }
          >

            <option value="ACTIVE">
              ACTIVE
            </option>

            <option value="INACTIVE">
              INACTIVE
            </option>

          </select>

        </div>

        <br />

        <button type="submit">
          Update Centre
        </button>

        <br />
        <br />

        <button
          type="button"
          onClick={handleDelete}
        >
          Delete Centre
        </button>

      </form>

      <br />

      <Link to="/admin-dashboard">
        Back to Dashboard
      </Link>

    </div>
  );
}

export default EditVaccinationCentre;