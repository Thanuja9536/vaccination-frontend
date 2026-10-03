import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import CreateVaccinationCentre from "./components/CreateVaccinationCentre";
import EditVaccinationCentre from "./components/EditVaccinationCentre";
import AdminLoginError from "./components/AdminLoginError";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import UserDashboard from "./components/UserDashboard";
import SearchCenters from "./components/SearchCenters";
import BookSlot from "./components/BookSlot";
import Profile from "./components/Profile";
import ShowAllUsers from "./components/ShowAllUsers";
import MyBookings from "./components/MyBookings";
import BookingDetails from "./components/BookingDetails";
import AdminVaccinations from "./components/AdminVaccinations";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-login-error" element={<AdminLoginError />} />
        <Route
          path="/create-vaccination-centre"
          element={<CreateVaccinationCentre />}
        />
        <Route
          path="/edit-vaccination-centre/:id"
          element={<EditVaccinationCentre />}
        />
        <Route path="/show-all-users" element={<ShowAllUsers />} />

        {/* User */}
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/search-centers" element={<SearchCenters />} />
        <Route path="/book-slot" element={<BookSlot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/booking-details/:id" element={<BookingDetails />} />
        <Route
          path="/admin-vaccinations"
          element={<AdminVaccinations />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;