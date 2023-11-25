import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Non Trouvé</h2>
      <p>Impossible de trouver la tâche demandée.</p>
      <Link href="/tasks" className="btn btn-accent mt-4">
        Revenir en arrière
      </Link>
    </main>
  );
}
