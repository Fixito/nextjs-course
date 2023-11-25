"use client";

import { deleteTask } from "@/utils/action";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-error btn-xs" disabled={pending}>
      {pending ? "Supression..." : "Supprimer"}
    </button>
  );
};

export default function DeleteForm({ id }: { id: string }) {
  const deleteTaskWithId = async (id: string) => {
    try {
      await deleteTask(id);
      toast.success("Tâche supprimée");
    } catch (error) {
      toast.error("Une erreur s'est produite");
    }
  };

  return (
    <form action={() => deleteTaskWithId(id)}>
      <SubmitBtn />
    </form>
  );
}
