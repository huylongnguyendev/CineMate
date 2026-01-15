"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IGenreForDetailItem } from "@/lib/types/db/common.type"
import { Clapperboard } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

export default function GenreTrigger({ genres }: { genres: IGenreForDetailItem[] }) {
  const searchParams = useSearchParams()
  const selected = searchParams.get("genre")

  const currentLabel = useMemo(() => {
    return genres.find(g => g.id.toString() === selected)?.name || "Thể loại"
  }, [selected, genres])

  return (
    <>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Clapperboard />
          {currentLabel}
        </Button>
      </DropdownMenuTrigger>
    </>
  )
}
