import React from "react";
import VideoBackground from "../src/components/videobackground.jsx";
// import Navigation from "../src/components/navigation.jsx";
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
      {/* <Navigation className="z-50" /> */}
    </>
  );
}

export default App;
