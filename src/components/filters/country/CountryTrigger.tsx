"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CountryType } from "@/lib/types/db/country.type"
import { Globe } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function CountryTrigger({ countries }: { countries: CountryType }) {
  const searchParams = useSearchParams()
  const selected = searchParams.get("country")

  const currentLabel = useMemo(() => {
    return countries.find(c => c.iso_3166_1 === selected)?.native_name || "Quốc gia"
  }, [selected, countries])
  
  return (
    <>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Globe />
          {currentLabel}
        </Button>
      </DropdownMenuTrigger>
    </>
  )
}
