// apis/tmdb.service.ts
import { baseURL, getOptions } from "./base.api"

export const tmdbService = {
  /**
   * Lấy danh sách phim theo mục (Popular, Top Rated, v.v.)
   */
  getMovies: async (type: "popular" | "top_rated" | "upcoming" | "now_playing") => {
    const url = `${baseURL}/movie/${type}?language=vi-VN&page=1`
    const response = await fetch(url, getOptions("get"))
    return response // Trả về nguyên response để lớp Service bên trên xử lý .json() hoặc bắt lỗi
  },

  /**
   * Lấy phim hoặc TV Show đang xu hướng
   */
  getTrending: async (mediaType: "all" | "movie" | "tv" = "all", time: "day" | "week" = "day") => {
    const url = `${baseURL}/trending/${mediaType}/${time}?language=vi-VN`
    const response = await fetch(url, getOptions("get"))
    return response
  },

  /**
   * Tìm kiếm đa năng (Movie, TV, Person)
   */
  search: async (query: string) => {
    const url = `${baseURL}/search/multi?query=${encodeURIComponent(query)}&language=vi-VN`
    const response = await fetch(url, getOptions("get"))
    return response
  },

  /**
   * Lấy chi tiết một bộ phim hoặc TV Show
   */
  getDetails: async (id: string, type: "movie" | "tv") => {
    const url = `${baseURL}/${type}/${id}?language=vi-VN&append_to_response=videos,credits,similar`
    const response = await fetch(url, getOptions("get"))
    return response
  }
}