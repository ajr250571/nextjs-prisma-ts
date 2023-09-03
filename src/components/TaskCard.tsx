"use client"

import { Tasks } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  task: Tasks
}

function TaskCard({ task }: Props) {
  const router = useRouter()
  return (
    <div className="card w-auto bg-base-200 shadow-xl hover:bg-base-300 hover:cursor-pointer"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`)
      }
      }
    >
      <div className="card-body">
        <h2 className="card-title text-info">{task.id}. {task.title}</h2>
        <p>{task.description}</p>
      </div>
    </div>
  );
}

export default TaskCard;