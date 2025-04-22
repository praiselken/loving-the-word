import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoBackground from "./components/videobackground.jsx";
import Sidebar from "./components/sidebar.jsx";
import Home from "./pages/home.jsx";
import Store from "./pages/store.jsx";
import About from "./pages/about.jsx";
import Gallery from "./pages/gallery.jsx";
import InstagramNotice from "./components/instagramNotice.jsx";
// import Contact from "./pages/contact.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      {/* Video Background - Behind Everything */}
      <div className="fixed w-full h-screen -z-10">
        <VideoBackground />
      </div>

      {/* Overlay for Darkening Effect */}
      <div className="fixed inset-0 bg-black opacity-40 pointer-events-none"></div>

      {/* Sidebar - Fixed to the Left */}
      <Sidebar />

      {/* Page Content - Positioned to the Right */}
      <div className="ml-16 md:ml-60 p-6 text-white relative z-10">
        {/* ✅ Add this */}
        <InstagramNotice />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
