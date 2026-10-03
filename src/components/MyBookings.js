import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setMessage("Please login first");
      return;
    }

    fetch(
      `http://localhost:5000/api/vaccinations/user/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBookings(data.data);
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend connection failed");
      });
  }, []);

  const handleCancel = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vaccinations/${id}`,
        {
          method: "DELETE"
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("Vaccination cancelled successfully");

        setBookings(
          bookings.filter(
            (booking) => booking.id !== id
          )
        );
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
      <h1>My Bookings</h1>

      <p>{message}</p>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id}>
            <h3>
              Booking ID: {booking.id}
            </h3>

            <p>
              Center: {booking.center_name}
            </p>

            <p>
              Address: {booking.address}
            </p>

            <p>
              City: {booking.city}
            </p>

            <p>
              Vaccine: {booking.vaccine_name}
            </p>

            <p>
              Date: {booking.vaccination_date}
            </p>

            <p>
              Status: {booking.status}
            </p>

            <Link
              to={`/booking-details/${booking.id}`}
            >
              <button>
                View Details
              </button>
            </Link>

            <button
              onClick={() =>
                handleCancel(booking.id)
              }
            >
              Cancel Vaccination
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;
