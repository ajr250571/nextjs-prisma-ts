"use client"

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function NewPage({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm()
  const router = useRouter()

  useEffect(() => {
    if (params.id) {
      const data = axios.get(`/api/tasks/${params.id}`)
        .then(res => {
          setValue('title', res.data.title)
          setValue('description', res.data.description)
        })
    }
  }, [])


  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data)
    } else {
      await axios.post("/api/tasks", data)
    }
    router.push("/")
    router.refresh()
  })

  return (
    <section className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold">
          {params.id ? "Update" : "Create"} Task
        </h1>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered input-primary block w-full max-w-xs"
          {...register('title')}
        />
        <textarea
          className="textarea textarea-primary w-full mt-2"
          placeholder="Description"
          {...register('description')}
        ></textarea>
        <div className="flex justify-between">
          <button
            className="btn btn-secondary mt-2"
            type="submit"
          >
            {params.id ? "Update" : "Create"}
          </button>
          <button
            className="btn btn-warning mt-2"
            type="button"
            onClick={async () => {
              if (params.id) {
                if (confirm("Confirm Delete ?")) {
                  await axios.delete(`/api/tasks/${params.id}`)
                  router.push("/")
                  router.refresh()
                }
              } else {
                router.push("/")
                router.refresh()
              }
            }}
          >
            {params.id ? "Delete" : "Cancel"}
          </button>
        </div>
      </form>

    </section >
  );
}

export default NewPage;