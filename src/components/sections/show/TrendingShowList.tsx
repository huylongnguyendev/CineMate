import AnimateCarousel from "@/components/carousels/AnimateCarousel"
import { CarouselItem } from "@/components/ui/carousel"
import { sectionService } from "@/lib/data/db/section.service"
import { IShowSectionResponse } from "@/lib/types/db/tv/show.type"
import ShowSectionItem from "./ShowSectionItem"

export default async function TrendingShowList() {
  const data: IShowSectionResponse = await sectionService.show.getTrending()

  if (Array.isArray(data) && data.length === 0)
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
              <ShowSectionItem item={item} />
            </CarouselItem>
          ))
        }
      </AnimateCarousel>
    </>
  )
}
