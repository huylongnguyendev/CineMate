import { SortType } from "@/lib/types/app/sort.type"
import { ArrowDown10, ArrowUp10, SortAsc, SortDesc } from "lucide-react"

export const sortList: SortType = [
  {
    title: "Điểm thấp đến cao",
    value: "vote_count.asc",
    type: "both",
    icon: ArrowUp10
  },
  {
    title: "Điểm cao đến thấp",
    value: "vote_count.desc",
    type: "both",
    icon: ArrowDown10
  },
  {
    title: "Năm sản xuất trước đến nay",
    value: "first_air_date.asc",
    type: "tv",
    icon: SortAsc
  },
  {
    title: "Năm sản xuất nay về trước",
    value: "first_air_date.desc",
    type: "tv",
    icon: SortDesc
  },
  {
    title: "Năm sản xuất trước đến nay",
    value: "primary_release_date.asc",
    type: "movie",
    icon: SortAsc
  },
  {
    title: "Năm sản xuất nay về trước",
    value: "primary_release_date.desc",
    type: "movie",
    icon: SortDesc
  },
]