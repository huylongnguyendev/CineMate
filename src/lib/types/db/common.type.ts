export interface ICommonDiscoverItem {
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
}

export interface ICommonDiscover {
  page: number
  total_pages: number
  total_results: number
}