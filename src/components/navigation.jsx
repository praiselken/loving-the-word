import React from "react";

const navigation = [
  { name: "Home", to: "/landing" },
  { name: "Store", to: "/store" },
  { name: "Gallery", to: "/gallery" },
  { name: "#LTWFAM", to: "/community" },
  { name: "Terms", to: "/terms" },
  { name: "Contact Us", to: "/contact_us" },
];

export default function navigation() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-transparent border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src="./assets/img/ltwlogo.jpg" classname="w-32" alt="LTW logo" />
          <button></button>
        </div>
      </nav>
    </aside>
  );
}
