import SortFilter from "./SortFilter"
import YearFilter from "./YearFilter"
import CountryFilter from "./country/CountryFilter"
import GenreFilter from "./genres/GenreFilter"

export default function FilterBar({ type }: { type: "movie" | "tv" }) {
  return (
    <>
      <div className="md:sticky top-18 py-4 flex items-center justify-end gap-2 bg-background z-50">
        <GenreFilter type={type} />
        <CountryFilter />
        <YearFilter />
        <SortFilter type={type} />
      </div>
    </>
  )
}
