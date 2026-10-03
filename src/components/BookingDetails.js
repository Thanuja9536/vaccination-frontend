import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookingDetails() {
  const { id } = useParams();

  const [booking, setBooking] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/vaccinations/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBooking(data.data);
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Backend connection failed");
      });
  }, [id]);

  if (message) {
    return <p>{message}</p>;
  }

  if (!booking) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Booking Details</h1>

      <p>Booking ID: {booking.id}</p>
      <p>Center: {booking.center_name}</p>
      <p>Address: {booking.address}</p>
      <p>City: {booking.city}</p>
      <p>PIN Code: {booking.pin_code}</p>
      <p>Vaccine: {booking.vaccine_name}</p>
      <p>Date: {booking.vaccination_date}</p>
      <p>Status: {booking.status}</p>

      <h3>User Details</h3>
      <p>Name: {booking.user_name}</p>
      <p>Email: {booking.email}</p>
      <p>Phone: {booking.phone}</p>
    </div>
  );
}

export default BookingDetails;