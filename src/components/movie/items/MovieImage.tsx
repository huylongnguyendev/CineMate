import { imgURL } from "@/lib/apis/base.api"
import Image from "next/image"

interface MovieItemImage {
  image: string
  alt: string
  index: number
}

export default function MovieImage({image, alt, index}:MovieItemImage) {
  return (
    <>
      <div className="relative w-full h-114">
        <Image
          src={imgURL + image}
          alt={alt}
          fill
          priority={index < 4}
          className="object-cover"
        />
        <div className="absolute size-full bg-black/0 transitions group-hover:bg-black/50" />
      </div>
    </>
  )
}
