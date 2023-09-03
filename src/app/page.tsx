import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  return await prisma.tasks.findMany()
}

async function HomePage() {
  const tasks = await loadTasks()
  return (


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 m-4">
      {
        tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))
      }
    </div>);
}

export default HomePage;