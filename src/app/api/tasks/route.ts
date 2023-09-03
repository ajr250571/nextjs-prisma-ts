import { prisma } from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  const tasks = await prisma.tasks.findMany()
  return NextResponse.json(tasks)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const task = await prisma.tasks.create({
    data: data
  })
  return NextResponse.json(task)
}