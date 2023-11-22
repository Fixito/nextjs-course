// Pour utiliser les composants client, il faut utiliser la directive "use client" tout en haut du fichier
"use client";

import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">Compteur</h1>
      <p>Tu as cliqué {count} fois.</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Clique moi
      </button>
    </div>
  );
}
