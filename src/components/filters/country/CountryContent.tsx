"use client"

import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { CountryType } from "@/lib/types/db/country.type"
import { FilterX } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function CountryContent({ countries }: { countries: CountryType }) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all")
      params.delete("country")
    else params.set("country", value)
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
          countries.map(item => (
            <DropdownMenuItem key={item.iso_3166_1} onClick={() => handleFilter(item.iso_3166_1)}>
              {item.native_name}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </>
  )
}
