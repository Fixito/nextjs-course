const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }

  const data = await response.json();
  return data;
};

export default async function page() {
  const data = await fetchDrinks();
  console.log(data);

  return <h1 className="text-5xl">Boissons</h1>;
}
