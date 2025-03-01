import React from "react";
import VideoBackground from "../src/components/videobackground.jsx";
import Sidebar from "./components/sidebar.jsx";
import "./index.css";

function App() {
  return (
    <>
      {/* Video Background Container */}
      <div className="relative w-full h-screen -z-10">
        <VideoBackground />
      </div>
      {/* Overlay  */}
      <div className="fixed inset-0 bg-black opacity-40 pointer-events-none"></div>
      <Sidebar className="z-50" />
    </>
  );
}

export default App;
