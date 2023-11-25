import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tâches | Next.js Tutoriel",
};

export default function page() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
}
