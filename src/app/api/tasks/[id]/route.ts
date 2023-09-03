import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {id: String}
}

export async function GET(request: NextRequest,{params}: Params) {
  const task = await prisma.tasks.findUnique({
    where : {
      id: Number(params.id),
    },
  })
  return NextResponse.json(task)
}

export async function PUT(request: NextRequest,{params}: Params) {
  const data = await request.json()
  const task = await prisma.tasks.update({
    where: {
      id: Number(params.id),
    },
    data: data
  })
  return NextResponse.json(task)
}

export async function DELETE(request: NextRequest,{params}: Params) {
  const task = await prisma.tasks.delete({
    where : {
      id: Number(params.id),
    },
  })
  return NextResponse.json(task)
}