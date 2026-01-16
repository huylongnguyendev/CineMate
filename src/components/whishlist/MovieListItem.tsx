import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { smallImgURL } from "@/lib/apis/base.api"

export default function MovieListItem({ item }: { item: IMovieDetailItem }) {
  return (
    <>
      <li className="flex items-center gap-10 p-4 rounded-md transitions hover:bg-card">
        <Input type="checkbox" className="size-4 cursor-pointer" />
        <Link
          href={`/movies/${item.id}`}
          className="flex gap-10"
        >
          <div className="relative w-12 h-18">
            <Image
              src={smallImgURL + item.poster_path}
              alt={item.title || item.original_title}
              fill
              priority
              className="object-cover rounded-md"
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="space-y-0.5">
              <h3>{item.title || item.original_title}</h3>
              <div className="flex items-center gap-1.5">
                <p>Thể loại:</p>
                {
                  item.genres.map((g, index) =>
                    <p
                      key={g.id}
                      className="text-muted-foreground text-sm"
                    >
                      {g.name}
                      {index < item.genres.length - 1 && ","}
                    </p>
                  )
                }
              </div>
            </div>
            <p>{item.release_date.slice(0, 4)}</p>
          </div>
        </Link>
      </li>
    </>
  )
}
