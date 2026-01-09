import { tmdb } from "@/lib/apis/tmdb.api"
import { IMovieResponse } from "../../types/db/movie.type"

export const movieService = {
  getMany: async (type: "movie" | "tv", params?: string) => {
    const paramsValue = params ? params : ""
    const res: {data: IMovieResponse, status: number} | number = await tmdb.discover.getMany(type, paramsValue)
    return res
  }
}