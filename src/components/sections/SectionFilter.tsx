"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useRouter, useSearchParams } from "next/navigation"

export default function SectionFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTab = searchParams.get("trending") || "day"

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("trending", value)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      <div className="relative rounded-md">
        <div className={cn("absolute w-1/2 h-full bg-primary rounded-full transitions -z-10",
          currentTab === "day" ? "left-0" : "left-1/2")} />
        <Button
          variant="ghost"
          size="sm"
          className={cn("bg-transparent rounded-full", currentTab === "day" ? "text-primary-foreground" : "text-foreground")}
          onClick={() => handleFilter("day")}
        >
          Hôm nay
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn("bg-transparent rounded-full", currentTab === "week" ? "text-primary-foreground" : "text-foreground")}
          onClick={() => handleFilter("week")}
        >
          Tuần này
        </Button>
      </div>
    </>
  )
}
