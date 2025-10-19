"use client";

import { useSessionData1 } from "@/lib/session1";

export default function SessionButton1() {
  const session = useSessionData1();

  const handleClick = () => {
    alert(JSON.stringify(session, null, 2));
  };

  return (
    <button
      onClick={handleClick}
      className="p-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Ver Sessão Completa 1
    </button>
  );
}
