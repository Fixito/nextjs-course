"use client"; //! Le composant Erreur doit être un composant Client

export default function Error({ error }: { error: Error }) {
  // return <div>Une erreur s&apos;est produite...</div>;
  return <div>{error.message}</div>;
}
