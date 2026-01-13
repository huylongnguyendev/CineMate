import Stars from "@/components/common/Stars"
import { smallImgURL } from "@/lib/apis/base.api"
import { ResultType } from "@/lib/types/db/tv/show.type"
import Image from "next/image"
import Link from "next/link"

export default function ShowItem({ item, index }: { item: ResultType, index: number }) {
  return (
    <>
      <Link href={`/tv-shows/${item.id}`} className="space-y-2 group">
        <div className="relative w-full max-sm:h-100 h-80 rounded-md overflow-hidden">
          <div className="absolute size-0 bg-black/60 rounded-full transitions z-10 top-1/2 left-1/2 -translate-1/2 group-hover:size-full group-hover:rounded-none" />
          <Image
            src={smallImgURL + item.poster_path}
            alt={item.name || item.original_name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            priority={index < 12}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold truncate transitions group-hover:text-primary">{item.name || item.original_name}</h3>
          <Stars score={item.vote_average} />
        </div>
      </Link>
    </>
  )
}
