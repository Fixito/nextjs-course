export default function page({
  params,
}: {
  params: { ["sign-in"]: string[] };
}) {
  console.log(params);

  return <h1 className="text-5xl">S&apos;inscrire</h1>;
}
