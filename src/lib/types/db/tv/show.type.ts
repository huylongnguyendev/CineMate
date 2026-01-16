import { ICommonDiscover, ICommonDiscoverItem } from "../common.type"


export interface IShowDiscoverItem  {
  first_air_date: string
  name: string
  origin_country: string[]
  original_name: string
}

export type ResultType = ICommonDiscoverItem & IShowDiscoverItem

export interface IShowResponse extends ICommonDiscover {
  results: ResultType[]
}

export interface IShowSectionResponse extends ICommonDiscover {
  dates?: {
    maximum: string
    minimum: string
  }
  results: ResultType[]
}