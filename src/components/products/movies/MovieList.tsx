import Toast from "@/components/common/Toast"
import { movieService } from "@/lib/data/db/movie.service"
import { notFound } from "next/navigation"
import MovieItem from "./MovieItem"
import PaginationBar from "@/components/common/PaginationBar"
import { ISearchParams } from "@/lib/types/params.type"
import FilterBar from "@/components/filters/FilterBar"

export default async function MovieList({ searchParams }: { searchParams: Promise<ISearchParams> }) {
  const { page = "1", sort_by, year, country, genre } = await searchParams

  const sort = sort_by ? `&sort_by=${sort_by}` : ""
  const yearFilter = year ? `&primary_release_year=${year}` : ""
  const countryFilter = country ? `&with_origin_country=${country}` : ""
  const genreFilter = genre ? `&with_genres=${genre}` : ""
  const params = `&page=${page}${yearFilter}${countryFilter}${genreFilter}${sort}`

  const data = await movieService.getMany("movie", params)
  const list = typeof data !== "number" ? data.data : undefined

  if (!list || (list && list.results.length === 0)) return notFound()
  return (
    <>
      <Toast
        status={typeof data === "number" ? data : data.status}
        errorText="Lỗi khi tìm phim"
      />
      <FilterBar type="movie" />
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {
          list.results.map((item, index) => (
            <MovieItem key={item.id} item={item} index={index} />
          ))
        }
      </ul>
      <PaginationBar totalPage={list.total_pages} />
    </>
  )
}
