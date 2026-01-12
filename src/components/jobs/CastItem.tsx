import { CarouselItem } from "../ui/carousel"
import Image from "next/image"
import { smallImgURL } from "@/lib/apis/base.api"
import { ICastItem } from "@/lib/types/db/movie/credit.type"

export default function CastItem({item}:{item: ICastItem}) {
  return (
    <>
      <CarouselItem className="md:basis-1/2 lg:basis-1/6">
        <div className="space-y-4">
          <div className="relative w-full h-80">
            <Image
              src={smallImgURL + item.profile_path}
              alt={item.name || item.original_name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">{item.name || item.original_name}</h3>
            <p className="text-sm text-muted-foreground">{item.character}</p>
          </div>
        </div>
      </CarouselItem>
    </>
  )
}
