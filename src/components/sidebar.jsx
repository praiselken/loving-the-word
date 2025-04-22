import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChevronDoubleLeftIcon,
  BuildingStorefrontIcon,
  InformationCircleIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Sidebar Container - Fixed on Top of Video */}
      <div
        className={`fixed left-0 top-0 h-screen bg-black/20 text-white p-4 flex flex-col transition-all duration-300 backdrop-blur-lg ${
          isOpen ? "w-60" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <div className="mb-6">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-transparent hover:text-[#ff1d1d] transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 flex-1">
          <NavItem
            to="/"
            icon={<HomeIcon className="w-6 h-6" />}
            text="Home"
            isOpen={isOpen}
          />
          <NavItem
            to="/store"
            icon={<BuildingStorefrontIcon className="w-6 h-6" />}
            text="Store"
            isOpen={isOpen}
          />
          <NavItem
            to="/about"
            icon={<InformationCircleIcon className="w-6 h-6" />}
            text="About"
            isOpen={isOpen}
          />
          <NavItem
            to="/gallery"
            icon={<PhotoIcon className="w-6 h-6" />}
            text="Gallery"
            isOpen={isOpen}
          />
          {/* <NavItem
            to="/contactUs"
            icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />}
            text="Contact"
            isOpen={isOpen}
          /> */}
        </nav>
      </div>
    </>
  );
};

// Sidebar Item Component with NavLink
const NavItem = ({ to, icon, text, isOpen }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
          isActive
            ? "bg-[#ff1d1d]/50 !text-white"
            : "hover:bg-[#ff1d1d]/30 !text-white"
        }`
      }
    >
      {icon}
      <span
        className={`text-sm transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {text}
      </span>
    </NavLink>
  );
};

export default Sidebar;
