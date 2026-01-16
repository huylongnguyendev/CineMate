import { baseURL, getApiOptions } from "./base.api"

export const tmdb = {
  discover: {
    getMany: async (type: "movie" | "tv", params?: string) => {
      const res = await fetch(`${baseURL}discover/${type}?language=vi-VN${params}`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    }
  },
  details: {
    getOne: async (type: "movie" | "tv", id: string) => {
      const res = await fetch(`${baseURL}${type}/${id}?language=vi-VN`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    },
    getCredit: async (id: string) => {
      const res = await fetch(`${baseURL}movie/${id}/credits?language=vi-VN`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    },
    getReview: async (type: "movie" | "tv", params: string, id: string) => {
      const res = await fetch(`${baseURL}${type}/${id}/reviews?language=en-US${params}`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    },
    getRecomment: async (type: "movie" | "tv", id: string) => {
      const res = await fetch(`${baseURL}${type}/${id}/recommendations?language=vi-VN`, getApiOptions("GET"))

      if (!res.ok) return res.status

      const data = await res.json()
      return {
        data,
        status: res.status
      }
    }
  },
  video: async (type: "movie" | "tv", id: string) => {
    const res = await fetch(`${baseURL}${type}/${id}/videos?language=vi-VN`, getApiOptions("GET"))
    return await res.json()
  },
  configuration: {
    getCountries: async () => {
      const res = await fetch(`${baseURL}configuration/countries?language=vi-VN`, getApiOptions("GET"))
      return await res.json()
    },
  },
  genres: async (type: "movie" | "tv") => {
    const res = await fetch(`${baseURL}genre/${type}/list?language=vi-VN`, getApiOptions("GET"))
    return await res.json()
  },
  search: async (query: string) => {
    const res = await fetch(`${baseURL}search/multi?query=${query}&language=vi-VN&page=1`, getApiOptions("GET", 0, true))
    if (!res.ok) {
      return []
    }
    return await res.json()
  },
  movieSections: {
    getTrending: async () => {
      const res = await fetch(`${baseURL}trending/movie/day?language=vi-VN`, getApiOptions("GET"))
      if (!res.ok) return []
      return await res.json()
    },
    getMovieList: async (topic: "now_playing" | "top_rated" | "upcoming") => {
      const res = await fetch(`${baseURL}movie/${topic}?language=vi-VN`, getApiOptions("GET"))
      if (!res.ok) return []
      return await res.json()
    }
  },
  showSections: {
    getTrending: async () => {
      const res = await fetch(`${baseURL}trending/tv/day?language=vi-VN`, getApiOptions("GET"))
      if (!res.ok) return []
      return await res.json()
    },
    getShowList: async (topic: "airing_today" | "on_the_air" | "top_rated") => {
      const res = await fetch(`${baseURL}tv/${topic}?language=vi-VN`, getApiOptions("GET"))
      if (!res.ok) return []
      return await res.json()
    }
  },
}