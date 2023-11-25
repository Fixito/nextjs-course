import prisma from "@/utils/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemple Prisma | Next.js Tutoriel",
};

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: { content: "Apprendre Next.js" },
  // });
  const alltasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  return alltasks;
};

export default async function page() {
  const tasks = await prismaHandlers();

  if (!tasks.length) {
    return (
      <div>
        <h1 className="text-5xl">Exemple Prisma</h1>
        <h2 className="mt-8 text-lg font-medium">Pas de tâches à montrer...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-5xl">Exemple Prisma</h1>
      {tasks.map((task) => {
        const { id, content } = task;
        return (
          <h2 key={id} className="py-2 text-xl">
            {content}😁
          </h2>
        );
      })}
    </div>
  );
}
