import Link from "next/link.js";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/action";

export default async function TaskList() {
  const tasks = await getAllTasks();

  if (!tasks.length) {
    return (
      <h2 className="mt-8 text-lg font-medium">Pas de tâches à faire...</h2>
    );
  }

  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        const { id, content, completed } = task;

        return (
          <li
            key={id}
            className="mb-4 flex items-center justify-between rounded-lg border border-base-300 px-6 py-4 shadow-lg"
          >
            <h2 className={`text-lg ${completed ? "line-through" : null}`}>
              {content}
            </h2>
            <div className="flex items-center gap-6">
              <Link href={`tasks/${id}`} className="btn btn-accent btn-xs">
                Éditer
              </Link>
              <DeleteForm id={id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
