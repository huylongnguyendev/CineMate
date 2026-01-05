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
            <CarouselItem key={item.id} className="basis-1/5" >
              <ContentItem
                id={item.id}
                title={item.title || item.original_title}
                alt={item.title || item.original_title}
                poster={item.poster_path}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </>
  )
}
