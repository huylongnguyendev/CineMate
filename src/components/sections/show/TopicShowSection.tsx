import { Suspense } from "react"
import SectionTitle from "../SectionTitle"
import { Skeleton } from "@/components/ui/skeleton"
import TopicShowList from "./TopicShowList"

export default function TopicShowSection({
  topic,
  title
}: {
  topic: "airing_today" | "top_rated" | "on_the_air"
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
          <TopicShowList topic={topic} />
        </Suspense>
      </section>
    </>
  )
}
