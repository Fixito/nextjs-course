import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/action";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Éditer la tâche",
};

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const task = await getTask(id);

  if (!task) {
    notFound();
  }

  return (
    <main>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Retourner aux tâches
        </Link>
      </div>
      <EditForm task={task} />
    </main>
  );
}
