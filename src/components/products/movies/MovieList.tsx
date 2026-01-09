import Toast from "@/components/common/Toast"
import { movieService } from "@/lib/data/db/movie.service"
import { notFound } from "next/navigation"

export default async function MovieList() {
  const data = await movieService.getMany("movie")
  const list = typeof data !== "number" ? data.data : undefined

  if (!list || (list && list.results.length === 0)) return notFound()
  return (
    <>
      <Toast
        status={typeof data === "number" ? data : data.status}
        errorText="Lỗi khi tìm phim"
      />
      <ul className="grid grid-cols-6 gap-5">
        {

        }
      </ul>
    </>
  )
}
