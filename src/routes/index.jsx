import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Home from "../pages";
import Dashboard from "../pages/dashboard/Dashboard";
import Services from "../pages/dashboard/Services";
import Profile from "../pages/dashboard/Profile";
import Schedule from "../pages/dashboard/Schedule";
import Payment from "../pages/dashboard/Payment";
import PageNotFound from "../pages/PageNotFound";
import AllMentors from "../pages/AllMentors";
import Bookings from "../pages/dashboard/Bookings";
import MentorDetails from "../pages/MentorDetails";
import Booking from "../pages/Booking";
import SuccessPage from "../pages/SuccessPage";
import BookingPage from "../pages/dashboard/BookingPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    isProtected: false,
  },
  {
    path: "/signup/:role",
    element: <SignUp />,
    isProtected: false,
  },
  {
    path: "/signin",
    element: <SignIn />,
    isProtected: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    isProtected: true,
  },
  {
    path: "/dashboard/services",
    element: <Services />,
    isProtected: true,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
    isProtected: true,
  },
  {
    path: "/dashboard/schedule",
    element: <Schedule />,
    isProtected: true,
  },
  {
    path: "/dashboard/payment",
    element: <Payment />,
    isProtected: true,
  },
  {
    path: "/dashboard/bookings",
    element: <Bookings />,
    isProtected: true,
  },
  {
    path: "/mentors",
    element: <AllMentors />,
    isProtected: false,
  },
  {
    path: "/mentor/:username",
    element: <MentorDetails />,
    isProtected: false,
  },
  {
    path: "/mentor/:username/:id",
    element: <Booking />,
    isProtected: true,
  },
  {
    path: "/success",
    element: <SuccessPage />,
    isProtected: true,
  },
  {
    path: "/user-bookings",
    element: <BookingPage />,
    isProtected: true,
  },
  {
    path: "*",
    element: <PageNotFound />,
    isProtected: false,
  },
];

export default routes;
