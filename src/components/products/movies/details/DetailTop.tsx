import { smallImgURL } from "@/lib/apis/base.api"
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import { cn, setColor } from "@/lib/utils"
import Image from "next/image"

export default function DetailTop({ item }: { item: IMovieDetailItem }) {
  const color = setColor(item.vote_average)

  return (
    <>
      <div className="w-full md:w-1/3 h-120 sm:h-150">
        <div className="relative w-full lg:w-2/3 h-120 sm:h-150 lg:h-100">
          <Image
            src={smallImgURL + item.poster_path}
            alt={item.title || item.original_title}
            fill
            priority
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="font-semibold">
          <h1 className="text-lg">{item.title || item.original_title}</h1>
          <p className="text-muted-foreground">{item.original_title}</p>
        </div>

        <div className="mt-8 space-y-1 flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold">Điểm:</p>
            <p className={cn("text-xl", color)}>{item.vote_average}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Năm sản xuất:</p>
            <p className="text-muted-foreground">{item.release_date.slice(0, 4)}</p>
          </div>
          <div className="flex md:items-baseline-last gap-0.5">
            <p className="font-semibold">Thể loại:</p>
            <div className="text-muted-foreground">
              {
                item.genres.map((genre, index) => (
                  <span key={genre.id}>{genre.name}{index < item.genres.length - 1 && ", "}</span>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
