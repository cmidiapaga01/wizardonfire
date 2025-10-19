"use client"; // porque usa APIs do browser

import { useState, useEffect } from "react";

export function useSessionData() {
  const [timeSpent, setTimeSpent] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [device, setDevice] = useState("unknown");

  useEffect(() => {
    const start = Date.now();

    // Detecta dispositivo
    setDevice(/Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop");

    // Incrementa clicks
    const handleClick = () => setClicks((prev) => prev + 1);
    document.addEventListener("click", handleClick);

    // Atualiza tempo a cada segundo
    const interval = setInterval(() => setTimeSpent(Date.now() - start), 1000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Retorna os dados atuais da sessão
  return { timeSpent, clicks, device };
}
