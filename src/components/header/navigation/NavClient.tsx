"use client"

import { useClickOutside } from "@/lib/hooks/useClickOutside"
import { useAppStore } from "@/lib/stores/store"
import { cn } from "@/lib/utils"
import { useRef } from "react"

export default function NavClient({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null)

  const isOpenMenu = useAppStore((state) => state.isOpenMenu)
  const setIsOpenMenu = useAppStore((state) => state.setIsOpenMenu)

  useClickOutside(ref, isOpenMenu, setIsOpenMenu)

  return (
    <>
      <ul
        ref={ref}
        className={cn("max-md:absolute top-0 -left-full max-md:w-10/12 max-md:h-dvh max-md:p-4 rounded-tr-md rounded-br-md max-md:bg-background z-50 md:flex items-center max-md:shadow-lg shadow-muted transitions", isOpenMenu && "left-0")}
      >
        {children}
      </ul>
    </>
  )
}
