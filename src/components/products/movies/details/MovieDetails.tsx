import Toast from "@/components/common/Toast"
import { movieService } from "@/lib/data/db/movie.service"
import { IParams } from "@/lib/types/params.type"
import { notFound } from "next/navigation"
import DetailTop from "./DetailTop"

export default async function MovieDetails({ params }: IParams) {
  const { id } = await params

  const data = await movieService.getOne("movie", id)
  if (!data || typeof data === "number") return notFound()
  return (
    <>
      <Toast
        status={typeof data === "number" ? data : data.status}
        errorText={"Lỗi khi tìm phim hoặc phim không tồn tại"}
      />
      <div className="flex max-md:flex-col gap-10">
        <DetailTop item={data.data} />
      </div>
    </>
  )
}
