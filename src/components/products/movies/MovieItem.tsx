import { ResultType } from "@/lib/types/db/movie.type"
import Link from "next/link"

export default function MovieItem({ item }: { item: ResultType }) {
  return (
    <>
      <Link href={`/movies/${item.id}`}>
        <h1>{item.title || item.original_title}</h1>
      </Link>
    </>
  )
}
