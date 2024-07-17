import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const todos = await prisma.todo.findMany();
  return NextResponse.json({ todos });
}

export async function POST(request) {
  const { title, description } = await request.json();

  await prisma.todo.create({
    data: {
      title: title,
      description: description,
    },
  });

  return NextResponse.json({ msg: "Todo Created" });
}

export async function DELETE(request) {
 await prisma.user.delete


 

  return NextResponse.json({ msg: "Todo Created" });
}

