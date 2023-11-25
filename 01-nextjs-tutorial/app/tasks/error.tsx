"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Il est possible d'enregistrer l'erreur auprès d'un service de signalement d'erreurs.
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Une erreur s&apos;est produite !</h2>
      <button
        className="btn btn-accent mt-4"
        onClick={
          // Tenter de récupérer les tâches en essayant un nouveau rendu.
          () => reset()
        }
      >
        Réessayez
      </button>
    </main>
  );
}
