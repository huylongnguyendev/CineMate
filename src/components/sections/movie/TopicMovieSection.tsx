import { Suspense } from "react"
import SectionTitle from "../SectionTitle"
import { Skeleton } from "@/components/ui/skeleton"
import TopicMovieList from "./TopicMovieList"

export default function TopicMovieSection({
  topic,
  title
}: {
  topic: "now_playing" | "top_rated" | "upcoming"
  title: string
}) {
  return (
    <>
      <section className="space-y-10">
        <SectionTitle title={title} />
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={`trending-${index}`} className="w-full h-63" />
              ))
            }
          </div>
        }>
          <TopicMovieList topic={topic} />
        </Suspense>
      </section>
    </>
  )
}
