import { tmdb } from "@/lib/apis/tmdb.api"

export const searchService = async (query: string) => {
  const res = await tmdb.search(query)
  return res
}