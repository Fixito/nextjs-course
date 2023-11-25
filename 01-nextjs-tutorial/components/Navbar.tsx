import Link from "next/link.js";

const links = [
  { id: 1, label: "client", href: "/client" },
  { id: 2, label: "boissons", href: "/drinks" },
  { id: 3, label: "prisma", href: "/prisma-example" },
  { id: 4, label: "tâches", href: "/tasks" },
];

export default function Navbar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar mx-auto max-w-6xl flex-col px-8 sm:flex-row">
        <Link href="/" className="btn btn-ghost text-xl">
          Tutoriel Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            const { id, label, href } = link;
            return (
              <li key={id}>
                <Link href={href} className="capitalize">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
