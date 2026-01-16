import Image from "next/image"
import Link from "next/link"
import { smallImgURL } from "@/lib/apis/base.api"
import { ResultType } from "@/lib/types/db/movie/movie.type"

export default function MovieSectionItem({ item }: { item: ResultType }) {
  return (
    <>
      <Link
        href={`/movies/${item.id}`}
        className="block bg-card rounded-md p-4 space-y-2 group"
      >
        <div className="relative w-full h-40">
          <div
            className="absolute size-full z-10 bg-black/0 transitions group-hover:bg-black/50"
          />
          <Image
            src={smallImgURL + item.poster_path}
            alt={item.title || item.original_title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="font-semibold text-card-foreground truncate transitions group-hover:text-primary">
          {item.title || item.original_title}
        </h3>
        <p className="text-sm text-muted-foreground">{item.release_date.slice(0, 4)}</p>
      </Link>
    </>
  )
}
