
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import MovieListItem from "./MovieListItem"

export default function MoviseList({ listMovie }: { listMovie: IMovieDetailItem[] }) {


  return (
    <>
      <ul className="h-140 overflow-y-scroll rounded-md">
        {
          listMovie.map(item => (
            <MovieListItem key={item.id} item={item} />
          ))
        }
      </ul>
    </>
  )
}
