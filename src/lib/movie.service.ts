// services/movie.service.ts

import { tmdbService } from "./apis/tmdb.api"

export const MovieService = {
  // Hàm này sẽ được gọi trong SectionRaw
  getSectionData: async (type: string, param?: string) => {
    try {
      let response

      switch (type) {
        case "trending":
          response = await tmdbService.getTrending("all", (param as "day" | "week") || "day")
          break
        case "popular":
          response = await tmdbService.getMovies("popular")
          break
        case "top_rated":
          response = await tmdbService.getMovies("top_rated")
          break
        case "upcoming":
          response = await tmdbService.getMovies("upcoming")
          break
        default:
          return { results: [] }
      }

      if (!response.ok) throw new Error("Network response was not ok")
      
      const data = await response.json()
      return data // Trả về object chứa { results: [...] }
    } catch (error) {
      console.error("MovieService Error:", error)
      return { results: [] }
    }
  }
}