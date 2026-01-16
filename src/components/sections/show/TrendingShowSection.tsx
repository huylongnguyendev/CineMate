import { Suspense } from "react"
import SectionTitle from "../SectionTitle"
import { Skeleton } from "@/components/ui/skeleton"
import TrendingShowList from "./TrendingShowList"

export default function TrendingShowSection() {
  return (
    <>
      <section className="space-y-10">
        <SectionTitle title="phim hot trending" />
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={`trending-${index}`} className="w-full h-63" />
              ))
            }
          </div>
        }>
          <TrendingShowList />
        </Suspense>
      </section>
    </>
  )
}
