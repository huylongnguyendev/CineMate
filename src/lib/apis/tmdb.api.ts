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
  }
}