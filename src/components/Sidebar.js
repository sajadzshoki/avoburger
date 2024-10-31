
import {  FaBars, FaMapMarkerAlt, FaHamburger, FaFileAlt,FaUser, FaEllipsisV } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";
import profilepic from "../utils/profilepic.jpg"
function Sidebar() {
  return (
    <aside className="w-64 h-screen  flex flex-col justify-between sticky top-0">
      {/* Logo and Search */}
      <div>
        <div className="flex items-center space-x-2 mb-8 p-4">
          <div className="text-3xl">🥑</div>
          <h1 className="text-xl font-semibold">avoburger</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 ">
            <SidebarLink icon={<FaBars />} label="Dashboard" />
          <SidebarLink icon={<FaFileAlt />} label="Orders" badge="12" />
          <SidebarLink icon={<FaHamburger />} label="Products" active />
          <SidebarLink icon={<FaMapMarkerAlt />} label="Restaurants" />
          <SidebarLink icon={<FaUser />} label="Drivers" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto p-4 flex flex-col ">
        {/* Daily Report Button */}
        <span className="text-sm mx-auto p-2 text-gray-700">
        Done for the day?
        </span>
        
        <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-lime-500 text-white text-sm px-4 py-2 rounded-lg w-full mb-6 hover:bg-green-600">
        <IoSend />
          Send daily report
        </button>

        {/* Profile */}
        <div className="flex items-center justify-evenly space-x-2 pt-4 border-t-2">
          <img
            src={profilepic}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          
            <p className="text-sm font-semibold">sajad shokraei</p>
         
          <FaEllipsisV />
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ icon, label, active, badge }) {
  return (
    <div
      className={`flex items-center space-x-2 p-4  cursor-pointer ${
        active ? 'border-r-4 border-green-500 bg-green-50' : ''
      } hover:bg-gray-200`}
    >
      <div className="text-xl">{icon}</div>
      <span className="flex-grow">{label}</span>
      {badge && (
        <span className="bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
          {badge}
        </span>
      )}
    </div>
  );
}

export default Sidebar;
