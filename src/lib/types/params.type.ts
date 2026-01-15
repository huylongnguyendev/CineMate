export interface ISearchParams {
  page?: string
  sort_by?: string
  year?: string
  country?: string
  genre?: string
}

export interface IParams {
  params: Promise<{ id: string }>
}