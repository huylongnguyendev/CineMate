"use client"

import { CalendarDays, FilterX } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function YearFilter() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  // Lấy năm hiện tại từ hệ thống
  const currentYear = new Date().getFullYear()
  // Tạo mảng năm từ hiện tại lùi về trước (ví dụ 10 năm)
  const years = Array.from({ length: 15 }, (_, i) => (currentYear - i).toString())

  const selectedYear = searchParams.get("year")

  function handleYearChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())

    if (value && value !== "all") {
      params.set("year", value) // Lưu vào URL để logic lấy API bên Server Component đọc được
    } else {
      params.delete("year")
    }

    router.push(`${pathName}?${params}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <CalendarDays />
          <p>{selectedYear ? `Năm ${selectedYear}` : "Tất cả năm"}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-75 overflow-y-auto">
        <DropdownMenuItem onClick={() => handleYearChange("all")}>
          <FilterX />
          Mặc định
        </DropdownMenuItem>
        {years.map((year) => (
          <DropdownMenuItem
            key={year}
            onClick={() => handleYearChange(year)}
            className={selectedYear === year ? "bg-accent" : ""}
          >
            Năm {year}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}