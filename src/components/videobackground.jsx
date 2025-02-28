import React from "react";
import videoBg from "../assets/img/LTWbgVid.mp4";

const videobackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default videobackground;
