import React, { useEffect, useState } from "react";

const InstagramNotice = () => {
  const [isInstagram, setIsInstagram] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    setIsInstagram(ua.includes("Instagram"));
  }, []);

  if (!isInstagram) return null;

  return (
    <div className="bg-yellow-100 text-yellow-800 p-4 text-center">
      ⚠️ You’re viewing this inside Instagram. Some features may not work
      perfectly.
      <br />
      For the best experience, open in Safari or Chrome.
    </div>
  );
};

export default InstagramNotice;
