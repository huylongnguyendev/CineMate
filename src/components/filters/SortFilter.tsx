"use client"

import { FilterX, Settings2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { ISortItem, SortType } from "@/lib/types/app/sort.type"
import { sortList } from "@/lib/data/app/sort.data"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SortFilter({ type }: Pick<ISortItem, "type">) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const getSearchParam = searchParams.get("sort_by")

  const data: SortType = sortList.filter(item => item.type === type || item.type === "both")

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value && value !== "all")
      params.set("sort_by", value)
    else params.delete("sort_by")

    router.push(`${pathName}?${params}`, { scroll: true })
  }

  const findSelected = data.find(item => item.value === getSearchParam)
  const sortSelected = findSelected ? findSelected.title : "Sắp xếp"

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Settings2 className="rotate-90" />
            <p>{sortSelected}</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSort("all")}>
            <FilterX />
            <p>Mặc định</p>
          </DropdownMenuItem>
          {
            data.map(item => (
              <DropdownMenuItem
                key={item.value}
                onClick={() => handleSort(item.value)}
              >
                <item.icon />
                {item.title}
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
