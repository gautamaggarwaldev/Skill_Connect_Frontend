import useUserStore from "../store/user";
import usericon from "../assets/usericon.svg";
import addicon from "../assets/addicon.svg";
import boxicon from "../assets/boxicon.svg";
import rectangleicon from "../assets/rectangle.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user } = useUserStore();

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r">
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded"
          src={user.photoUrl || `https://ui-avatars.com/api?name=${user?.name}`}
          alt={`${user?.name}'s avatar`}
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800">{user?.name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            {usericon}
            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <NavLink
            to="/dashboard/services"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            {addicon}
            <span className="mx-4 font-medium">Services</span>
          </NavLink>
          <NavLink
            to="/dashboard/schedule"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            {boxicon}
            <span className="mx-4 font-medium">Schedule</span>
          </NavLink>
          <NavLink
            to="/dashboard/payment"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            {rectangleicon}
            <span className="mx-4 font-medium">Payment</span>
          </NavLink>
          <NavLink
            to="/dashboard/bookings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 ${
                isActive ? "bg-gray-100 text-gray-700" : "text-gray-600"
              } transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700`
            }
          >
            {rectangleicon}
            <span className="mx-4 font-medium">Bookings</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
