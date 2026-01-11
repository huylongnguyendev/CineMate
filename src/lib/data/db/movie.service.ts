import { tmdb } from "@/lib/apis/tmdb.api"
import { IMovieResponse } from "../../types/db/movie/movie.type"
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"

export const movieService = {
  getMany: async (type: "movie" | "tv", params?: string) => {
    const paramsValue = params ? params : ""
    const res: { data: IMovieResponse, status: number } | number = await tmdb.discover.getMany(type, paramsValue)
    return res
  },
  getOne: async (type: "movie" | "tv", id: string) => {
    const res: { data: IMovieDetailItem, status: number } | number = await tmdb.details.getOne(type, id)
    return res
  }
}