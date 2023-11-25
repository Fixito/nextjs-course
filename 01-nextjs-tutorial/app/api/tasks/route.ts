import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
}

export async function POST(request: Request) {
  const data = await request.json();
  const task = await db.task.create({ data: { content: data.content } });
  return Response.json({ data: task });
}
