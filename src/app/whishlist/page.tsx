"use client"

import Container from "@/components/common/Container"
import MoviseList from "@/components/whishlist/MoviseList"
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
import { notFound } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const [data, setData] = useState<(IMovieDetailItem | IShowDetailItem)[]>(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("list")
      if (storage) {
        const parse = JSON.parse(storage)
        return Array.isArray(parse) ? parse : []
      } else return []
    }
    return []
  })

  if (!data || data.length === 0) return notFound()

  const listMovie = data.filter((item): item is IMovieDetailItem => { return "title" in item })
  const listShow = data.filter((item): item is IShowDetailItem => { return "name" in item })

  return (
    <>
      <Container>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Phim chiếu rạp</h2>
          <MoviseList listMovie={listMovie} />
        </div>
      </Container>
    </>
  )
}
