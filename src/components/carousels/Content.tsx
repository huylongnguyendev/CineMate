import { MovieService } from "@/lib/movie.service"
import { CarouselContent, CarouselItem } from "../ui/carousel"
import ContentItem from "./ContentItem"
import { IMovieItem } from "@/lib/types/movie.type"

export interface ContentProps {
  type: string
  param?: string
}

export default async function Content({ type, param }: ContentProps) {
  const data = await MovieService.getSectionData(type, param)

  if (!data) return

  return (
    <>
      <CarouselContent>
        {
          data.results.map((item: IMovieItem) => (
            <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5" >
              <ContentItem
                id={item.id}
                title={item.title || item.original_title || item.original_name || "Chưa cập nhật tên"}
                alt={item.title || item.original_title || item.original_name || "Chưa cập nhật tên"}
                poster={item.poster_path}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </>
  )
}
