import AnimateCarousel from "@/components/carousels/AnimateCarousel"
import { CarouselItem } from "@/components/ui/carousel"
import { sectionService } from "@/lib/data/db/section.service"
import { IMovieSectionResponse } from "@/lib/types/db/movie/movie.type"
import MovieSectionItem from "./MovieSectionItem"

export default async function TopicMovieList({ topic }: { topic: "now_playing" | "top_rated" | "upcoming" }) {
  const data: IMovieSectionResponse | [] = await sectionService.movie.getMovieList(topic)

  if (Array.isArray(data) || !("results" in data))
    return <p className="text-muted-foreground">Chưa có thông tin</p>

  return (
    <>
      <AnimateCarousel loop duration={30000}>
        {
          data.results.map(item => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <MovieSectionItem item={item} />
            </CarouselItem>
          ))
        }
      </AnimateCarousel>
    </>
  )
}
