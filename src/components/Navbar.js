import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle,faUser, faShieldAlt, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar({ sidebarOpen, setSidebarOpen }) {

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfileDropdown = () => {
      setIsProfileOpen(!isProfileOpen);
    };
  

  return (
    <nav className="lg:hidden flex items-center justify-between p-6 bg-gray-900 text-white">
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">
        <FontAwesomeIcon icon={faBars} /> 
      </button>
      <div className="relative">
        <button onClick={toggleProfileDropdown} className="flex items-center">
          <FontAwesomeIcon icon={faUserCircle} className="text-3xl" />
          <span className="ml-2 hidden lg:block">Erica</span>
        </button>
        {isProfileOpen && (
           <div className="absolute right-0 mt-2 bg-gray-800 p-4 rounded-md shadow-lg z-10 w-48">
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
    </nav>
  );
}

export default Navbar;
