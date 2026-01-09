import { ICommonDiscover, ICommonDiscoverItem } from "./common.type"

export interface IMovieDiscoverItem {
  adult: boolean
  original_title: string
  title: string
  video: boolean
}

export type ResultType = ICommonDiscoverItem & IMovieDiscoverItem

export interface IMovieResponse extends ICommonDiscover {
  results: ResultType[]
}

// export interface IShowDiscoverItem {
//   first_air_date: string
//   name: string
//   origin_country: string[]
//   original_name: string
// }