"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function HeaderBackground() {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 0)
    }

    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className={cn("absolute size-0 bg-background/50 backdrop-blur-md top-1/2 left-1/2 -translate-1/2 -z-10 transitions", isScroll && "size-full")} />
    </>
  )
}
