import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Page Non Trouvé</h2>
      <Link href="/" className="btn btn-accent mt-4">
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
