import { imgURL } from "@/lib/apis/base.api"
import Image from "next/image"
import Link from "next/link"



export default function ContentItem({
  poster,
  alt,
  title,
  id
}: { poster: string, alt: string, title: string, id: number }) {
  return (
    <>
      <Link href={`/movies/${id}`} className="space-y-4 group">
        <div className="w-full h-40 overflow-hidden">
          <div className="relative size-full transitions group-hover:scale-105">
            <Image src={imgURL + poster} alt={alt} fill className="object-cover" />
          </div>
        </div>
        <h3 className="font-semibold truncate transitions group-hover:text-primary">{title}</h3>
      </Link>
    </>
  )
}
