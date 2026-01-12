export interface ICommonJobItem {
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string

}

export interface ICastItem extends ICommonJobItem {
  cast_id: number
  character: string
  order: number

}

export interface ICrewItem extends ICommonJobItem {
  department: string
  job: string
}

export interface ICreditResponse {
  id: number
  cast: ICastItem[]
  crew: ICrewItem[]
}