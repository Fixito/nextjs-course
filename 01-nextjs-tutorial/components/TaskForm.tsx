"use client";

import { createTask, type State } from "@/utils/action";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Création en cours..." : "Créer une tâche"}
    </button>
  );
};

const initialState: State = { message: null, errors: {} };

export default function TaskForm() {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    // if (state.message === "error") {
    //   toast.error("Une erreur s'est produite");
    // }

    if (state.message === "success") {
      toast.success("Tâche créée");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          placeholder="Entrez une tâche"
          className="input join-item input-bordered w-full"
          required
        />
        <SubmitBtn />
      </div>
      {state.errors?.content &&
        state.errors.content.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </form>
  );
}
