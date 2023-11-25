"use client";

import { createTask, type State } from "@/utils/action";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // if (state.message === "error") {
    //   toast.error("Une erreur s'est produite");
    // }

    if (state.message === "success") {
      formRef.current?.reset();
      toast.success("Tâche créée");
    }
  }, [state]);

  return (
    <form action={formAction} ref={formRef}>
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
