export interface ISortItem {
  title: string
  value: string
  icon: React.ElementType
  type: "movie" | "tv" | "both"
}

export type SortType = ISortItem[]