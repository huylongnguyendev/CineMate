import Container from "@/components/common/Container"
import ShowDetails from "@/components/products/tv/details/ShowDetails"
import { IParams, ISearchParams } from "@/lib/types/params.type"
import { Suspense } from "react"

export default function page({
  params,
  searchParams
}: IParams & { searchParams: ISearchParams }) {
  return (
    <>
      <Container className="space-y-8">
        <Suspense>
          <ShowDetails params={params} searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  )
}
