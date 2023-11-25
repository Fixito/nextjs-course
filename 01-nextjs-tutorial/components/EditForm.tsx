"use client";

import { State, editTask } from "@/utils/action";
import { useFormState, useFormStatus } from "react-dom";

interface Task {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
}

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary btn-sm btn-block"
      disabled={pending}
    >
      {pending ? "Édition..." : "Éditer"}
    </button>
  );
};

const initialState: State = { message: null, errors: {} };

export default function EditForm({ task }: { task: Task }) {
  const { id, content, completed } = task;
  const [state, formAction] = useFormState(editTask, initialState);

  return (
    <form
      action={formAction}
      className="max-w-sm rounded-lg border border-base-300 p-12"
    >
      {/* id */}
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        name="content"
        defaultValue={content}
        required
        className="input input-bordered w-full"
      />
      {state.errors?.content &&
        state.errors.content.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      {/* completed */}
      <div className="form-control mb-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Complétée</span>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            defaultChecked={completed}
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
      </div>
      <SubmitBtn />
    </form>
  );
}
