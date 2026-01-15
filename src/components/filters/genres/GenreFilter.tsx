import { DropdownMenu } from "../../ui/dropdown-menu"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Clapperboard } from "lucide-react"
import GenreTrigger from "./GenreTrigger"
import { genreService } from "@/lib/data/db/genres.service"
import GenreContent from "./GenreContent"

export default async function GenreFilter({ type }: { type: "movie" | "tv" }) {
  "use cache"

  const data = await genreService.getGenres(type)

  return (
    <>
      <Suspense fallback={
        <Button variant="outline" className="opacity-50 pointer-events-none">
          <Clapperboard />
          <p>Thể loại</p>
        </Button>}>
        <DropdownMenu>
          <GenreTrigger genres={data.genres} />
          <GenreContent genres={data.genres} />
        </DropdownMenu>
      </Suspense>
    </>
  )
}
