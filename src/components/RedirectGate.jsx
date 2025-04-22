// components/RedirectGate.jsx
import { useEffect, useState } from "react";

const isInstagramBrowser = () => {
  const ua = navigator.userAgent || "";
  return ua.includes("Instagram");
};

const safeRedirect = (url) => {
  try {
    const newWindow = window.open(url, "_blank");
    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === "undefined"
    ) {
      throw new Error("Popup blocked or unsupported");
    }
  } catch (e) {
    window.location.href = url; // fallback
  }
};

export default function RedirectGate({ children }) {
  const [shouldRenderApp, setShouldRenderApp] = useState(false);
  const redirectUrl = "https://lovingtheword-ltw.com"; // Replace with your actual destination

  useEffect(() => {
    if (isInstagramBrowser()) {
      console.log("👀 Running inside Instagram in-app browser");
      window.location.href = redirectUrl;
    } else {
      safeRedirect(redirectUrl);
    }

    // If not redirecting (e.g., fallback or test case), still show app
    // setShouldRenderApp(true); // Uncomment this if you want to skip redirect for testing
  }, []);

  return shouldRenderApp ? (
    children
  ) : (
    <div className="text-white p-10">🔄 Redirecting...</div>
  );
}
