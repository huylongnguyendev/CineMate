"use client"

import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { IGenreForDetailItem } from "@/lib/types/db/common.type"
import { FilterX } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function GenreContent({ genres }: { genres: IGenreForDetailItem[] }) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all")
      params.delete("genre")
    else params.set("genre", value)
    params.delete("page")
    router.push(`${pathName}?${params}`, { scroll: true })
  }

  return (
    <>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleFilter("all")}>
          <FilterX />
          <p>Mặc định</p>
        </DropdownMenuItem>
        {
          genres.map(item => (
            <DropdownMenuItem key={item.id} onClick={() => handleFilter(item.id.toString())}>
              {item.name}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </>
  )
}
