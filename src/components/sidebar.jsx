import { useState } from "react";
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
        className={`fixed left-0 top-0 h-screen bg-black/20 text-[#fffefe] p-4 flex flex-col transition-all duration-300 backdrop-blur-lg ${
          isOpen ? "w-60" : "w-16"
        }`}
      >
        {/* Toggle Button at the Top */}
        <div className=" mb-6">
          <button
            className="w-8 h-8 items-center justify-center rounded-sm hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 flex-1">
          <NavItem
            icon={<HomeIcon className="w-6 h-6" />}
            text="Home"
            isOpen={isOpen}
          />
          <NavItem
            icon={<BuildingStorefrontIcon className="w-6 h-6" />}
            text="Store"
            isOpen={isOpen}
          />
          <NavItem
            icon={<InformationCircleIcon className="w-6 h-6" />}
            text="About"
            isOpen={isOpen}
          />
          <NavItem
            icon={<PhotoIcon className="w-6 h-6" />}
            text="Galllery"
            isOpen={isOpen}
          />
          <NavItem
            icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />}
            text="Contact"
            isOpen={isOpen}
          />
        </nav>
      </div>
    </>
  );
};

// Sidebar Item Component
const NavItem = ({ icon, text, isOpen }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#ff1d1d]/30 cursor-pointer">
      {icon}
      <span
        className={`text-sm transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Sidebar;
