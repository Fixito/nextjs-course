"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

const TaskSchema = z.object({
  id: z.string().uuid(),
  content: z.string().min(5, {
    message: "Doit être composé de 5 caractères ou plus",
  }),
  completed: z.coerce.boolean(),
});

const CreateTask = TaskSchema.pick({ content: true });
const UpdateTask = TaskSchema;

// C'est temporaire jusqu'à ce que @types/react-dom soit mis à jour
export type State = {
  errors?: {
    content?: string[];
  };
  message?: string | null;
};

export const getAllTasks = async () => {
  try {
    const tasks = prisma.task.findMany({ orderBy: { createdAt: "desc" } });
    return tasks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest tasks.");
  }
};

export const createTask = async (_prevState: State, formData: FormData) => {
  // Valide les champs de formulaire avec Zod
  const validatedFields = CreateTask.safeParse({
    content: formData.get("content"),
  });

  // Si la validation du formulaire échoue, renvoit les erreurs rapidement. Sinon, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      // message: "Champs manquants. Échec de la création de la tâche.",
      message: "error",
    };
  }

  // Récupère les données à insérer dans la base de données
  const { content } = validatedFields.data;

  try {
    await prisma.task.create({ data: { content } });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const deleteTask = async (id: string) => {
  try {
    await prisma.task.delete({ where: { id } });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const getTask = async (id: string) => {
  try {
    const task = await prisma.task.findUnique({ where: { id } });
    return task;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch task data.");
  }
};

export const editTask = async (_prevState: State, formData: FormData) => {
  const data = Object.fromEntries(formData);
  const validationFields = UpdateTask.safeParse({
    id: data.id,
    content: data.content,
    completed: data.completed,
  });

  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
      message: "Champs manquants. Échec de la création de la tâche.",
    };
  }

  const { id, content, completed } = validationFields.data;

  try {
    await prisma.task.update({
      where: { id },
      data: { content, completed },
    });
  } catch (error) {
    return {
      message: "Database error: Failed to update task.",
    };
  }

  redirect("/tasks");
};
