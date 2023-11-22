import Link from "next/link";

// Par défaut les composants sont des composants serveur
export default function page() {
  console.log("Page d'accueil");

  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">Tutoriel Next.js</h1>
      <Link href="/client" className="btn btn-accent">
        Commencer
      </Link>
    </div>
  );
}
