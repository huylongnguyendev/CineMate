import { movieService } from "@/lib/data/db/movie.service"
import StaticCarousel from "../carousels/StaticCarousel"
import Heading from "../common/Heading"
import CastItem from "./CastItem"
import CrewItem from "./CrewItem"

export default async function JobsListCarousel({ id }: { id: number }) {
  const data = await movieService.getCredit(id.toString())

  return (
    <>
      <div className="space-y-10">
        <Heading>Diễn viên</Heading>
        <StaticCarousel>
          {
            typeof data !== "number" && data.data.cast.length > 0 && data.data.cast.map(item => (
              <CastItem key={item.cast_id} item={item} />
            ))
          }
        </StaticCarousel>
      </div>
      <div className="space-y-10">
        <Heading>Crew</Heading>
        <StaticCarousel>
          {
            typeof data !== "number" && data.data.crew.length > 0 && data.data.crew.map(item => (
              <CrewItem key={item.credit_id} item={item} />
            ))
          }
        </StaticCarousel>
      </div>
    </>
  )
}
