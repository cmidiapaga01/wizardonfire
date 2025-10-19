"use client";

import { useState, useEffect } from "react";

export function useSessionData1() {
  const [session, setSession] = useState({
    timeSpent: 0,
    clicks: 0,
    device: "unknown",
    userAgent: "",
    platform: "",
    language: "",
    online: true,
    screenWidth: 0,
    screenHeight: 0,
    viewportWidth: 0,
    viewportHeight: 0,
    cookiesEnabled: false,
    referrer: "",
  });

  useEffect(() => {
    const start = Date.now();

    const handleClick = () =>
      setSession((prev) => ({ ...prev, clicks: prev.clicks + 1 }));

    document.addEventListener("click", handleClick);

    const interval = setInterval(() => {
      setSession((prev) => ({
        ...prev,
        timeSpent: Date.now() - start,
        device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        online: navigator.onLine,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        cookiesEnabled: navigator.cookieEnabled,
        referrer: document.referrer,
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return session;
}
