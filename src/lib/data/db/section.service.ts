import { tmdb } from "@/lib/apis/tmdb.api"

export const sectionService = {
  movie: {
    getTrending: async () => {
      const res = await tmdb.movieSections.getTrending()
      return res
    },
    getMovieList: async (topic: "now_playing" | "top_rated" | "upcoming") => {
      const res = await tmdb.movieSections.getMovieList(topic)
      return res
    },
  },
  show: {
    getTrending: async () => {
      const res = await tmdb.showSections.getTrending()
      return res
    },
    getShowList: async (topic: "airing_today" | "on_the_air" | "top_rated") => {
      const res = await tmdb.showSections.getShowList(topic)
      return res
    },
  }
}