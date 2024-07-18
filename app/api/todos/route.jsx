import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    await prisma.todo.create({
      data: {
        title: title,
        description: description,
      },
    });

    return NextResponse.json({ msg: "Todo Created" });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "Todo Deleted" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { id, isCompleted } = await request.json();

    // Validate the received data
    if (typeof id !== "number" || typeof isCompleted !== "boolean") {
      throw new Error("Invalid data format");
    }

    const updatedTodo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        isCompleted: !isCompleted,
      },
    });

    return NextResponse.json({ msg: "Todo Updated", updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}
