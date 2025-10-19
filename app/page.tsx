import SessionButton from "@/app/components/SessionButton";
import SessionButton1 from "@/app/components/SessionButton1";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Teste de Sessão do Usuário</h1>
      <SessionButton />
      <SessionButton1 />
    </main>
  );
}
