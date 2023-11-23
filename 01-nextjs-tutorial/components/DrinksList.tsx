import Image from "next/image.js";
import Link from "next/link.js";

export default function DrinksList({ drinks }: { drinks: any }) {
  return (
    <ul className="mt-6 grid gap-6 sm:grid-cols-2">
      {drinks.map((drink: any) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;

        return (
          <li key={idDrink}>
            <Link href={`/drinks/${idDrink}`} className="text-xl font-medium">
              <div className="relative mb-4 h-48">
                <Image
                  src={strDrinkThumb}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  alt={strDrink}
                  className="rounded-md object-cover"
                />
              </div>
              {strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
