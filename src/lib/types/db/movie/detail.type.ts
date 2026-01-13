import { ICommonDetail} from "../common.type"

export interface IMovieDetailItem extends ICommonDetail {
  belongs_to_collection: string
  budget: number
  imdb_id: string
  original_title: string
  release_date: string
  revenue: number
  runtime: number
  title: string
  video: boolean

}