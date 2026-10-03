import { useState } from "react";

function BookSlot() {
  const [userId, setUserId] = useState("");
  const [vaccinationDate, setVaccinationDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/vaccinations/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId,
            vaccinationDate
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("Vaccination booked successfully!");
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
      <h1>Book Vaccination Slot</h1>

      <form onSubmit={handleBooking}>
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <br /><br />

        <input
          type="datetime-local"
          value={vaccinationDate}
          onChange={(e) => setVaccinationDate(e.target.value)}
        />

        <br /><br />

        <button type="submit">Book Slot</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default BookSlot;