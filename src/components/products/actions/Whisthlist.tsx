"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function Whisthlist({ id }: { id: string }) {
  const [list, setList] = useState<string[]>(() => {
    if (typeof window !== undefined) {
      const storage = localStorage.getItem("list")
      if (storage) {
        try {
          const parse = JSON.parse(storage)
          return Array.isArray(parse) ? parse : []
        } catch {
          return []
        }
      }
    } return []
  })

  function handleClick(id: string) {
    const newList = list.includes(id) ? list.filter(item => item !== id) : [...list, id]
    setList(newList)
    const value = JSON.stringify(newList)
    localStorage.setItem("list", value)
  }

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => handleClick(id)}
          >
            <Heart className={list.includes(id) ? "text-green-500" : ""} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Thêm vào yêu thích
        </TooltipContent>
      </Tooltip>
    </>
  )
}
