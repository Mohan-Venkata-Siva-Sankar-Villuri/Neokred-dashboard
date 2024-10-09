import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faUser,
  faShieldAlt,
  faCommentDots,
  faSignOutAlt,
  faTicketAlt,
  faCog,
  faChevronDown,
  faEye,
  faQuestionCircle,
  faHistory,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div
      className={`fixed lg:static bg-black text-white w-64 h-full p-4 flex flex-col justify-between transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform lg:translate-x-0`}
    >
      <div>
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEye} className="text-xl mr-2" />
            <h1 className="text-m">Neo UI</h1>
          </div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <nav className="mb-8">
          <ul>
            <li className="flex items-center  text-m mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faHome} className="mr-4" /> Home
            </li>
            <li className="flex items-center  text-m mb-4 cursor-pointer ">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-4" /> Events
            </li>
            <li className="flex items-center  text-m mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faTicketAlt} className="mr-4" /> Orders
            </li>
            <li className="flex items-center  text-m mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
            </li>
          </ul>
        </nav>
        <div className="mb-8">
          <h3 className="text-gray-400 uppercase mb-4 text-sm">
            Upcoming Events
          </h3>
          <ul>
            <li className="mb-4">Bear Hug: Live in Concert</li>
            <li className="mb-4">Six Fingers — DJ Set</li>
            <li className="mb-4">We All Look The Same</li>
            <li className="mb-4">Viking People</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mb-8">
          <ul>
            <li className="flex items-center cursor-pointer mb-4">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-4" />{" "}
              Support
            </li>
            <li className="flex cursor-pointer items-center">
              <FontAwesomeIcon icon={faHistory} className="mr-4" /> Changelog
            </li>
          </ul>
        </div>
        <div className="relative hidden lg:block">
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center w-full p-2"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full mr-4"
            />
            <div className="flex flex-col items-start">
              <p>Erica</p>
              <p className="text-sm text-gray-400">erica@example.com</p>
            </div>
            <FontAwesomeIcon
              icon={isProfileDropdownOpen ? faChevronUp : faChevronDown}
              className="ml-auto"
            />
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute  bottom-full mb-2 left-0 bg-gray-800 p-4 rounded-md shadow-lg z-10 w-48">
              <ul>
                <li className="py-2 hover:bg-gray-700 rounded-lg cursor-pointer p-3 flex items-center justify-space-between">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  My account
                </li>
                <li className="py-2 hover:bg-gray-700 rounded-lg cursor-pointer p-3 flex items-center justify-space-between">
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                  Privacy policy
                </li>
                <li className="py-2 hover:bg-gray-700 rounded-lg cursor-pointer p-3 flex items-center justify-space-between">
                  <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
                  Share feedback
                </li>
                <li className="py-2 hover:bg-gray-700 rounded-lg cursor-pointer p-3 flex items-center justify-space-between">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
