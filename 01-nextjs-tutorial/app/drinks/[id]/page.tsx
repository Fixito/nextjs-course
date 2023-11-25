import { Metadata } from "next";
import Image from "next/image.js";
import Link from "next/link";
import { notFound } from "next/navigation";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Lit les paramètres de la route
  const id = params.id;

  // Récupère des données
  const { drinks } = await await fetch(`${url}${id}`).then((res) => res.json());
  const drink = drinks ? drinks[0] : null;

  return {
    title: drink?.strDrink,
  };
}

const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetcha drink");
  }

  const data = await res.json();
  return data;
};

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getSingleDrink(id);

  if (!data.drinks) {
    console.log(data);
    notFound();
  }

  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-12 mt-8">
        Retourner aux boissons
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="mb-4 h-48 w-48 rounded-lg shadow-lg"
        alt={title}
        priority
      />
      <h1 className="mb-8 text-4xl">{title}</h1>
    </div>
  );
}
