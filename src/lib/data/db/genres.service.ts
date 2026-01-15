import { tmdb } from "@/lib/apis/tmdb.api"
import { IGenreForDetailItem } from "@/lib/types/db/common.type"

export const genreService = {
  getGenres: async (type: "movie" | "tv") => {
    const res: { genres: IGenreForDetailItem[] } = await tmdb.genres(type)
    return res
  }
}