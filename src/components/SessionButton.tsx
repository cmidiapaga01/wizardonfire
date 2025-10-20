"use client";

import { useSessionData } from "@/lib/session";

export default function SessionButton() {
  const { timeSpent, clicks, device } = useSessionData();

  const handleClick = () => {
    alert(
      `Tempo na página: ${Math.floor(timeSpent / 1000)}s\n` +
      `Total de cliques: ${clicks}\n` +
      `Dispositivo: ${device}`
    );
  };

  return (
    <button
      onClick={handleClick}
      className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Ver Sessão
    </button>
  );
}
